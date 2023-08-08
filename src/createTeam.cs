using Microsoft.Xrm.Sdk;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Team
{
    public class CreateTeam : IPlugin
    {
        public void Execute(IServiceProvider serviceProvider)
        {
            ITracingService tracingService = serviceProvider.GetService(typeof(ITracingService)) as ITracingService;
            tracingService.Trace("Plugin Started: " + DateTime.Now);
            try { 
                IPluginExecutionContext executionContext = serviceProvider.GetService(typeof(IPluginExecutionContext)) as IPluginExecutionContext;
                IOrganizationServiceFactory serviceFactory = serviceProvider.GetService(typeof(IOrganizationServiceFactory)) as IOrganizationServiceFactory;
                IOrganizationService service = serviceFactory.CreateOrganizationService(executionContext.UserId);

                Entity account = executionContext.InputParameters["Target"] as Entity; // Account Record calling the Plugin
                string accountName = account.Attributes["name"] as string;

                tracingService.Trace("Account Name: " + accountName);

                Entity team = new Entity("team");
                team["name"] = accountName;
                team["teamtype"] = new OptionSetValue(0); // Owner Team
                team["businessunitid"] = new EntityReference("businessunit", new Guid("63D1C4EE-862D-EE11-BDF4-00224884F6FB"));
                
                Guid teamId = service.Create(team);
                tracingService.Trace("Team Id: " + teamId);
            } catch(Exception ex) {
                tracingService.Trace("Exception: " + ex.Message);
            }
        }
    }
}
