import Link from "next/link";
import Image from "next/image";

export default function FirstPost() {
  return (
    <>
      <h1>First Post</h1>
      <Image
        src="/images/profil.jpg"
        height="150"
        width="150"
        alt="Thomas Biarneix PP"
      />
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
    </>
  );
}
// https://nextjs.org/learn/basics/assets-metadata-css/assets
