## Entities:

- Timesheet
- Employee (Could also be manager)
- Task
- Project (Ex. Training) [Look-up field in the tasks table]

## Explanation

- Employee ID and Task ID is an auto-increment number
- The task has view mode and possibly a create mode in case we want to add new tasks
- Task table has its ID (Number) and the project under it as a lookup field & the number of hours taken for the task
- The task is daily and the employee types in the starting hour and ending hour (Number of hours = End - Start) so the number of hours in the timesheet summary is a calculated field
- Month from the timesheet will be selected from a Calender date field once
- If the reporting period is not fixed, then we will place another field to choose the starting day & count 30 days for the submission day
- Working days [Locked] do not include holidays (Fri and Sat) and they also exclude vacations
- Submission due date is the last day of the reporting period
- Approval due date is 5 days after the submission date
- On the submission day, the timesheet will be assigned to the manager and the employee shouldn't be able to modify it further. The manager will have the option to click on a button that marks this timesheet as approved or rejected.
- Employee will have a lookup field that relates to another employee who is his manager (Employee form will show the manager name)
- Reported days is the sum of number of hours in the timesheet summary divided by 8 (Working hours per day)

## Our additions

- Add Columns in the timesheet summary: Notes or comments for a task
- Specify the day of each task in the summary
- Add the manager name as a field
- Vacation days will be a multi-select option set field when creating the timesheet
- The manager will have a view that shows all timesheets filtered by the manager name, the timesheet is submitted, and the current date is before the approval date
- Mark today as holiday: A button that adds/removes the current day from the employee's vacation days so that we can recalculate the working hours
  - It will be a single line of text and the days are separated by commas for example (Array-like field)
- Extra field on the form indicating whether this timesheet is approved or not
- Charts:
  - A pie chart showing the number of working hours in each day of the reporting period
  - A bar chart showing the project appeared in how many tasks
- Add SLA on the submission and approval date

### Questions

- Is the employee the one creating this timesheet or do we assign him (Like an end user for dynamics)
- Do we fix the period for each month?
- How will the manager receive this timesheet summary?
- Is submission automatic or will there be a submit button?
