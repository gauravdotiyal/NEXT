export const fetchCache="default-cache";
// import { cookies } from "next/headers";

type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
};

export default async function ProductPage() {

  const detailsResponse=await fetch("http://localhost:3001/products/1");
  const details=await detailsResponse.json();
  
  //This is dynamic function after this func the cache 
  //req not occurs only the function before it cache req occurs
  // const cookiesStore=cookies();
  // const theme=cookiesStore.get("theme");

  const response = await fetch("http://localhost:3001/products",{
    cache:"no-store",
  });
  const products = await response.json();
 
  return (
    <>
       <ul className="space-y-4 p-4">
      {products.map((product: Product) => (
        <li
          key={product.id}
          className="p-4 bg-white shadow-md rounded-lg text-gray-700"
        >
          <h2 className="text-xl font-semibold">{product.title}</h2>
          <p>{product.description}</p>
          <p className="text-lg font-medium">${product.price}</p>
          <p>{details.price}</p>
        </li>
      ))}
    </ul>
    </>
  );
}
