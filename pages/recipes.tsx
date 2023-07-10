import Image from "next/image";
import RecipeCard from "../src/components/RecipeCard";
import recepiesList from "../public/recipes";
import Title from "@/src/components/Title";
import Subtitle from "@/src/components/Subtitle";
import DripCoffeeImg from "@/public/drip-coffee.jpg";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

export default function Recipes() {

const {t} = useTranslation("recipes");

  return (
    <>
      <section className="p-7 lg:p-3 max-w-screen-2xl mx-auto">
        <Title text={t("title")} />
        <Subtitle text={t("subtitle")} />
        <div className="mt-3">
          <p>
            {t("introText")}
          </p>
          <br />
          <div className="flex align-middle justify-center">
            <div className="md:w-2/3">
              <ol className="list-decimal pl-4">
                <li>
                  {t("list.0")}
                </li>
                <li>{t("list.1")}</li>
                <li>{t("list.2")}</li>
                <li>{t("list.3")}</li>
                <li>{t("list.4")}
                </li>
                <li>{t("list.5")}
                </li>
                <li>{t("list.6")}
                </li>
              </ol>
              <br />
              <p>
              {t("text")}
              </p>
              <p>
              {t("outroText")}
              </p>
            </div>
            <div className="hidden md:block">
              <Image
                src={DripCoffeeImg}
                width={300}
                className="rounded-sm"
                alt="dripping coffee image"
              />
            </div>
          </div>
        </div>
      </section>
      <hr className="h-px my-8 mx-auto" />
      <section className="p-3 max-w-screen-2xl mx-auto">
        <Title text="Our Recipes" />
        <Subtitle text="Have fun experimenting!" />
        <div
          id="recipes-list"
          className="grid grid-cols-1 gap-y-5 justify-items-center pt-3 md:grid-cols-3 md:px-20 md:gap-x-1"
        >
          {recepiesList.map((r) => (
            <RecipeCard key={r.id} {...r} />
          ))}
        </div>
      </section>
    </>
  );
}

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["recipes", "footer", "header"])),
    },
  };
}
