import Link from "next/link";
import StoryBanner from "../src/components/Banners/StoryBanner";
import Subtitle from "../src/components/Subtitle";
import Title from "../src/components/Title";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

export default function StoryPage() {
  const { t } = useTranslation("story");

  return (
    <>
      <StoryBanner />
      <section id="story-time" className="px-7 mt-3 max-w-screen-2xl mx-auto">
        <Title text={t("section.0.title")} />
        <Subtitle text={t("section.0.subtitle")} classNames="pt-2" />
        <div className="mt-2 text-justify">
          {t("section.0.text.0")}{" "}
          <a
            className="underline text-default-brown-dark"
            href="https://goo.gl/maps/WkN5sbjVVJ1L6MX36"
          >
            H&#7897;i An
          </a>
          {t("section.0.text.1")}
          <p>
            {t("section.0.text.2")}{" "}
            <Link className="underline text-default-brown-dark" href="/recipes">
              C&#224; ph&#234; s&#7919;a
            </Link>{" "}
            {t("section.0.text.3")}
          </p>
          <p>{t("section.0.text.4")}</p>
          <p>{t("section.0.text.5")}</p>
        </div>
        <Subtitle text={t("section.1.subtitle")} classNames="pt-2" />
        <div className="mt-2 text-justify">
          <p>
          {t("section.1.text.0")}{" "}
            <Link className="underline text-default-brown-dark" href="/recipes">
              C&#224; ph&#234; s&#7919;a
            </Link>
            {t("section.1.text.1")}
          </p>

          <p>
          {t("section.1.text.2")}
          </p>

          <p>
          {t("section.1.text.3")}
          </p>

          <p>
          {t("section.1.text.4")}
          </p>

          <p>
          {t("section.1.text.5")}
          </p>
        </div>
        <Subtitle text={t("section.2.subtitle")} classNames="pt-2" />
        <div className="mt-2 text-justify">
          <p>
          {t("section.2.text.0")}
          </p>

          <p>
          {t("section.2.text.1")}
          </p>

          <p>{t("section.2.text.2")}
          </p>

          <p>{t("section.2.text.3")}
          </p>

          <p>{t("section.2.text.4")}
          </p>

          <p>
          {t("section.2.text.5")}
          </p>
        </div>
        <Subtitle
          text={t("section.3.subtitle")}
          classNames="pt-2"
        />
        <div className="text-justify mt-2">
          <p>
          {t("section.3.text.0")}
          </p>

          <p>
          {t("section.3.text.1")}
          </p>

          <p>
            <br />
            {t("section.3.text.2")}
          </p>
        </div>
      </section>
    </>
  );
}

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["story", "footer", "header"])),
    },
  };
}
