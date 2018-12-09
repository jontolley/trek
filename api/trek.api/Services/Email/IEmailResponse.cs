using System.Net;
using System.Net.Http;

namespace trek.api.Services.Email
{
    public interface IEmailResponse
    {
        HttpStatusCode StatusCode { get; set; }

        HttpContent Body { get; set; }
    }
}
