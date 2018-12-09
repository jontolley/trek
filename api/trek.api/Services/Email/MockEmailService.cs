using Microsoft.Extensions.Options;
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
    public class MockEmailService : IEmailService
    {
        private readonly IEnumerable<string> _contactEmails;

        public MockEmailService(IOptions<AppSettings> appSettings)
        {
            var contactEmails = appSettings.Value.ContactEmail;
            _contactEmails = contactEmails.Split(',');
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

        public async Task<IEmailResponse> SendMessage(EmailMessage email)
        {
            await Task.Delay(1000);

            var response = new SimpleEmailResponse()
            {
                StatusCode = System.Net.HttpStatusCode.Accepted,
                Body = null
            };

            return response;
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
