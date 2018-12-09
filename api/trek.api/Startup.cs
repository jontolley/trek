using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using trek.api.Models;
using trek.api.Services;
using trek.api.Services.Email;
using trek.api.Utils;

namespace trek.api
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            var appSettingsSection = Configuration.GetSection("AppSettings");
            services.Configure<AppSettings>(appSettingsSection);
            var appSettings = new AppSettings();
            appSettingsSection.Bind(appSettings);

            var allowedOrigins = @"http://trek.local:4200,https://spokaneeasttrek.org,https://trek.azurewebsites.net".Split(',');
            services.AddCors(options =>
            {
                options.AddPolicy("AllowSpecificOrigin",
                    builder => builder.WithOrigins(allowedOrigins)
                    .AllowAnyHeader()
                    .AllowAnyMethod()
                    .AllowCredentials());
            });

            services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Version_2_1);

            var connectionString = Configuration["ConnectionStrings:TrekDB"];
            services.AddDbContext<TrekContext>(options => options.UseSqlServer(connectionString));

            services.AddScoped<ITrekDataRepository, TrekDataRepository>();

#if DEBUG
            services.AddScoped<IEmailService, MockEmailService>();
#else
            services.AddScoped<IEmailService, SendGridService>();
#endif
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseHsts();
            }

            app.UseCors("AllowSpecificOrigin");

            app.UseHttpsRedirection();
            app.UseMvc();
        }
    }
}
