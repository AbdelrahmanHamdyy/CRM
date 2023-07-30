# CRM

## Web based application used to automate sales,marketing and serivies activities in an organization

**Targets**

- Sales
- Marketing
- Customer Services

### Goals

- help organization acquire and retain customers
- reduce the time spent on administrative tasks
- serve customers efficiently
  > called 360 degree view : **Cause have all customers's info**

1. Web based application
2. Dynamics (Advanced marketing)
   1. How many likes this
   2. How many comments this
   3. How many favorite this

---

**WE have two options**

1. on permise (Locally)
2. on the cloud

---

##### Each entity has a `primary key` and `primary field`

> Currency in on permis doesn't change
> ADEFS in between local current and server`

##### View : Display record

---

Campaign = 7amla

### List types

- Dynamic (auto-mate entering customers in a list at any time)
- Static ( once campaign created , cannot be moved to any other customer)

###### Example: Dynamic used in notification alerts ,

## Difference between Contact , Account and Lead (Targets)

- Account --> Organization
- Contact --> Individuals in Organization
- Contact: already registered in Company
- Lead : lsa hyegy meno w 7ases eno interesed w mmkn ageb reglo fe el Comapany

### Each entity has a

- modified in , on and by
- Currency
- Locked (depends on List type)
- Source

### Subgrid: Shows table from oth/er entities

**Lockups**

### Campaign

- Status : Active or inActive
- Approved or rejected
- Code : Random Number (Auto numbering from script)
- Can have more than list of marketing
- Activites (tasks that we have discussed before)
- Leads (Customers that We have already invited and ended accepted)
- `Financial:` **Miscellaneous cost** ==> mkntsh 3amel 7easbha fe el cost, **Activity cost** (mn el campaign cost) , **Allocated** budget (expected budget) and **Total cost** (Actual cost)

> Microsoft can make an auditing to any companies which are not use whole features that provides these companies ,, `Ex: lw sherka buy an license w kaman md5la ms waset ,, w 3mlt 7aga already mawgoda f kda hya 3mlt  `

### Difference between Campaign and Quick Campaign

- **Quick Campian:** automated task as (email, phone..)
- **Campian:** set of automated tasks

---

#### Sales Hub

**business process Cycle**: (**StAGES**)

1. Lead Opportunity
2. Qualification
3. Development
4. Propose
5. Close

`b3d m 5lsna l lead w 3mlnalo qualify b2a ==> opportunity`
`kol opportunity leha product`

**Right-in product `msh` byt7t fl products table da byt-create fe sa3etha**

### Product

##### Sales Relationships

1.  up-sell (upgrade lel product bta3y)
2.  Cross-sell (habe3 7agten m3 b3d (**balsem w shampoo**))
3.  Accessory (habe3 7agten m3 b3d mn nfs l no3 zy l mob m3ah sha7n)
4.  Substitute

### Costs Types

1. Current Cost ( el se3r l 7aly , mfrod hwa byb2a a3la mn standard cost)
2. Standard Cost (se3r el so2 l asly)

### What is a price list?

Price lists tell your sales agents what to charge for your products or services.

- Lead: Potential Customer

#### Order Reason

1. Active => new,pending or on hold
2. Submitted => In progress
3. Cancelled => No Money
4. Fulfilled => Completed , partial
5. Invoiced => Invoiced

### Components of Entity

1. View
2. Forms
3. Fields
4. Charts
5. Dashboard
6. Messages
7. Relationships
8. Business Rules
9. Hierarchy settings
10. Keys

---

### Revice Button

- Reivce the data between agent and client if any feedbacks occurred

---

#### Publisher Main View

- each publisher has its own prefix (default system =new)
- organization can has more than publisher
- minimum prefix : 2 letters as eja (3 letters)
- name preview : eja_entity
- option value prefix
- marketplace zy el maawgod kda fe Vs aw github ( So2 fe customer services)

> Option set has label and value
> Egypt and 10k (3lashan a3rf ast5dmha fe l code )

#### Solution Main view

- El ms2ol 3n el solution hwa el publisher
- Contains components (customized)
- name doesnt accept spaces (only underscores)
- Publisher is selected from a dropdown list
- Display name da ely zaher bara ll user laken el name da ely bnst5dmo fl code
- search:
  - What is the configuration page?
  - Leh el option set btbdty mn 10000?
  - Eh el version dy? (Kaza nos5a mn el solution)
- Installation details: tw2eet ely d5lt feh l sol
- Nbd2 b2a n7ot components
- 2 Options: New or add existing
- Delete & remove: customized component is deleted means that it is totally gone laken lw 7atet component bl ghlt w 3mltlo remove hytshal mn el sol bs msh mn el system kolo
- Ay 7aga customized btet7at fl default sol
- Select a record then publish it
- Lw fe comp fl sol bta3y mwgod fe sol tany a2dr ashuf el dependancies ely benhom mn "show dependencies" like Account Dependancies
- What are solution layers?
- Add required components btzwd kol el components el asasya ll entity dy 3shan ary7 demaghy w mnsash field
- Ynf3 a5od 7agat mo3yna mn el entity zy fields w views w 1:N bas
- Include entity metadata: btwsf el data
- Include required components bygeb el components l asasya ll entity lma a5tarha
  - Yes: bya5od el related entities
  - No: mbya5odsh, bya5od el entity dy bas
- Remember againL REMOVE NOT DELETE
- Required components: el 7agat l related lya ely ana bst5dmha laken el dependencies dy el entities ely bt3tmd 3lya
- Report: Contains Statistics/Charts
- Managed properties: A2dr a5tar en el managed solution lma yro7 env tanya yb2a msln msh customizable aw mmkn aghyr el display name bs el components msh btb2a mwguda fl default lw ms7tha
- Managed sol: Folder I export as managed 3shan m7dsh y3dl feh (7aded 7agat mno mttghyrsh)
- When an unmanaged sol is imported then its components are part of the default solution
- search: Ezay a3dl haga fl managed solution?
- Before exporting a sol we make sure that we published all customizations
- Only published customizations are exported
- Published all customizations: btupdate kol l entities w tsave kol l t3deelat l 3mlthha
- Publish: Saves certain entity changes
- Missing required components could be because these components are already present in the org Im exporting to.
- Usually export to dev/testing
- When system settings are imported, they override the settings in the org

#### Package Type

- Inmanaged solution: able to modify it
- Managed solution: canot direclty modify it directly , but can export it directly to antoher Organization (Development to testing)

#### Translations

- export solution to eg: excel sheet contains languages (English and arabic with a mapped codes) `English : 1000` , `Arabic :3000`
- Targma fawrya lel nas el 3ayza lo3`da tanya mo3ynza ,, f btr a3ml l kol klma tranlsation

