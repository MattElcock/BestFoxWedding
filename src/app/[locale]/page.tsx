import Image from "next/image";
import "./page.css";
import {Link} from "@/i18n/navigation";
import {getTranslations} from "next-intl/server";
import type {Metadata} from 'next'


export async function generateMetadata(): Promise<Metadata> {
    const t = await getTranslations();

    return {
        title: t("home.title"),
    }
}

export default async function Page() {
    const t = await getTranslations();
    return (
        <div className="page-home">
            <h1>
                <Image
                    width={45}
                    height={45}
                    src="/images/cats.svg"
                    alt="Art Deco Cats"
                />
                <span>{t("home.hello-gorgeous")}</span>
                {t("home.you-are-invited")}
            </h1>
            <h2>
                <span>{t("home.the-wedding-of")}</span>
                {t("common.anthony-fox")}
                <span>&</span>
                {t("common.lloyd-best")}
            </h2>
            <p>
                <time dateTime="2028-04-28">{t("common.wedding-date")}</time>
            </p>
            <div className="button-container">
                <Link href="/rsvp" className="button">
                    {t("common.rsvp")}
                </Link>

                <Link href="/venue" className="button button-secondary">
                    {t("common.venue")}
                </Link>

                <Link href="/information" className="button button-secondary">
                    {t("common.information")}
                </Link>
            </div>
        </div>
    );
}
