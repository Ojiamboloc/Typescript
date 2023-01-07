function detectType(val: number | string) {
  if (typeof val === "string") {
    return val.toLowerCase();
  }
  return val + 3;
}
function providId(id: string | null) {
  if (!id) {
    console.log("Please provide ID");
    return;
  }
  id.toLocaleLowerCase();
}
interface User{
    name:string,
    email:string
}
interface Admin{
    name:string,
    email:string,
    isAdmin:boolean
}
//in narrowing
function isAdminAccount(account:User | Admin){
    if ("isAdmin"in account){
        return account.isAdmin
    }
}
//instance of narrowing
function logValue(x:Date | String){
    if(x instanceof Date){
        console.log(x.toUTCString());
    }else{
        console.log(x.toUpperCase());
    }
}
type Fish={swim:()=>void};
type Bird={fly:()=>void};
function isFish(pet:Fish |Bird):pet is Fish{
    return (pet as Fish).swim !==undefined
}
function getFood(pet:Fish | Bird){
    if(isFish(pet)){
       pet
       return "fish food"
    }else{
        pet
        return "bird food"
    }
}