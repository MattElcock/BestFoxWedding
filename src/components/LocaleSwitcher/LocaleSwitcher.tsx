"use client";

import { Link, usePathname } from "@/i18n/navigation";
import { useLocale, useTranslations } from "next-intl";

const LocaleSwitcher = () => {
  const t = useTranslations();
  const locale = useLocale();
  const pathname = usePathname();

  if (pathname === "/choose-locale") {
    return null;
  }

  return locale === "en" ? (
    <Link href={pathname} locale="cy">
      {t("common.cymraeg")}
    </Link>
  ) : (
    <Link href={pathname} locale="en">
      {t("common.english")}
    </Link>
  );
};

export { LocaleSwitcher };