> Out of the box : gya m3 el code (by default) => Vanilla (el 7agat ely gya m3 el systems)
> Customized ( el7agat el b3mlha ana customization)

#### Create New Entity

- Plural name: is displayed in sidemap
- Virtual enity: data comes from external sources
  - **has**
    - External Name
    - External Collection Name
    - can access it by code (C#) , implementation function that retrieves multiple records from the database
- Data source: location of the data source (path that mapped to the actual data basa or Datewarehosing)
- Ownership: may be `organization` | `User or Team`
- **So2al**: Difference between activity entity and normal entity
  > if Entity if _activity_ must be `User or Team in Ownership`

##### Areas that display this Entity

- Sales
- Marketing
- Customer Services
- Settings

###### Primary Field

> Primary field : dah el esm ly byzhar beh el record w 2dar a
> search beh

- Field Requirement
  - Business Required
  - Optional

#### Main Form

- b2dar a7ot feha aktr mn components , b7ot feha l sections w el footers w el navigations
- k2ny b2sm ay saf7a website
- Can add spacer , header , footer General
- b select mn el body w a7ot l 7aga l ana 3ayzha w drag w drop
- **Created by (Deiegate):** name created by sha5s ma bs hwa msh l 3amel create l nafso
- page must has one tab

- Searchable field: can find this record through searching for a searchable field
- Field security: Enable for the field data to be asterisks
- Auditing: Lw 7sl change fl field, system by-track el change da (like in a log file)
- Search: Appears in global filter in interactive experience
  & Sortable in interactive experience dashboard
- **Calculated field type** means that we evaluate this field based on a condition from another field for example
  - For strings: Concatenate function
- Search: IME Mode
- Mynf3sh nghyr el field type wala el format lma n3ml field
- Lookup in one entity enables me to directly create a subgrid in the other entity
  - Lookup: N:1

**TASK: 2 lookups that depend on each other**

- 2 accounts in a hospital
- Create entity
- Create 2 lookups
- value in field of account changes list of contacts
- filtered lookups aw related

> Search in ms docs

---

#### Types of Views

- System views
  - Quick find view
  - Advanced find view
  - Assocaited view
  - Lookup view
- Personal views
- Public views

### task

- choose entity
- create records in this enityt
- create new view (public)
- Edit filter createria
- put filter crateria

---

#### Groups:

- Base unit (Default unit or default group): as3`ar 7aga mmkn a2demha mn l sherka
- unit group: array of default group\

##### lma agy a3ml opportunity babd2 l awl mn l product w barboto b price list 3lashan ysm3 l awl w b3dha aro7 oppor. w a5leh lead w akml b2a

> Javascript with plugin

##### In business rules

- Activate button: by3ml already awl 2 steps ( save and validate)

##### Business procecss Flow

- Lead
- Opportunity
  - Qualify
  - Development
  - Propose
  - Close

> lw 7asal ay moshkla w el ragel 5alas 7asal m3ah close lel flow kolo w rg3 f fe kalamo ,,
> SLA b2a de byb2a fe duration btedy mohla lel customer dah y5ls l flow fe ad kolo , lma byerg3 tany byrg3o 3la opportunity

- BPF: has max 5 entity
- each entity has a 10 BPF
- BPF: up to 30 stage

#### Web resources (JS)

- UI Events

  - onload: kol m a3ml load hy execute l function
  - onsave: kol m a3ml save hy execute l function

- FormContext as paramter

```javascript
// each change occurred , save the changes
function saveofmcc{
Xrm.Page.data.entity.save(); // save the entity
}

function getUser(){
var owner = Xrm.Page.getAttribute("ownerid").getValue([0]);

  if(owner.name!="CRM CRMAdmin"){
  Xrm.Page.getAttribute("statusCode").setValue("123121");
  Xrm.Page.getAttribute("test").setValue(true);
  Xrm.Page.data.entity.save(); // save the entity
}
Xrm.Page.data.entity.save(); // save the entity Again to ensure saving
}
function displayName(executionContext){

## TODO debugger
  var formContext=executionContext.getFormContext();


  var firstName=formContext.getAttribute("firstName").getValue();
  var secondName=formContext.getAttribute("secondName").getValue();
  console.log(firstName + " "+ secondName)
}
```

- Invisible : hide field
- disable : locked field
- Attribute=field
- Control ==> debug on header
