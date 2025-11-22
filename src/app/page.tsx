import Image from "next/image";
import "./page.css";
import { MapPin, Ticket } from "lucide-react";

const YouAreInvited = () => {
  return (
    <div>
      <Image
        width={50}
        height={50}
        src="/images/cats.svg"
        alt="Art Deco Cats"
      />
      <h1>
        <span>Hello gorgeous</span>
        YOU'RE INVITED
      </h1>
    </div>
  );
};

const WeddingDate = () => {
  return (
    <p>
      FRIDAY 28
      <br />
      APRIL 2028
    </p>
  );
};

export default function Home() {
  return (
    <div className="page-container">
      <h1>
        <Image
          width={60}
          height={60}
          src="/images/cats.svg"
          alt="Art Deco Cats"
          style={{ marginBottom: "0.5rem" }}
        />
        <span>Hello gorgeous</span>
        YOU'RE INVITED
      </h1>
      <h2>
        <span>The wedding of</span>
        ANTHONY FOX
        <br />&<br />
        LLOYD BEST
      </h2>
      <p>
        <time dateTime="2028-04-28">Friday 28 April 2028</time>
      </p>
      <div className="button-container">
        <button>
          <Ticket />
          RSVP
        </button>
        <button data-variant="secondary">
          <MapPin />
          The Temple of Peace
        </button>
      </div>
    </div>
  );
}
