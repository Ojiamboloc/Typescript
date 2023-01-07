function addTwo(num:number):number{
    return num + 2 
}
function getUpper(val:string){
    return val.toUpperCase()
}
function signUpUser(name:string,email:string,isPaid:boolean){

}
let loginUser=(name:string,email:string,isPaid:boolean=false)=>{

}
addTwo(5)
getUpper("felix")
signUpUser("felix","felixnambasi@gmail.com",true)
loginUser("felix","ojiambo")
/*function getValue(val:number){
    if(val>5){
        return true
    }return "200 OK"
}*/


const getHello=(s:string):string=>{
return ""
}
const heroes=["thor","ironman","wakanda"]
//const heroes=[23,34,345]
heroes.map((hero):string=>{
    return `hero is ${hero}`
})

function consoleError(errmsg:string):void{
    console.log(errmsg)
    
}
function handleError(msg:string):never{
    throw new Error(msg);
}

export {}