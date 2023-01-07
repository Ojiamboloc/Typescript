/*class User {
    email:string;
    name:string;
    private readonly city:string="Nairobi"
    constructor (email:string,name:string){
        this.email=email;
        this.name=name;
    }
}
const felix=new User("ojiamboloc@gmail.com","Ojiambo Nambasi")*/
//felix.city="Nairobi"
class User {
    protected _courseCount=1
    private readonly city:string="Nairobi"
    constructor (
        public email:string,
        public name:string,
        private userId:string)
        {
     
    }
    private deleteToken(){

    }
    get getAppleEmail():string{
return `apple${this.email}`
    }

get courseCount():number{
    return this._courseCount
}
//No return type for setters in typescript
set courseCount(courseNum){
 if(courseNum<=1){
    throw new Error("Course count should be more than 1")
 }this._courseCount=courseNum
}
}
class SubUser extends User{
    isFamily:boolean=true
    changeCourseCount(){
        this._courseCount=44
    }
}