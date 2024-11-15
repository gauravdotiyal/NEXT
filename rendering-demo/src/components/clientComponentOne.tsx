"use client";
import { useState } from "react";
// import { ServerComponentOne } from "./serverComponentOne";
// import { ClientComponentTwo } from "./clientComponentTwo";

export const ClientComponentOne = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [name, setName] = useState("Batman");
  return (
    <>
      <h1>Client Component One</h1>
      {/* <ClientComponentTwo/> */}
      {/* <ServerComponentOne /> */}
      {children}
    </>
  );
};
