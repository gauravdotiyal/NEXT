import "server-only" // This allows not to use this in client use pages

export const serverSideFunction=()=>{
    console.log(
       `use multiple libraries,
           use environment variables, 
           interact with database, 
           process confidential information`
    );
    return "server results";
}