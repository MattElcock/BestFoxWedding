import Image from "next/image";
import "./page.css";
import Link from "next/link";
import { getT } from "next-i18next/server";

export default async function Home() {
  const { t } = await getT("home");

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
        <span>{t("hello-gorgeous")}</span>
        {t("you-are-invited")}
      </h1>
      <h2>
        <span>{t("the-wedding-of")}</span>
        {t("anthony-fox")}
        <br />&<br />
        {t("lloyd-best")}
      </h2>
      <p>
        <time dateTime="2028-04-28">{t("wedding-date")}</time>
      </p>
      <div className="button-container">
        <Link href="/rsvp" className="button">
          {t("rsvp")}
        </Link>

        <Link href="/venue" className="button button-secondary">
          {t("venue")}
        </Link>

        <Link href="/information" className="button button-secondary">
          {t("information")}
        </Link>
      </div>
    </div>
  );
}
