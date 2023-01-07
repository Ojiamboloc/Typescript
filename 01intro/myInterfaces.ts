interface User {
    readonly dbId:number,
    email:string,
    userId:number,
    googleID?:string,
    //startTrial:()=>string
    startTrial():string,
    getCoupon(couponName:string,value:number):number
}
//Re-opening the interface
interface User{
     githubToken:string
}
const felix:User={dbId:12,email:"felix@com",githubToken:"github",userId:232,startTrial:()=> {
    return "trial started"
    
}, getCoupon:(name:"ojiambo" ,off:10)=>{ 
    return 12
}}
interface Admin extends User{
    role:"admin" | "ta"| "learner"
}
const adminFelix:Admin={dbId:12,email:"felix@com",githubToken:"github",role:"admin",userId:232,startTrial:()=> {
    return "trial started"
    
}, getCoupon:(name:"ojiambo" ,off:10)=>{ 
    return 12
}}