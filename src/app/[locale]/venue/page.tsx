import Image from "next/image";
import "./page.css";
import {getTranslations} from "next-intl/server";
import type {Metadata} from 'next'

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations();

  return {
    title: t("venue.title"),
  }
}

export default async function VenuePage() {
  const t = await getTranslations();

  return (
    <>
      <Image
        className="venue-image"
        src="/images/temple-of-peace.jpg"
        alt={t("venue.image-alt")}
        width={1080}
        height={753}
      />
      <h1>{t("venue.temple-heading")}</h1>
      <p>
        {t.rich("venue.para-history-1", {
          bookLink: (chunks) => (
            <a
              href={t("venue.links.book-link")}
              target="_blank"
              referrerPolicy="no-referrer"
            >
              {chunks}
            </a>
          ),
        })}
      </p>
      <p>
        {t.rich("venue.para-history-2", {
          wnmaLink: (chunks) => (
            <a
              href="https://www.wcia.org.uk/wnma/"
              target="_blank"
              referrerPolicy="no-referrer"
            >
              {chunks}
            </a>
          ),
          wlnuLink: (chunks) => (
            <a
              href="https://www.wcia.org.uk/wlnu/"
              target="_blank"
              referrerPolicy="no-referrer"
            >
              {chunks}
            </a>
          ),
        })}
      </p>
      <p>
        {t.rich("venue.para-history-3", {
          daviesLink: (chunks) => (
            <a
              href="https://www.wcia.org.uk/wcia-news/wcia-history/david-davies-75-father-of-the-temple-of-peace/"
              target="_blank"
              referrerPolicy="no-referrer"
            >
              {chunks}
            </a>
          ),
        })}
      </p>
      <p>
        <a
          href={t('venue.links.temple-of-peace-history')}
          target="_blank"
          referrerPolicy="no-referrer"
        >
          {t("venue.find-out-more")}
        </a>
      </p>
      <h2>{t("venue.getting-here")}</h2>
      <h3>{t("venue.address-heading")}</h3>
      <address>
        Temple of Peace, <br />
        King Edward VII Ave, <br />
        Cardiff, <br />
        CF10 3AP
      </address>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2484.409266361554!2d-3.185816122267925!3d51.48735537180872!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x486e1ca4a941a82b%3A0xb09635af119309c0!2sTemple%20of%20Peace!5e0!3m2!1sen!2suk!4v1768059457111!5m2!1sen!2suk"
        width="100%"
        height="400"
        style={{ border: "0" }}
        allowFullScreen
        loading="lazy"
      ></iframe>
      <h3>{t("venue.parking-heading")}</h3>
      <dl>
        <dt>
          <a href="https://maps.app.goo.gl/8J5b9M1c8qj5AqvF8" target="_blank" rel="noopener noreferrer">
            King Edward VII Avenue - CF10 3DN
          </a>
        </dt>
        <dd>
          {t.rich("venue.parking-king-edward", {
            priceLink: (chunks) => (
              <a href="https://en.parkopedia.co.uk/parking/meter/king_edward_vii_avenue/cf10/cardiff" target="_blank" rel="noopener noreferrer">
                {chunks}
              </a>
            ),
          })}
        </dd>

        <dt>
          <a href="https://maps.app.goo.gl/vaYrCH9xpSHsqvwx6" target="_blank" rel="noopener noreferrer">
            College Road - CF10 3AP
          </a>
        </dt>
        <dd>
          {t.rich("venue.parking-college-road", {
            priceLink: (chunks) => (
              <a href="https://en.parkopedia.co.uk/parking/meter/college_road/cf10/cardiff" target="_blank" rel="noopener noreferrer">
                {chunks}
              </a>
            ),
          })}
        </dd>

        <dt>
          <a href="https://maps.app.goo.gl/TX8LpQdJLCvG7GC98" target="_blank" rel="noopener noreferrer">
            Castle Mews - CF10 3ER
          </a>
        </dt>
        <dd>
          {t.rich("venue.parking-castle-mews", {
            priceLink: (chunks) => (
              <a href="https://www.visitcardiff.com/highlights/castle-mews-car-park/" target="_blank" rel="noopener noreferrer">
                {chunks}
              </a>
            ),
          })}
        </dd>

        <dt>
          <a href="https://maps.app.goo.gl/5xFohQAv6ryJDHGRA" target="_blank" rel="noopener noreferrer">
            North Road - CF10 3DU
          </a>
        </dt>
        <dd>
          {t.rich("venue.parking-north-road", {
            priceLink: (chunks) => (
              <a href="https://www.visitcardiff.com/highlights/north-road-car-park/" target="_blank" rel="noopener noreferrer">
                {chunks}
              </a>
            ),
          })}
        </dd>

        <dt>
          <a href="https://maps.app.goo.gl/R4hDKG3nLnmg6Gg79" target="_blank" rel="noopener noreferrer">
            Sophia Gardens - CF11 9FH
          </a>
        </dt>
        <dd>
          {t.rich("venue.parking-sophia-gardens", {
            priceLink: (chunks) => (
              <a href="https://www.visitcardiff.com/highlights/sophia-gardens-car-park/" target="_blank" rel="noopener noreferrer">
                {chunks}
              </a>
            ),
          })}
        </dd>

        <dt>
          <a href="https://maps.app.goo.gl/dWEXBXmJqWiGNPdF8" target="_blank" rel="noopener noreferrer">
            Capitol Shopping Centre - N Edward St CF10 2HH
          </a>
        </dt>
        <dd>
          {t.rich("venue.parking-capitol", {
            priceLink: (chunks) => (
              <a href="https://capitolcardiff.co.uk/plan-your-visit/" target="_blank" rel="noopener noreferrer">
                {chunks}
              </a>
            ),
          })}
        </dd>

        <dt>
          <a href="https://maps.app.goo.gl/jizCsRa265K6w2gt8" target="_blank" rel="noopener noreferrer">
            St David's Dewi Sant - Mary Ann St CF10 2EN
          </a>
        </dt>
        <dd>
          {t.rich("venue.parking-st-davids", {
            priceLink: (chunks) => (
              <a href="https://www.stdavidscardiff.com/en/plan-my-visit/parking" target="_blank" rel="noopener noreferrer">
                {chunks}
              </a>
            ),
          })}
        </dd>

        <dt>
          <a href="https://maps.app.goo.gl/UVbGLkaTMP3CqZKk9" target="_blank" rel="noopener noreferrer">
            John Lewis - Hayes Bridge Rd CF10 1EG
          </a>
        </dt>
        <dd>
          {t.rich("venue.parking-john-lewis", {
            priceLink: (chunks) => (
              <a href="https://www.stdavidscardiff.com/en/plan-my-visit/parking" target="_blank" rel="noopener noreferrer">
                {chunks}
              </a>
            ),
          })}
        </dd>
      </dl>
      <h3>{t("venue.trains-heading")}</h3>
      <p>
        {t.rich("venue.trains-intro", {
          appLink: (chunks) => (
            <a href="https://tfw.wales/ways-to-travel/rail/buy-tickets/app" target="_blank" rel="noopener noreferrer">
              {chunks}
            </a>
          ),
          websiteLink: (chunks) => (
            <a href="https://tfw.wales/plan-a-journey" target="_blank" rel="noopener noreferrer">
              {chunks}
            </a>
          ),
        })}
      </p>
      <dl>
        <dt>
          <a href="https://maps.app.goo.gl/ZJWzSWUkn2wSK1kL6" target="_blank" rel="noopener noreferrer">
            Cathays
          </a>
        </dt>
        <dd>{t("venue.trains-cathays")}</dd>
        <dt>
          <a href="https://maps.app.goo.gl/b4m6yKhCGWRVbbms8" target="_blank" rel="noopener noreferrer">
            Cardiff Queen Street
          </a>
        </dt>
        <dd>{t("venue.trains-queen-street")}</dd>
        <dt>
          <a href="https://maps.app.goo.gl/zA8GVnrVnc49raCQA" target="_blank" rel="noopener noreferrer">
            Cardiff Central
          </a>
        </dt>
        <dd>{t("venue.trains-central")}</dd>
      </dl>
      <h3>{t("venue.buses-heading")}</h3>
      <p>
        {t.rich("venue.buses-intro", {
          stopLink: (chunks) => (
            <a href="https://www.cardiffbus.com/stops/5710AWA11117" target="_blank" rel="noopener noreferrer">
              {chunks}
            </a>
          ),
          appLink: (chunks) => (
            <a href="https://www.cardiffbus.com/app">
              {chunks}
            </a>
          ),
          websiteLink: (chunks) => (
            <a href="https://www.cardiffbus.com/plan-a-journey" target="_blank" rel="noopener noreferrer">
              {chunks}
            </a>
          ),
        })}
      </p>
      <p>{t("venue.coach-station-label")}</p>
      <address>
        Cardiff Coach Station <br />
        Sophia Gardens <br />
        Cardiff <br />
        CF11 9HW
      </address>
    </>
  );
}