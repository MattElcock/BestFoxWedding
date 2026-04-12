"use client";

import { Earth } from "lucide-react";
import styles from "./page.module.css";
import { useRouter, useSearchParams } from "next/navigation";

export default function Page() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const next = searchParams.get("next");

  const changeLanguage = (locale: string) => {
    // Cookie expires in 1 year
    document.cookie =
      "SHOWN_CHOOSE_LANGUAGE_PAGE=true; path=/; max-age=31536000";
    router.push(`/${locale}/${next ?? ""}`);
  };

  const handleCymraigClick = () => {
    changeLanguage("cy");
  };

  const handleEnglishClick = () => {
    changeLanguage("en");
  };

  return (
    <>
      <div className={styles.title}>
        <div className={styles["icon-wrapper"]}>
          <Earth size={32} />
        </div>
        <h1>
          <span>Dewis Iaith</span>
          <span>Choose a Language</span>
        </h1>
      </div>
      <div className={styles.buttons}>
        <button className="button-secondary" onClick={handleCymraigClick}>
          Cymraeg
        </button>
        <button className="button-secondary" onClick={handleEnglishClick}>
          English
        </button>
      </div>
    </>
  );
}
