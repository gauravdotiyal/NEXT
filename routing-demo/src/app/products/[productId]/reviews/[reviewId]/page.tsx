import { notFound } from "next/navigation";
import { Metadata } from "next"; 

type Props={
   params:{
      productId:string,
      reviewId:string,
   }
}

export const generateMetadata=({params}:Props):Metadata=>{
  return {
    title:`Product ${params.productId} Review ${params.reviewId}`
  }
}

export default function ReviewDetails({
  params,
}:  Props) {
  if (parseInt(params.reviewId) > 1000) {
    notFound();
  }  
  return (
    <>
      <h1>
        Review {params.reviewId} for Product {params.productId}
      </h1>
    </>
  );
}
