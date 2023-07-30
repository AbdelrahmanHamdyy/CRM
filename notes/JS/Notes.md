# Javascript notes (similar to business rules)

# Web resources:

- it is our java script.
- da byb2a 3bara 3n URL shayl el script bta3k, elly feh el functions elly mktoba bl js w enta 3auz tnfzha 3la form mo3yna
- go to customization
- default solution
- web resources
- create new baa aw e5tar baa

# General script

- bngm3 feh el functions el general, elly mmkn nst5dmha fe kol haga fl system.
- w de ne2dr ntbha 3la kol el forms.

# Form script

- enta m3 kol project, btakhud kol el scripts elly 3mltha fll mshare3 el adema elly 3ndk, 34an lw 3auz tb2a tstkhdmha tany.
- good practice is to make both name and displayName
- 34an

# Form Properties

- de bn3dl feha 34an ne2dr ennha n7ot el web resources.
- bnft7 el form mn ay entity
- w ndos 3la el form properties, de btb2a fo2 gmb business rules.
- w byb2a 3ndk baa el libraries, de elly enta btkon aslun 3amelha w 7atet gowaha el functions wl scripts

# Event handler

- hna by2olk hattsrf m3 el event ezay.
- fa 3ndk events
  - OnLoad: kol mara ye7sl load l7aga haynfz el functions elly enta e5trtha.
  - OnSave: kol mara t3ml save hayro7 yendh el function elly enta e5trtha.
  - OnChange: kol mara y7sl ay change fe el field da haro7 andh el function elly enta e5trtha.

# JavaScriptNotes

- bnst5dm 7aga esmha Xrm.Page de 34an te2dr te3ml access lel items elly gowa el form
- w hwa by3rf, 34an enta aslun bt3mlo include gowa el form fhwa byfhm hwa shghal fen.
- executionContext:

  - el js engine hwa elly by3mlha 34an yeb2a 3auz ye3rf ezay ye3ml t7welat 3ndk.
  - fa hwa mmkn ykon by7aded ad a memory el system bta3k me7tago w yebd2 baa ye7gz kol da lel system bta3k.
  - lazm ab3to fe el function ka first parameter .

- Xrm -> el page elly shghalen beha.
- ![Alt text](image.png)
- .getAttribute('attribute name') -> returns the value corresponds to this value.
- .setRequiredLevel -> bt2oly el field required wla laa.
- 173030075 -> da id by-map l esm mwgod fe option set. (da el value bta3 el item da fl option set)
- e7na bnfdl el business rule, aktur mn el javascript, l2n el business rule bttnfz fe la7ztha, lakn el javascript mmkn takhud w2t aw keda w mmkn tdkhul gowa queue twela, fa hybt2 el denya.
- w el C# abta2 baa mn el javascript.
  - fa ehna bnbd2 bl business rules, b3den js, b3den baa el c#
- .getControl -> Control Obj. // search ya batal.
- lw 3auz t3ml set le value bn7otha ben double qoutes.
- lakn lw 3auz tgeb el value el gowa el map el corresponding le key mo3yn bnst5dm signel qoutes.
  - example : set name to ahmed
    - set("Ahmed")
  - example: set name to the map which corresponds to the key ahmed
    - set('ahmed')
- to reload the page we use the refresh function
  - Xrm.Page.data.refresh();
- alert('Alert Message') -> this is an alert function used to alert the user of doing something wrong.

# How can we create a new script to be ran.

- open any entity.
- open form
- then press on Form Properties.
- then select events. (it should be the default page).
- if you have existing library, select it from the Form Libraries section, else you can press **add** then new to create a new script.

# Xrm API object

- ![Alt text](image-1.png)
- ![Alt text](image-2.png)
- ![Understand the Client API object model](image-3.png)

# References

- https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/events-forms-grids?tabs=add-event-handlers-legacy#add-or-remove-event-handler-function-to-event-using-code
- https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/clientapi-execution-context?tabs=pass-execution-context-legacy
- https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/understand-clientapi-object-model
- https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/clientapi-xrm#xrm-object-model
- https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-utility/getglobalcontext
- https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/clientapi-xrm
- https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-navigation/openalertdialog
- https://learn.microsoft.com/en-us/dynamics365/customerengagement/on-premises/customize/form-properties-legacy?view=op-9-1
- https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-navigation/openerrordialog
