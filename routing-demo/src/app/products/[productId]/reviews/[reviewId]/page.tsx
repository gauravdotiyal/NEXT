import { notFound } from "next/navigation";
import { Metadata } from "next";

type Props = {
  params: {
    productId: string;
    reviewId: string;
  };
};

function getRandom(count: number) {
  return Math.floor(Math.random() * count);
}

export const generateMetadata = ({ params }: Props): Metadata => {
  return {
    title: `Product ${params.productId} Review ${params.reviewId}`,
  };
};

export default function ReviewDetails({ params }: Props) {
  const random = getRandom(2);

  if (random === 1) {
    throw new Error("Error Loading Review"); // this is error.message
  }

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
