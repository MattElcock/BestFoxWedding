import Image from "next/image";

export default function venue() {
  return (
    <>
      <div
        style={{
          width: "100vw",
          margin: "-1rem -1rem 1rem -1rem",
        }}
      >
        <Image
          src="/images/temple-of-peace.jpg"
          alt="Temple of Peace"
          width={1080}
          height={753}
          style={{ width: "100%", height: "auto" }}
        />
      </div>
      <h1>The Temple of Peace</h1>
      <p>
        Built in 1938, the Temple of Peace is a memorial to those who died in
        the First World War and home to the{" "}
        <a
          href="https://www.library.wales/discover-learn/digital-exhibitions/manuscripts/modern-period/the-welsh-national-book-of-remembrance"
          target="_blank"
          referrerPolicy="no-referrer"
        >
          Welsh Book of Rememberance
        </a>
        , which contains the names of over 35,000 people who died in the
        conflict.
      </p>
      <p>
        Once open, it became the headquarters of two significant Welsh
        organisations. In the Health Wing, the{" "}
        <a
          href="https://www.wcia.org.uk/wnma/"
          target="_blank"
          referrerPolicy="no-referrer"
        >
          Welsh National Memorial Association
        </a>{" "}
        helped eradicate tuberculosis in Wales. In the Peace Wing, the{" "}
        <a
          href="https://www.wcia.org.uk/wlnu/"
          target="_blank"
          referrerPolicy="no-referrer"
        >
          Welsh League of Nations Union
        </a>{" "}
        supported the Welsh in campaigning for international cooperation and
        peace.
      </p>
      <p>
        Its founder,{" "}
        <a
          href="https://www.wcia.org.uk/wcia-news/wcia-history/david-davies-75-father-of-the-temple-of-peace/"
          target="_blank"
          referrerPolicy="no-referrer"
        >
          Lord David Davies of Llandinam
        </a>
        , hoped it would become a place of pilgramage to everyone in search of
        justice, health and peace.
      </p>
      <p>
        <a
          href="https://templeofpeace.wales/en/history"
          target="_blank"
          referrerPolicy="no-referrer"
        >
          Find out more.
        </a>
      </p>
      <h2>Getting Here</h2>
      <address>
        Temple of Peace, <br />
        King Edward VII Ave, <br />
        Cardiff CF10 3AP
      </address>
      <iframe
        width="100%"
        height="350"
        src="https://www.openstreetmap.org/export/embed.html?bbox=-3.185099065303803%2C51.48630862889905%2C-3.182100355625153%2C51.48833789609336&amp;layer=mapnik&amp;marker=51.487323273785435%2C-3.1835997104644775"
      ></iframe>
      <br />
    </>
  );
}
