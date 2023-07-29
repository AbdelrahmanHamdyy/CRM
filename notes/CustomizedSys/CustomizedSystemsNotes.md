# Notes on Customize the system, publisher & ...
* open settings
* by default the organization will be created with a default publisher. 
* el publisher da el shakhs bykon 3ml solution w bynshro 34an lw 7d tany 3auzo fa mmkn yeshtreh
* el solution da akno project khlsan, enk kont shghal 3la system le mostshfa msln, wnta 3mltha w  zwdt entities w keda, fa keda da esmo solution w enta esmk publisher. 
* kol publisher byb2a leh prefix mo3yn 34an lw 3auz ast5dmo.
* mmkn ne3ml t3del 3la el default el mwgod, aw mmkn n3ml wahed gded. 
* el publisher byb2a 3bara 3n 
* el out of the box hwa el esm elly mlhosh prefix. 
* el out of the box dol el 7agat elly mwgoda fl system. 
* el customized dol el 7agat elly ana 3amelha. 
* el minimum characters for the prefix is 2
* el option set hya 3bara 3n shwyt values howa el dropBox.
* w mmkn yeb2o strings 3ady, bs dayman wehna bnt3aml fl code, bna5ud el klam da ka arkam.
* fa el arkam de enta bt7dd hya el mfrod tebd2 mnen 3n tre2 el option value prefix, w recommended eno yebd2 mn 10,000. 
-------
> El hadaf mn el session de enk te3rf ezay tedef shwyt entites 3la el system bta3k. 
# Solution. 
* Display name -> da esm el solution. da el esm elly byzhr lel nas bara w keda. 
* Name -> da el scheme name elly btst5dmo fl code
* Deletion -> da lw e5trto bytms7 kolo 5ales (very dangerous!) -> sayevt ya 7ossam 
* remove, da m3nah enk bs btshelo mn el system 5ales, w most7el t7tago
* ay 7aga btt3ml default solution 3ady. 
* el defualt solution gowa customize the system. 
* Publish button: da bdos 3leh 34an a2dr eny a3ml publish lel solution, 34an yesm3 bara lel user.
* Solution Layers: 
* Add Required Components: 

* Add existing: ana mmkn a5ud components mo3yna msh shart akhod kol haga
* include entity metadata: el meta data 3bara 3n description 3n el entity, fa w ana 8lt msln w samet el entity 7aga, w b3den rg3t 3dltha w 3mlt save, bs mkontsh 3aml check 3la include metadata, sa3tha el system msh hy3rf enk 8yrt ay haga. 
* Include required components: bydef kol el entities elly related leh. 
* show dependencies: da byzhrlk kol el components elly mo3tmda 3la el component da. 
* fa dol byt7to m3aya lw ana 3mlt include required components.
* Dependencies: dol entites byst5dmony
* Related components: ana elly bst5dmhom. 
* Report: description 3n 7aga no3yna, zy enk te3rf el sharekat elly et3amelt m3aha fe akher 10 shhor masln. 
* Managed Properties: b7ot shwyt properties mo3yna mtt8yrsh, aw eny a3ml restriction 3la el component, b7es m7dsh y3dl 3la el goz2. 
* Managed solution: ana 5rgt el solution mn el system, w 5leto managed, b7es eny lama a7oto fl testing a2ol m7dsh y3dl  3la el solution da, m7dsh ye3ml 3leh customization. 
* lw shelt el managed solution da, hwa byshel kol el components elly m3mola, aw el customization, byshelha mn el default solution. 
* el un-managed baa laa 3ady lw sheltha, fa msh hyshelha mn el default solution. 

# Publish all customizations
* by2kd 3lek enk 
* el fr2 ben el publish hwa en fe publish all customizations, enk btrf3 kol el ta3delat elly fl system kolo, ay mkan 3delt feh, 7ata lw fl default customization brdu hyrf3ha. 
* de 7aga msh bn7bhza. 

# Missing Required Components. 
* da byb2a warning mn el system, byfkrk b enk fe 7agat m5dthash. 
* fa enta lw mot2kd en el components de mwgoda fl system abl keda, w enta 3mlha include, fa 5las msh mushkela.
* bas lw enta msh wakhedha fa el system hy3ml fail. 

# Export System Settings. 
* de 7agat lw 5dtha, bt3ml overwrite 3la el systems settings elly ray7en beha lel organization el tanya. 
* fa el mushkela bs, enk lw 8yrt 7aga fl solution da, w wadeto le organization tanya, fa el system settings henak btt8yr bardo, w 7ata lw l8et el solution da, el system settings dol msh byt8yro, gher manually baa. 

# Package Type
* managed (msh fahem awi, search 3leha.)
  * rf3to fl organization, mt2drsh enk tnzlo tany
  * da m3nah lw enta shghal 3nd vendor msln, w hwa shary managed solution, fa enta mt2drsh te3mlo export w t5du enta, fl unmanaged da msmo7.
  * anzlo m3nah eny b5od el solution w a2dr eny an2lo le gehaz tany.
* Unmanaged
  * te2dr t3dl feh.
