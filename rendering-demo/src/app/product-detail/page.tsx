import { Product } from "@/components/product"
import { Reviews } from "@/components/reviews"
import { Suspense } from "react"

export default function ProductDetailPage() {
  return( 
       <div>
           <h1>Product Details Reviews</h1>
          <Suspense fallback={<p>Loading Product Details... </p>}>
            <Product/>
          </Suspense>

          <Suspense fallback={<p>Loading Product Reviews... </p>}>
            <Reviews/> 
          </Suspense>
       </div>
    )
}
