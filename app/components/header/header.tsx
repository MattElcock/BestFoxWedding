import Link from "next/link";
import "./header.css";
import { getT } from "next-i18next/server";

const Header = async () => {
  const { t } = await getT();

  return (
    <header>
      <Link href="/" className="site-title">
        {t("anthony-and-lloyd")}
      </Link>
    </header>
  );
};

export { Header };
