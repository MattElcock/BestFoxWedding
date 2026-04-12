import { Link } from "@/i18n/navigation";
import "./header.css";
import { getTranslations } from "next-intl/server";

const Header = async () => {
  const t = await getTranslations();

  return (
    <header>
      <Link href="/" className="site-title">
        {t("common.anthony-and-lloyd")}
      </Link>
    </header>
  );
};

export { Header };
