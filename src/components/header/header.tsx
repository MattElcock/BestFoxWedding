import Link from "next/link";
import "./header.css";

const Header = () => {
  return (
    <header>
      <Link href="/" className="site-title">
        Anthony and Lloyd
      </Link>
    </header>
  );
};

export { Header };
