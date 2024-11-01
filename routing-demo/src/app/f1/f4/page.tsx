import Link from "next/link"
export default function f4(){
    return <>
       <h1>f4 Page </h1>
       <div>
          <Link href="/f1/f3">
              <h1>F3 Page</h1>
           </Link>
           <Link href="/about">
              <h1>About Page</h1>
           </Link>
       </div>
    </> 
}