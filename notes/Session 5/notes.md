# Session notes (Business process flow and java script)

* it guides me as an end user.

* b7ot kol stage, w a2ol eh ahm el m3lomat elly tl3t beha mn el stage de. 

* hya hadfha enk t5ly el user ymshy 3la steps mo3yna 34an tewsl ll target fl akher, aknk bt3ml sales cycle keda, lazm tbd2 b lead -> qualify -> develop -> close msln.
* fa el purpose, enk telzm el user eno ye3ml 7aga mo3yna.  

* fa hya btdeny conclusion lel 7asal, bdl ma ndkhol 3la profile kol sh5s w ndos fl details. 
* bnakhud molkhs 3am keda. 
* zorar el next by5lene atn2l mn stage le stage tanya gowa nfs el record( akny bamla bynat gdeda bs l nfs el shakhs. ).
* lakn lw khadt action (zy eny ados qualify msln fa keda ana bro7 le record gded.)
* da m3nah enk bta5ud shwyt details mn el table el fat w tro7 beha le table gded, fa da keda enta btro7 record gded fe table mo5talef. 
* fa keda enta lw 3mlt action zy enk tdos qualify, enta bt7wl el lead le potential customer. 
* lakn zorar el next, aknk bttn22l ben el columns bto3 nfs el record wnta 3mal temlahom. 
* zorar el next da byb2a mawgod fe el process progress flow.
* Maximum number of entities in a business process flow: 5
* Minimum number of entities in a business process flow: 1
* 3ndna 7aga esmha SLA, de btdy duration lel cycle
* flazm el opportunity de msln lazm t5ls fe w2t mo3yn aw keda.
* ffa el user bta3k aw el agent lazm y5ls el opportunity de fe el w2t da
* lw el duration 5elst, fa el opportunity de el mfrod tt2fl. 
* lw el user 7b yeft7ha tany, fe zorar esmo re-open opportunity.
* w lama bndos 3leha, byft7 duration mo3yn.
* lw 5lst, msh bynf3 neft7ha tany. 
  
  ---

# Inserting steps into each stage
* we have one of two ways:
  1. inserted manually
  2. using business rule. (recommended)
     1. to do this we need to make ...


# Security roles
* ay user bydkhul 3ndy fl system, byb2a leh shwyt sala7yat bs hya elly ye2dr ye3mlha, gher keda hwa limited. 
* el system adminstrator, byb2a aktur 7d leh roles. 
* w el manager ghalebn byb2a leh a2al roles, 34an byb2a a5ro ybos 3la dashboard msln. 
* hnshr7ha el session el gyaa.

# how many business process flow for single entity? 
* 1-10. 
* enta lkol entity, bt2dr enk t48l 3leha 10 business process flows, w te2dr tbdl benhom. 
* fa kol ma btst5dm entity gowa workflow, enta bt-increment 3dd el process flows bto3 el entity de. 

# how many stages for single business process flow?
* 1-30.

# how can we create a business process flow
* 1- go to settings -> processes -> new
* or we can find it in the default solution.

# Create process flow details 
* Process name 
* Category:
  *  Business process flow
  *  Action
  *  Dialog
  *  workflow
* Entity
  * choose the entity you want

> practice, practice, practice. 


# Conditions
* enta bdl ma tkon bt7ot stages bs fl flow, laa enta mmkn t7ot conditions.
* w lw el condition de true, enta bt7ot stage, w lw false, enta bt7ot stage tanya.

# Composiotion
* Data step
  * bngm3 data 3n el record da. 
* workflow 
  * 7aga bt3tmd 3la 7aga bt3tmd 3la 7aga, fa btshghl 7aga. 
  * its details:
    * Stage entry: m3 byadt el stage.
    * stage exit: m3 nhayt el stage. 
* action step:
  * de el action process elly 3ndy.
  * action y3ny awl ma el entity y7slo trigger, el action da yet3ml. 
  * zy enk ttl3 pop up window msln.
* flow step:
    * de business process flow, ana kont 3mlha abl keda, w 3auz adomha 3la el business process flow elly b3mlha delw2ty baa. 

# Order Processes
* de bt2oly men yezhrly el awl, lama adkhul 3la el account da aw 3la el entity baa el enta kont shaghal 3leha.
* b7es lw 3ndk multiple items, aw multiple processes, fa bn7ot men yezhrly el awwl w keda, wbn7ot e7na baa el trteb bta3na. 

# Web resources:
* it is our java script. 
* da byb2a 3bara 3n URL shayl el script bta3k, elly feh el functions elly mktoba bl js w enta 3auz tnfzha 3la form mo3yna
* go to customization
* default solution
* web resources
* create new baa aw e5tar baa
  
# General script
* bngm3 feh el functions el general, elly mmkn nst5dmha fe kol haga fl system. 
* w de ne2dr ntbha 3la kol el forms. 


# Form script
* enta m3 kol project, btakhud kol el scripts elly 3mltha fll mshare3 el adema elly 3ndk, 34an lw 3auz tb2a tstkhdmha tany. 
* good practice is to make both name and displayName 
* 34an 

# Form Properties
* de bn3dl feha 34an ne2dr ennha n7ot el web resources. 
* bnft7 el form mn ay entity
* w ndos 3la el form properties, de btb2a fo2 gmb business rules. 
* w byb2a 3ndk baa el libraries, de elly enta btkon aslun 3amelha w 7atet gowaha el functions wl scripts

# Event handler
* hna by2olk hattsrf m3 el event ezay.
* fa 3ndk events
  * OnLoad: kol mara ye7sl load l7aga haynfz el functions elly enta e5trtha. 
  * OnSave: kol mara t3ml save hayro7 yendh el function elly enta e5trtha. 
  * OnChange: kol mara y7sl ay change fe el field da haro7 andh el function elly enta e5trtha.


# JavaScriptNotes
* bnst5dm 7aga esmha Xrm.Page de 34an te2dr te3ml access lel items elly gowa el form
* w hwa by3rf, 34an enta aslun bt3mlo include gowa el form fhwa byfhm hwa shghal fen. 
* executionContext:
  * el js engine hwa elly by3mlha 34an yeb2a 3auz ye3rf ezay ye3ml t7welat 3ndk. 
  * fa hwa mmkn ykon by7aded ad a memory el system bta3k me7tago w yebd2 baa ye7gz kol da lel system bta3k. 
  * lazm ab3to fe el function ka first parameter .
  