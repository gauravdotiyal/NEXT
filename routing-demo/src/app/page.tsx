import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>HomePage</h1>
      <Link href="/blog">My Blogs</Link>
      <br />
      <Link href="/products">My Products</Link>
    </>
  );
}
