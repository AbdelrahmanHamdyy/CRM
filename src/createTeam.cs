using Microsoft.Crm.Sdk.Messages;
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

                Guid businessUnitId = new Guid("63D1C4EE-862D-EE11-BDF4-00224884F6FB");

                Entity team = new Entity("team");
                team["name"] = accountName;
                team["teamtype"] = new OptionSetValue(0); // Owner Team
                team["businessunitid"] = new EntityReference("businessunit", businessUnitId);
                
                Guid teamId = service.Create(team);
                tracingService.Trace("Team Id: " + teamId);

                // Add myself as a member to this newly created team
                Guid userId = new Guid("D2D9C4EE-862D-EE11-BDF4-00224884F6FB");
                Guid[] members = new[] { userId };
                AddMembersTeamRequest addRequest = new AddMembersTeamRequest
                {
                    TeamId = teamId,
                    MemberIds = members
                };
                service.Execute(addRequest);

                // Add Security Role to the team
                Guid securityRoleId = new Guid("9FDCFB69-1B36-EE11-BDF4-002248829BD5");
                service.Associate("team", teamId, new Relationship("teamroles_association"), new EntityReferenceCollection() { new EntityReference("role", securityRoleId) });
            } catch(Exception ex) {
                tracingService.Trace("Exception: " + ex.Message);
            }
        }
    }
}
