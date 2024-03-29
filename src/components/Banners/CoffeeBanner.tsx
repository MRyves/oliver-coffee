import styles from "../../../styles/Banners/CoffeeBanner.module.css";
import { FaCoffee } from "react-icons/fa";
import { MouseEvent } from "react";
import { useTranslation } from "next-i18next";

export default function CoffeeBanner() {
  const handleClick = (event: MouseEvent) => {
    event.preventDefault();
    const anchorTag = document.getElementById("more-info");
    anchorTag?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const {t} = useTranslation("coffee");

  return (
    <div id="banner" className={styles.banner}>
      <div className="relative z-10 flex flex-wrap items-center px-4 pt-24 md:px-20 2xl:px-40 md:pt-54 2xl:pt-96">
        <h1 className="flex-1 basis-full text-white text-3xl md:text-6xl font-semibold font-mono">
        {t("banner.title")}
        </h1>
        <h3 className="flex-1 basis-full text-white text-xl md:text-3xl font-mono mt-6">
          {t("banner.subtitle.1")}<br />
          {t("banner.subtitle.2")}
        </h3>
        <button
          onClick={handleClick}
          className="inline-flex items-center font-mono text-white rounded-md p-3 mt-3 bg-default-brown-normal md:text-xl"
        >
          <FaCoffee className="fill-current mr-2" />
          {t("banner.button")}
        </button>
      </div>
    </div>
  );
}
