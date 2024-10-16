import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Products",
  },
};
export default function ProductList() {
  return (
    <>
      <h1>My product Page</h1>
      <h2>Product 1</h2>
      <h2>Product 2</h2>
      <h2>Product 3</h2>
    </>
  );
}
