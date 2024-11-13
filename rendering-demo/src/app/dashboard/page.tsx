"use client"; // This shows that we are using client side rendering
import { useState } from "react"


export default function DashboardPage(){
    console.log("Dashboard client Component");
    const [name,setName]=useState("");
    return(
    <div>
         <h1>Dashboard Page</h1>
          <input value={name} onChange={(e)=>setName(e.target.value)}/>
          <h1>hello, {name}</h1>
    </div>
    )
}