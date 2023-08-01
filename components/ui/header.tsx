import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-center bg-white p-4">
      <Link href="/">
        <div>
          <Image src="/images/grouzy.png" alt="Logo" width={550} height={550} />
        </div>
      </Link>
    </nav>
  );
}
