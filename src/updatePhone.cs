using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Query;
using Microsoft.Xrm.Sdk.Workflow;
using System;
using System.Activities;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace UpdateAccount
{
    public class UpdatePhone : CodeActivity
    {
        protected override void Execute(CodeActivityContext context)
        {
            // Get WorkFlow Context
            IWorkflowContext workflowContext = context.GetExtension<IWorkflowContext>();
            // Get the organization service factory
            IOrganizationServiceFactory serviceFactory = context.GetExtension<IOrganizationServiceFactory>();
            // Create an organization service
            IOrganizationService service = serviceFactory.CreateOrganizationService(workflowContext.UserId);
            // Initialize tracing service
            ITracingService tracingService = context.GetExtension<ITracingService>();

            // Get the currect record ID and its entity name
            Guid recordId = workflowContext.PrimaryEntityId;
            tracingService.Trace("recordId: " + recordId);

            string entityName = workflowContext.PrimaryEntityName;
            tracingService.Trace("Entity Name: " + entityName);

            // Retrieve details about an account record
            Entity accountRecord = service.Retrieve(entityName, recordId, new ColumnSet("name", "telephone1"));
            string accountName = accountRecord.GetAttributeValue<string>("name");
            tracingService.Trace("Account Name: " + accountName);
            
            string phoneNumber = accountRecord.GetAttributeValue<string>("telephone1");
            tracingService.Trace("Phone: " + phoneNumber);

            Entity updatedAccount = new Entity(entityName, recordId);
            updatedAccount["telephone1"] = "01043216758";
            service.Update(updatedAccount);
        }
    }
}
