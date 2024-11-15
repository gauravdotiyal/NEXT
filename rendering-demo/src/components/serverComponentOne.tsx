import fs from "fs";
import { ServerComponentTwo } from "./serverComponentTwo";
import { ClientComponentOne } from "./clientComponentOne";
import { ClientComponentTwo } from "./clientComponentTwo";

export const ServerComponentOne = () => {
  fs.readFileSync("src/components/serverComponentOne.tsx", "utf-8");
  return (
    <>
      <h1>Server Component one</h1>
      {/* <ServerComponentTwo/> */}
      {/* <ClientComponentOne/> */}
      {/* <ClientComponentTwo/> */}
    </>
  );
};

// We can call client component inside the server component 
// But We cant call server component inside the client component 