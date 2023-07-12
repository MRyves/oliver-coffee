import { FaCoffee } from "react-icons/fa";
import { MouseEvent } from "react";
import styles from "../../../styles/Banners/StoryBanner.module.css";
import { useTranslation } from "next-i18next";

export default function StoryBanner() {

  const {t} = useTranslation("story", {keyPrefix: "banner"});

  const handleClick = (event: MouseEvent) => {
    event.preventDefault();
    const anchorTag = document.getElementById("story-time");
    anchorTag?.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  return (
    <div id="story-banner" className={`${styles.banner} font-mono`}>
      <div className={styles.bannerTextBox}>
        {t("text")}
        <br />
        <button
          onClick={handleClick}
          className="inline-flex items-center font-mono text-white rounded-md p-3 mt-1 bg-default-brown-normal md:text-xl"
        >
          <FaCoffee className="fill-current mr-2" />
          {t("button")}
        </button>
      </div>
    </div>
  );
}
