import Subtitle from "../src/components/Subtitle";
import Title from "../src/components/Title";
import Image from "next/image";
import Link from "next/link";
import StarterpackPic from "../public/starterpack.jpg";
import CoffeeVariationPic from "../public/coffee-variations.jpg";
import CoffeeBanner from "../src/components/Banners/CoffeeBanner";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

export default function CoffeePage() {

const {t} = useTranslation("coffee");

  return (
    <>
      <CoffeeBanner />
      <section id="more-info" className="px-7 lg:px-3 max-w-screen-2xl mx-auto mt-3">
        <Title text={t("whatIs.title")} />
        <Subtitle text={t("whatIs.subtitle")} />
        <div className="flex flex-col md:flex-row justify-between mt-5">
          <div className="w-full md:block md:w-1/3 h-fit">
            <Image
              src={StarterpackPic}
              priority={true}
              className="rounded-md opacity-90"
              style={{ objectFit: "contain", objectPosition: "center" }}
              alt="Starterpack image"
            />
          </div>
          <div className="self-center pt-2 md:pt-0 md:w-3/5 md:text-lg">
            <span>
              {t("whatIs.text")}
              <ul className="list-disc list-outside pl-4 ">
                <li>
                  {t("whatIs.list.1")}
                </li>
                <li>{t("whatIs.list.2")}
                </li>
                <li>
                {t("whatIs.list.3")}
                </li>
                <li>
                {t("whatIs.list.4")}
                </li>
              </ul>
            </span>
            <p className="text-center mt-2">
              <Link href="/order" passHref>
                <button
                  className="p-3 rounded text-white bg-default-brown-normal"
                >
                  {t("whatIs.button")}
                </button>
              </Link>
            </p>
          </div>
        </div>
      </section>
      <div className="px-7 lg:px-3 max-w-screen-2xl mx-auto">
        <hr className="h-px my-8 mx-auto" />
      </div>
      <section className="px-7 lg:px-3 max-w-screen-2xl mt-3 mx-auto">
        <Title
          text={t("whatDo.title")}
          classNames="md:text-right"
        />
        <Subtitle
          text={t("whatDo.subtitle")}
          classNames="md:text-right"
        />
        <div className="flex flex-col-reverse md:flex-row justify-between mt-5">
          <div className="self-center pt-2 md:pt-0 md:w-3/5 md:text-right md:text-lg">
            <span>
              {t("whatDo.text")}
            </span>
            <p className="text-center mt-2">
              <Link href="/recipes">
                <button
                  className="p-3 rounded text-white bg-default-brown-normal"
                >
                  {t("whatDo.button")}
                </button>
              </Link>
            </p>
          </div>
          <div className="block w-full md:w-1/3 h-fit">
            <Image
              src={CoffeeVariationPic}
              className="rounded-md opacity-90"
              style={{
                objectFit: "cover",
                objectPosition: "center",
                aspectRatio: "1/1",
              }}
              alt="Coffee variations image"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["coffee", "footer", "header"])),
    },
  };
}
