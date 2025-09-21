import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
    <h1>Hello, Adrash</h1>
    <Image src="/images/5825087.jpg" alt="wallpaper" width={100} height={100}/>
    <Link href="/about">About Page</Link>
    <br/>
    <Link href="/contact">Contact Page</Link> 
    </>
  );
}
