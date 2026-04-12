"use client";

import { Earth } from "lucide-react";
import styles from "./page.module.css";
import { Link } from "@/i18n/navigation";

export default function Page() {
  const setCookie = () => {
    document.cookie =
      "SHOWN_CHOOSE_LANGUAGE_PAGE=true; path=/; max-age=31536000";
  };

  return (
    <>
      <div className={styles.title}>
        <div className={styles["icon-wrapper"]}>
          <Earth size={32} />
        </div>
        <h1>
          <span lang="cy">Dewis Iaith</span>
          <span lang="en">Choose a Language</span>
        </h1>
      </div>
      <div className={styles.buttons}>
        <Link
          href="/"
          lang="cy"
          locale="cy"
          className="button button-secondary"
          onClick={setCookie}
        >
          Cymraeg
        </Link>
        <Link
          href="/"
          lang="en"
          locale="en"
          className="button button-secondary"
          onClick={setCookie}
        >
          English
        </Link>
      </div>
    </>
  );
}
