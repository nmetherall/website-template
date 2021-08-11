import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
// import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className="flex bg-red-500 font-bold text-2xl w-full h-full">
      {process.env.NEXT_PUBLIC_STRAPI_BASE_URL ?? "NONE"}
      HELLO
      <Link href="/test">TEST</Link>
    </div>
  );
}
