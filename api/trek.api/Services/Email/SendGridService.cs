using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Options;
using SendGrid;
using SendGrid.Helpers.Mail;
using System.Collections.Generic;
using System.IO;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;
using trek.api.Models;
using trek.api.Models.Entities;
using trek.api.Utils;

namespace trek.api.Services.Email
{
    public class SendGridService : IEmailService
    {
        // https://docs.microsoft.com/en-us/azure/sendgrid-dotnet-how-to-send-email

        private readonly string _apiKey;
        private readonly IEnumerable<string> _contactEmails;
        private readonly IHostingEnvironment _hostingEnvironment;

        public SendGridService(IHostingEnvironment hostingEnvironment, IOptions<AppSettings> appSettings)
        {
            _hostingEnvironment = hostingEnvironment;

            _apiKey = appSettings.Value.SendGridApiKey;
            var contactEmails = appSettings.Value.ContactEmail;
            _contactEmails = contactEmails.Split(',');
        }

        public async Task<IEmailResponse> SendMessage(EmailMessage email)
        {
            var client = new SendGridClient(_apiKey);
            var message = new SendGridMessage()
            {
                From = new EmailAddress(email.From),
                Subject = email.Subject
            };

            if(email.ContentType == EmailContentType.Html)
            {
                message.HtmlContent = email.Message;
            } else
            {
                message.PlainTextContent = email.Message;
            }

            foreach (var recipient in email.To)
            {
                message.AddTo(recipient);
            }            

            var sendGridResponse = await client.SendEmailAsync(message);

            var response = new SimpleEmailResponse()
            {
                StatusCode = sendGridResponse.StatusCode,
                Body = sendGridResponse.Body
            };

            return response;
        }

        public async Task<EmailMessage> GenerateEmailMessageAsync(Contact contact)
        {
            var email = new EmailMessage
            {
                To = _contactEmails,
                From = "contact@spokaneeasttrek.org",
                Subject = "Pioneer Trek Message",
                ContentType = EmailContentType.Html,
                Message = await BuildEmailMessageAsync(contact)
            };

            return email;
        }

        private async Task<string> BuildEmailMessageAsync(Contact contactInfo)
        {
            string template;

            var assembly = Assembly.GetEntryAssembly();
            var resourceStream = assembly.GetManifestResourceStream("trek.api.Services.Email.Templates.contactUs.html");
            using (var reader = new StreamReader(resourceStream, Encoding.UTF8))
            {
                template = await reader.ReadToEndAsync();
            }

            var message = template
                .Replace("__NAME", contactInfo.Name)
                .Replace("__EMAIL", contactInfo.Email)
                .Replace("__MESSAGE", contactInfo.Message)
                .Replace("__WARD", contactInfo.Ward);

            return message;
        }
    }
}
