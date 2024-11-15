"use client";
import React from "react";

import { serverSideFunction } from "@/utils/server-utils";
import { useTheme } from "@/components/theme-provider";
import { clientSideFunction } from "@/utils/client-utils";

export default function ClientRoutePage() {
  const theme = useTheme();
  const result=clientSideFunction();
 
  return (
    <h1 style={{ color: theme.colors.primary }}>Client Route {result}</h1>
  );
}

// ## It is ignored because it is server only code here ## 

// export default function ClientRoutePage(){
//     console.log("Client Route Rendered")
//     // const result=serverSideFunction();
//     return (
//         <>
//           <h1>Client Route Page</h1>
//           {/* <p>{result}</p> */}
//         </>
//     )
// }
