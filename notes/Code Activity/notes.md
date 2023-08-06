# Extending Workflows using coding activity
* we extend workflows to be able to control multiple records not only one record or one field. 
* to create a project:
  * Class Library (.NET Framework)
  * open VSCode
* el C# mbyb2ash ader eno yfhm eno byt3aml m3 dynamics : 
  * right click on the project name
  * manage NuGets Package
  * download Microsoft.CrmSdk.CoreAssemblies
  * download Microsoft.CrmSdk.Workflow
  * (you will have to install them each time -> but i think that there will be a way to make a permenant installation, and we can just add the packages.)
* enta dayman wnta btt3aml m3 el dynamics enta dayman btt3aml m3 service, el hwa api. 
* el mfrod te3ml inherite le class esmo CodeActivity
* lama t3mlha hydek error, lazm t3ml add System.Activities fl imports.
* w b3d keda hydek error, 34an el function bt3tk lazm t3mlo overwrite le function esmha Execute
* fa lazm te3ml function esmha Execute w tb3tha override
* gowaha htla2y haga esmha CodeActivityContext
* da 3bara 3n
* bn3ml object esmo IWorkFlowContext, w lazm ne3ml import le library 34an yeshtghl
* w 34an n3ml assignment lazm ne3ml context.GetExtension<IWorkflowContext>() 34an hya 3bara 3n template class. 


# to add the workflow to the system 
* we install Plug-in Registration Tool
* then we open it and sign in. 
* we select the plug in following these steps: 
  * press on new
  * specify the location of the assembly
  * fa da m3nah enk tro7 ll path bta3 el C# w t5ush 3la el debug folder, w b3den t5tar el .dll file, elly enta kont lsa 3amlo, htl2eh b esm el file bta3k
  * specify the isolation mode: 
    * da m3nah enk el dll file da msh hyt3aml gher m3 el dynamics bs.
    * lw none, fa mmkn kaza haga tanya mmkn tstkhdm el dll file bta3k. 
     
  * specify the location
    * usually we select the database.
  * then we press on register selected plugins.
    * lw enta mkontsh 3aml el signature lel dll file, hydek error y2olk no token is found. 
    * fa lazm tro7 ll project bta3k
    * w tdos 3la right click 3la esm el project
    * w tdos properties.
    * w t5tar signing 3la el shmal keda
    * check on sign the assembly
    * crate new keyfile
    * add password
    * select the signature algorithm 
    * then press ok
    * then rebuild the system to recreate the dll file. 
# how can we use it? 
* go to processes from settings. 
* create a new process
* select the entity
* set the process name. 
* select the category as workflow
* then press ok
* then go to add steps
* you will find the customized workflow steps, select yours!

# How can we open the tracing
* go to the settings.
* go to administrations.
* go to system settings.
* select the All on the Plug in crossponding option set. 


# Differences between it and the plug in
* the plug in is more powerful than the workflow.
* the plug in can not be added as a step in the workflow.
* search... 