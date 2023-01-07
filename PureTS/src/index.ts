class User {
    email:string;
    name:string;
   readonly city:string="Nairobi"
    constructor (email:string,name:string){
        this.email=email;
        this.name=name;
    }
}
const felix=new User("ojiamboloc@gmail.com","Ojiambo Nambasi")
//felix.city="Nairobi"