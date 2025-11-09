import Image from "next/image";
import "./page.css";

const YouAreInvited = () => {
  return (
    <div className="you-are-invited">
      <Image
        width={50}
        height={50}
        src="/images/cats.svg"
        alt="Art Deco Cats"
      />
      <div>
        <div className="line-small" />
        <div className="line-big" />
        <h1>
          HELLO <span>gorgeous</span>
          <br />
          YOU'RE INVITED
        </h1>
        <div className="line-big" />
        <div className="line-small" />
      </div>
    </div>
  );
};

export default function Home() {
  return (
    <div>
      <YouAreInvited />
    </div>
  );
}
