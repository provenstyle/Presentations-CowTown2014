using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(DurandalDemo.Startup))]
namespace DurandalDemo
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
