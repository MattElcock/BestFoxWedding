"use client";

import Link from "next/link";
import Image from "next/image";
import "./header.css";
import { LogOut } from "lucide-react";

const Header = () => {
  return (
    <header>
      <Link href="/" className="site-title">
        <Image
          width={35}
          height={35}
          src="/images/cats.svg"
          alt="Art Deco Cats"
        />
        <div>
          <p>The Wedding of</p>
          <p>Anthony and Lloyd</p>
        </div>
      </Link>
    </header>
  );
};

export { Header };
