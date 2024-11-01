import Link from "next/link"
export default function f1(){
    return <>
       <h1>f1 Page </h1>
       <div>
          <Link href="/f1/f2">
              <div>F2 Page</div>
           </Link>
       </div>
    </> 
}