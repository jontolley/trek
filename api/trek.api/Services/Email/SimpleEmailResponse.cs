using System.Net;
using System.Net.Http;

namespace trek.api.Services.Email
{
    public class SimpleEmailResponse : IEmailResponse
    {
        public HttpStatusCode StatusCode { get; set; }
        public HttpContent Body { get; set; }
    }
}
