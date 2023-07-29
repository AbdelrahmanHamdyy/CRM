# Actions Notes
* we don't directly deal with databases, usually we use the C# code to call apis to deal with databases. 
  
* el business byshof en feh 3eeb, eno mby2drsh yshof el database bt3to da fe 7alet eno shaghal on cloud.
* w feh sharekat bt3ml keda lw m3ndhash mane3 en el data bta3tha 7d ye2dr yshofha. 
* lakn feh sharekat mabtwaf2sh 3la el mwdo3 da, fa bt5ly kol shooghlaha on premiss, 34an m7dsh ye2dr ybos 3la el data bt3tha tb2a more secure.  
* lw 3auz t3rf el primary key fe table fe database, htla2y esmo nfs esm el table b3deh Id
  * tableId.
* aw rightclick 3la el table, w dos design w htla2y gmb el column name feh key gold keda. 


# Actions
* by5tlf eh 3n el workflow? 
  * 1. leh input w output. 
  * 2. mmkn mt7ddlosh entity, enta ht3mlo global w tst5dmo 3la ay entity 3ady, zy enk 3auz t3ml 7aga esmha esclation, enk tsa3ad el mwdo3 lel manager lw el junior m3mlsh task mo3yn, fa de 7aga msh 5asa b entity wa7da, de te2dr ttb2ha 3la kol el entities. 
  * fa byb2a general action by3ml task mo3yna. 
  * el action dayman byshtghl fl real-time. 
  * el action byshtghl as a step in the workflow.
  * lw el action kant fe background workflow, w el workflow kant fl background, fa hwa hynfz el steps fl background, w b3den lama yegy 3nd el action step hyro7 ynfzha fel real time - ynfzha el awl - w b3den yerg3 ykml el workflow fl background 3ady. 
  * el action mafhash 7etet el scope, w da 34an hwa byshtghl fe el user context, bm3na en lw el action feh shwyt 7agat 3auz t3mlha, lw el user leh permission y3mlha, fa el action hy3mlha, lw mlhosh fa hydrb error. 
  * el permission de hya el security role. 
  * el action mfhash 7etet el on-demand, l2n el action byshtghl lama tndh 3leh.
  * w mlhosh trigger lama y7sl tndh 3leh, laa hwa lazm ykon feh manual trigger zy eny a7oto 3la button w lama ytdas 3leh ynfzha.
  * bm3na mynf34 trboto b event zy en fe new field created or aw field changed aw keda.
  * fa hya aknha function enta bt7ded enta hatnadeha emta w ezay. 
* Creation of an action:
  * 1. enable rollback: 
    * da m3nah eny lw kont 7atet kaza action w feh kaza step, lw ana 3aml enable, hyrg3 kol el steps el ablha aknha undo keda. lw m4 3amlha hyo2f 3nd el error. 
    2.  as a business process step, enk te2dr t7otha gowa el business process.
    3.  process argument: de el input
        1. Name
        2. Type: 
            1.  entity collection: list of records. 
            2.  Entity Reference: 
                1.  look up
            3. Entity 
               1. Record
            4. Money
               1. Currency
            5. Picklist
               1. Option set 
        3. Direction: 
            1. In: input
            2. Out: output
         4. Required: 
            1. 34an lw m3mlsh assign leh value ydrb error.
    4. Active as:
      1. proces.
      2. process template.  
   4. add steps:
      1. htla2y feh assign value, de zyada 3n el workflow
      2. de el fekra bta3tha enk 3auz t7ot kema lel value de abl ma t3mlha ka output.
      3. 