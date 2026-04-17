import {getTranslations} from "next-intl/server";
import type {Metadata} from 'next'

export async function generateMetadata(): Promise<Metadata> {
    const t = await getTranslations();

    return {
        title: t("rsvp.title"),
    }
}

export default function rsvp() {
  return (
    <>
      <iframe
        src="https://forms.cloud.microsoft/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAO__oaOwzhUNE9NM1JLOFhKTkkwSkdEUTJRNTkzUTZTUy4u&embed=true"
        width="100%"
        height="100%"
      >
        Loading…
      </iframe>
    </>
  );
}
