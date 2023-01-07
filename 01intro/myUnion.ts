let score:number | boolean | string=33
score =98
score=false
score="99"



type User0={
    name:string;
    id:number
}
type Admin={
    username:string;
    id:number
}
let user1:User0 | Admin ={name:"felix",id:34}
user1={username:"ojiambofelix",id:34}
function getDbId(id:number | string){
    //making some API calls
    if(typeof id==="string"){
        id.toLowerCase()
    }
    console.log(`DB id is: ${id}`)
}
getDbId(99)
//array
const data:number []=[1,3,2,12,12,98]
const data1:(string | number)[]=[44,'44','43',4]

let seatAllotment:"aisle"|"middle"|"window"
seatAllotment="aisle"
