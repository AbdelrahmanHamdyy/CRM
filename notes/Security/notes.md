# Security roles and permissions Notes. 
* Open Settings
* Open Security.

## Creating a user
* ena 3ndna 7eta esmha active directory. 
* w de 7aga mwgoda fl windows server. 
* bya5ud el username wl password 34an ye2dr y3ml access lel system.
* lakn msh ban5du w nermeh ka record fl database.
* l2n sa3tha msh ht3rf hwa shaghal wla laa. 

> Search about the adminstration of active directory.

* FullName: esmo
* Nickname: esmo brdu
* Title: Junior, Senior ...
* Primary Email:
* Details Section:
  * Home Phone
  * Other Phone
  * ...
* Administration
  * Security role, to be discussed later.
* Organization information:
  *  Manager: da lookup 3la users, el role bta3o a3la mn el shakhs da.
     *  Da el manager bta3 el user da, fa lw hwa junior, fa hwa hyb2a lookup 3la el senior.
  *  Position: da el position bta3 el user da.
* Territory: da el mante2a el goghrafya elly el user da tabe3 leha. 
  * lw 3mlt new:
    * Name: esm el Territory
    * Manager: el manager elly mask el Territory da.
    * Parent Territory: el Territory elly fo2o.
    * lma t3ml save htla2y el sub-Territory zahret. 
* Business unit: 
  * bt7dd el user da tab3 anhy kesm. 
* Site:
  * da el site elly el user tb3o. 
  * lw dost new: 
    * Name: esm el site
    * Main phone: el phone bta3 el site da.
    * Fax: el fax bta3 el site da.
    * ...
* Queue: to be disscused later. 
  * khlek bs 3aref enk tb3 queue mo3yna. 
  * shabah el teams keda. 
  * leh w eshm3na, to be continue baa. 
* fo2 baa fl bar el fo2
  * Manage User Role: 
    * bt7dd mnha el security role bt3to.
  * Join Teams: 
    * bndefo fe team mo3yn. 
  * Change business role :
    * bn8yr el business role bt3to.
    * el business unit da 3bara 3n: akeno far3 3ndk fl sherka bt3tk. 
    * w de mokhtlfa 3n el business role 34an mttl5btsh.  
  * Share Secured Fields:
    * de btdy shakhs tany permission eno y3dl shwyt 7agat. 
  * Convert to access team:
    * de fekrtha ,enk 3auz telghy team w t5ly mykonsh leh ay 3laka b7aga, aw khlas el team da khalas shughlo, aw ay sabab y5leny m7tagsh el team da baa. 
    * w lw 5let team access team, msh ht2dr trg3o tany le owner team. 


## Team 
* it is a group of users.
* each user in the team gain the security role of the team.
* but the team does not inheret the security role of the users.
* on creating a team:
  * Team Name:
  * Administrator: men elly by2dr yt7km fl team da. 
  * Types of Team: 
    * Owner Team: da el team elly bymlok el record w shaghal 3leh w ye2dr y3ml 3leh edit w modification w CRUD operations. 
    * Access Team: da m3nah en el owner team da eda team tany access permission 3la el records bt3to, fa da m3nah eno by2dr ybos 3la el record bta3 el owner team da.
    * wl hadaf mn keda, eno ykon by-read only bs el system, zy ma ykon fe msln bank w talb mnk 7agat, w enta 3auz twrehom shoghlk, bs mn gher ma ye2dro y3mlo 3leh edit. 
    * Access tean is divided into two main teams:
      * auto create managed system team. 
      *  user created team . 
   * access team has three main operations:
     * read
     * write 
     * append. 
   * we hide the default solution from the access team to prevent them from modifying the system. 
* for each business unit a new team is created by default. 
* the team is related to only one business unit. 
* a business unit may contain many teams.
* one user can exist in many teams.
* lma btd5ul 3la el business units htla2y kol el teams elly mwgoda fl business unit da.
* el default team ll business unit byb2a bnfs esmha. 
* when we press new for business unit: 
  * it will be thrown in the Database. 
  * Name: esm el BU.
  * Division: 
  * Parent Business: da el parent business unit.
    * by default btb2a el root. 
    * mmkn t8yrha w htft7lk lookup. 
    * aw mmkn te3ml new 3ady. 
    
# Security roles
* open advanced settings
* open security
* open security roles
* m3na eno ye3ml access en byb2a leh kol el options. 
  * Create
  * Read
  * Write
  * Delete
  * Append  -> barbot another record to the current record.
  * Append To -> barbot the current record to another record.
  * Assign
  * Share
* types of access:
  * basic access (User): 
    * de bt5ly el user ye2dr y3ml access le :
      * owner leha
      * 7d 3mlha share m3ah
      * aw hwa member fe team, w hya owned by this team. 
    * 

# Side Notes 
* el system adminstrator w system customizor homa dol elly by2dro ye3mlo ay haga fl system
* enta lw m3ndksh permission 34an t3ml operation mo3yna, w 7awlt t3lm el operation de, hytl3lk error, y2olk insufficient permissions.