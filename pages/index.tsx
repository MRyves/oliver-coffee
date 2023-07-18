import Image from "next/image";
import coffeeDropPic from "../public/coffee-drops.jpg";
import sharingCoffeePic from "../public/sharing-coffee.jpg";
import coffeeFarmerPic from "../public/coffee-farmer.jpg";
import Title from "../src/components/Title";
import Subtitle from "../src/components/Subtitle";
import HomeBanner from "../src/components/Banners/HomeBanner";
import Link from "next/link";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

export default function Home() {
  const { t } = useTranslation("index");

  return (
    <>
      <HomeBanner />
      <section
        id="explanaition-anker"
        className="mt-3 px-7 lg:px-3 max-w-screen-2xl mx-auto"
      >
        <Title text={t("whatIs.title")} />
        <Subtitle text={t("whatIs.subtitle")} />
        <div className="flex flex-col-reverse md:flex-row justify-between mt-5">
          <div className="block w-full md:w-1/3 h-fit">
            <Image
              src={coffeeDropPic}
              priority={true}
              className="rounded-md opacity-90"
              style={{ objectFit: "contain", objectPosition: "center" }}
              alt="Dripping coffee image"
            />
          </div>
          <div className="self-center pb-2 md:pb-0 md:text-lg md:w-3/5 ">
            <span>{t("whatIs.text")}</span>
          </div>
        </div>
      </section>
      <div className="px-7 lg:px-3 max-w-screen-2xl mx-auto">
        <hr className="h-px my-8 mx-auto" />
      </div>
      <section className="px-7 lg:px-3 max-w-screen-2xl mx-auto mt-5">
        <Title text={t("whatDo.title")} classNames="md:text-right" />
        <Subtitle text={t("whatDo.subtitle")} classNames="md:text-right" />
        <div className="flex flex-col-reverse md:flex-row justify-between mt-5">
          <div className="md:order-last block w-full md:w-1/3 h-fit">
            <Image
              src={sharingCoffeePic}
              alt="Sharing coffee image"
              priority={false}
              className="rounded-md opacity-90"
              style={{ objectFit: "contain", objectPosition: "center" }}
            />
            <p className="md:hidden text-center mt-2">
              <Link href="/story" passHref>
                <button className="w-full p-3 rounded text-white bg-default-brown-normal">
                  {t("whatDo.button")}{" "}
                </button>
              </Link>
            </p>
          </div>
          <div className="self-center pb-2 md:pb-0 md:text-lg md:w-3/5 md:text-right">
            {(t("whatDo.text", { returnObjects: true }) as string[]).map(
              (text, index) => (
                <>
                  <span key={index}>
                    {index === 0 ? "" : <br />}
                    {text}
                  </span>
                </>
              )
            )}
            <p className="hidden md:block text-center mt-2">
              <Link href="/story" passHref>
                <button className="p-3 rounded text-white bg-default-brown-normal">
                  {t("whatDo.button")}
                </button>
              </Link>
            </p>
          </div>
        </div>
      </section>
      <div className="px-7 lg:px-3 max-w-screen-2xl mx-auto">
        <hr className="h-px my-8 mx-auto" />
      </div>
      <section className="px-7 lg:px-3 max-w-screen-2xl mx-auto mt-5">
        <Title text={t("howAbout.title")} />
        <Subtitle text={t("whatDo.subtitle")} />
        <div className="flex flex-col-reverse md:flex-row justify-between mt-5">
          <div className="block w-full md:w-1/3 h-fit">
            <Image
              src={coffeeFarmerPic}
              alt="Coffee farmer image"
              priority={false}
              className="rounded-md opacity-90"
              style={{ objectFit: "contain", objectPosition: "center" }}
            />
            <p className="md:hidden text-center mt-2">
              <Link href="/coffee" passHref>
                <button className="w-full p-3 rounded text-white bg-default-brown-normal">
                  {t("howAbout.button")}
                </button>
              </Link>
            </p>
          </div>
          <div className="md:w-3/5 pb-2 md:text-lg self-center">
            {t("howAbout.text.firstPart")}
            <Link href="/contact" className="text-default-brown-dark">
              {t("howAbout.text.contactLink")}
            </Link>
            {t("howAbout.text.secondPart")}
            <p className="hidden md:block text-center mt-2">
              <Link href="/coffee" passHref>
                <button className="p-3 rounded text-white bg-default-brown-normal">
                  {t("howAbout.button")}
                </button>
              </Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["index", "footer", "header"])),
    },
  };
}
