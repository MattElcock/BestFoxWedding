import Image from "next/image";
import "./page.css";
import { Ticket } from "lucide-react";

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

const WeddingTitle = () => {
  return (
    <div className="wedding-title">
      <h2>
        <span>The wedding of</span>
        ANTHONY FOX & <br />
        LLOYD BEST
      </h2>
    </div>
  );
};

const WeddingDate = () => {
  return (
    <div className="wedding-date">
      <p>
        FRIDAY 28
        <br />
        APRIL 2028
      </p>
    </div>
  );
};

const Buttons = () => {
  return (
    <div className="button-container">
      <button>
        <Ticket />
        RSVP
      </button>
    </div>
  );
};

export default function Home() {
  return (
    <div className="page-container">
      <YouAreInvited />
      <WeddingTitle />
      <WeddingDate />
      <Buttons />
    </div>
  );
}
