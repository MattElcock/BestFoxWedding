import Image from "next/image";
import "./page.css";
import { Info, MapPin, Ticket } from "lucide-react";
import Link from "next/link";

export default async function Home() {
  return (
    <div className="page-home">
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
        <Link href="/rsvp" className="button">
          RSVP
        </Link>

        <Link href="/venue" className="button button-secondary">
          Venue
        </Link>

        <Link href="/information" className="button button-secondary">
          Information
        </Link>
      </div>
    </div>
  );
}
