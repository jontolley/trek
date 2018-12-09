using System.Threading.Tasks;
using trek.api.Models;
using trek.api.Models.Entities;

namespace trek.api.Services.Email
{
    public interface IEmailService
    {
        Task<IEmailResponse> SendMessage(EmailMessage email);
        Task<EmailMessage> GenerateEmailMessageAsync(Contact contact);
    }
}