# Translation
* da bynzl f excel sheet. 
* w kol logha leha el code bta3ha. 
* bt8yr asamy el hagat lel logha elly enta 3auz ttrgmha leha.

# Entity
* Diplay name: el esm elly byzhr ll nas
* plural name: lw fe 7alet el gam3.
* Name: hatl2eh nazl bl prefix.
* Primary image: de el sora elly btb2a zahra gmb esm el entity, w de bt2dr t7ot icons mn 3ndk 3ady bs b certain sizes. 
* Color: te2dr t8yr lon el icon. 
* Virtual Entity: 
  * ana 3auz a3ml table 3ndy, msh h7ot feh data mn el dynamics, lakn htgely mn source 5aregy fa akny b3ml table wahmy w adef meno el 7aga fl system bta3y. 
  * enta 3aml el columns bta3t el table de lakn el records nfsha msh mt5zna 3ndk fl system, lakn el records de btgbha mn bara. 
  * byb2a fe 7aga esmha retrive multiple, w fl case de enta bt7tag enk tktb el logic bta3ha bnfsk in C#. 
  * most of the code is written in C# for backend, and javascript in frontend.
* DataSource: da akno path keda byro7 3leh 34an ye2dr ygeb mno el data w el records baa bema enha keda keda msh fl database bta3tk. 
* Ownership: 
  * User/Team: keda el user da bs aw el team da bs elly msmo7lohom ennhom yshofo el klam da. 
  * Organization: keda el organization kolha by2dr t3ml edit 3la el entity da.
* Define as an activity entity:
  * de btb2a available only lw enta kont 3aml ownership user/team.
  * lakn lw organization fa keda btb2a entity bs 3ady. 
* Areas that display this entity:
  * enta 3auz t7ot el entity da fen? 
* there is a mark next to items "+", which means that once you enable them, you can's disable them.

# Primary field 
* basic field: called name. 
* it has only one Data type: Single Line of text: String. 
* it has a max length of 100 characters.
* Field Requirement:
  * Optional
  * Business Recommended: yofadal enk tdkhlo bs msh shrt -> blue mark
  * Business Required: lazm enk tdkhlo. 

# Forms
* it has 3 different types
  * Main: da el form el kamel baa, kol el data el ana 3auzha w kol el properties wl components wkeda.
  * Quick View: btb3t data 3n record fe record tany, w btb2a 7aga sare3a w soghyra keda, l2nk bt3ml zy description keda le 7aga tanya.
  * Card: bt7ot feha field so8yra, shbh el card bta3 flutter kda, w btb2a mainly 34an 7agat bta3t el tablet w el mobile w keda. 
* Main form consists of:
  * Header -> maximum number should be 4, yenf3 nzwd bs shklo byb2a we7sh. 
  * General section -> da byb2a fl nos, bn7ot feh el data elly han7tagha w keda fl nos 34an myb2osh kter fl header.
  * Footer -> bn7ot feh 7agat 3auzen el user lw e7tag 7aga yeb2a yerg3lha zy phone number w keda. 
* Created by: da el shakhs el asasy el 3ml keda (abdelaziz msln)
* Created by (Delegate): da akny 3aml program keda hwa elly by3ml el creation, fa akno sha5s wahmy. 
* Status
* Status Reason.
* fe 7agat keda, mynf34 tshelha mn el form -> byb2a gmbo efl a7mr. 
* el form lazm ykon feha 3la el a2l one Tab. 
* lw sebt el Tab fadya, sa3tha hwa msh hyzherha khales. 
* lw 3auz tdef section, bttl3 fo2 3la el shmal keda te2dr t3ml new section w te2dr t3dl esmo w keda. 

# Visibility 
* mmkn t5leh msh visible 34an te2dr t7ot conditions 3leh, fa by default invisible, w lma el condition yt722, bn3mlo visible. 

# Field Properties
* Field Security:
  * lama tegy tdkhl el data, myzhrhash zy el passwords w keda. 
* Auditing: 
  * lw 3mlt enable, ay t3del by7sl, by5zno. 
* Searchable: 
  * lw 3mlt enable, by2dr y7sl 3la el search.
* DataType:
  * Single Line of Text -> String. 
  * Multiple lines of text -> string. 
  * Option Set -> dropBox.
    * Use Existing option set -> use a global option set.
    * we can add options. 
    * and we can assign a default value.   
  * Multi-Select option set: te5tar aktur mn option at once. 
  * Two Options: YES \ NO. 
  * Image; bn2dr nerf3 3leh sowar. 
  * Whole Number: Integer.
  * float -> float.  
  * Decimal -> Double.
  * Look-up:
    * Relationship name: l2n el look-up da byt3ml relationship m3 el entity elly enta 3mlha el look-up.
    * el look-up by3ml relation N to 1 fl entity elly bt3ml keda, l2n 3ndy mkan wahed by5tar shakhs wahed. 
    * w osad el look-up byzhr sub-Grid fl na7ya tanya.
* Field Type: 
  * Simple. 
  * Calculated -> b7sbo mn 7agat bara. 
  