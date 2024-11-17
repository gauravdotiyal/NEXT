export default async function Layout({ children }: { children: React.ReactNode }) {

    const productResponse=await fetch("http://localhost:3001/products",{
      next:{
        revalidate:20,
      }
    });
    const product=productResponse.json();

    console.log(product);
 
  return <>{children}</>;
}
