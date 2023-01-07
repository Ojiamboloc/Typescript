"use strict";
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
    constructor(email, name, userId) {
        this.email = email;
        this.name = name;
        this.userId = userId;
        this._courseCount = 1;
        this.city = "Nairobi";
    }
    deleteToken() {
    }
    get getAppleEmail() {
        return `apple${this.email}`;
    }
    get courseCount() {
        return this._courseCount;
    }
    //No return type for setters in typescript
    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error("Course count should be more than 1");
        }
        this._courseCount = courseNum;
    }
}
class SubUser extends User {
    constructor() {
        super(...arguments);
        this.isFamily = true;
    }
    changeCourseCount() {
        this._courseCount = 44;
    }
}
