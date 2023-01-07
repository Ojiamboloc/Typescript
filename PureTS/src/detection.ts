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
function isAdminAccount(account:User | Admin){
    if ("isAdmin"in account){
        return account.isAdmin
    }
}