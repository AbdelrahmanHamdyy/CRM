using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Query;
using Microsoft.Xrm.Sdk.Workflow;
using System;
using System.Activities;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows;

namespace UpdateEmployees
{
    public class UpdateEmail : CodeActivity
    {
        protected override void Execute(CodeActivityContext context)
        {
            IWorkflowContext workflowContext = context.GetExtension<IWorkflowContext>();
            IOrganizationServiceFactory serviceFactory = context.GetExtension<IOrganizationServiceFactory>();
            IOrganizationService service = serviceFactory.CreateOrganizationService(workflowContext.UserId);

            Guid primaryRecordId = workflowContext.PrimaryEntityId;
            string primaryEntityName = workflowContext.PrimaryEntityName;

            string relatedEntityName = "new_employee";

            Entity companyRecord = service.Retrieve(primaryEntityName, primaryRecordId, new ColumnSet("new_name"));
            string companyName = companyRecord.GetAttributeValue<string>("new_name");
            string companyEmail = companyRecord.GetAttributeValue<string>("new_email");

            ConditionExpression condition = new ConditionExpression();
            condition.AttributeName = "new_companyname";
            condition.Operator = ConditionOperator.Equal;
            condition.Values.Add(companyName);

            FilterExpression filter = new FilterExpression();
            filter.Conditions.Add(condition);

            QueryExpression query = new QueryExpression(relatedEntityName);
            query.ColumnSet.AddColumns("new_name", "new_companyname", "new_companyemail");
            query.Criteria.AddFilter(filter);

            EntityCollection employees = service.RetrieveMultiple(query);

            int count = employees.TotalRecordCount;

            for (int i = 0; i < count; i++) {
                Guid employeeId = employees[i].GetAttributeValue<Guid>("new_employeeid");
                Entity updatedEmployee = new Entity(relatedEntityName, employeeId);
                updatedEmployee["new_companyemail"] = companyEmail;
                service.Update(updatedEmployee);
            }
        }
    }
}
