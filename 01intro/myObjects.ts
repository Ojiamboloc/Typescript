const User={
    name:"ojiambo",
    email:"ojiamboloc@gmail.com",
    isActive:true
}
function createUser({name:string,isPaid:boolean}){

}
let newUser={name:"hitesh",isPaid:false,email:"h@gmail.com"}
createUser(newUser)

function createCourse():{name:string,price:number}{
    return {name:"reactjs",price:999}
}

//type aliases
type User={
    name:string;
    email:string;
    isActive:boolean
}

function createUser0(user:User){
createUser0({name:"",email:"",isActive:true})
}
type User0={
    readonly _id:string;
    name:string;
    email:string;
    isActive:boolean
    creditCardDetails?:number
}
let myUser:User0={
    _id:"1234",
    name:"h",
    email:"h@h.com",
    isActive:false
}
myUser.email="felixnambasi@gmail.com"
//this looks like inheritance or simply code reuse usecase
type cardNumber={
    cardnumber:string
}
type cardDate={
    cardDate:string
}
type cardDetails=cardNumber & cardDate & {cvv:number}

export {}