import styles from "../../../styles/Banners/HomeBanner.module.css";
import { FaCoffee } from "react-icons/fa";
import { MouseEvent } from "react";

export default function HomeBanner() {
  const handleClick = (event: MouseEvent) => {
    event.preventDefault();
    const anchorTag = document.getElementById("explanaition-anker");
    anchorTag?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div id="home-banner" className={styles.homeBanner}>
      <div className="relative z-10 flex flex-wrap items-center px-4 md:px-20 2xl:px-24 pt-24 md:pt-54 2xl:pt-80 tracking-widest">
        <h1 className="flex-1 basis-full text-white text-3xl md:text-4xl xl:text-6xl font-semibold font-mono">
          Traditional
          <br />
          vietnamese
          <br />
          <div className={styles.wordCarousel}>
          
          <span className={styles.word}>Coffee</span>
          <span className={styles.word}>C&#224; ph&#234; s&#7919;a</span>
          <span className={styles.word}>C&#224; ph&#234; b&#7841;c x&#236;u</span>
          <span className={styles.word}>C&#224; ph&#234; d&#7915;a</span>
          <span className={styles.word}>C&#224; ph&#234; mu&#245;i</span>
          </div>
        </h1>
        <h3 className="flex-1 basis-full text-white text-xl md:text-2xl xl:text-3xl font-mono mt-6">
          Experice this unique
          <br />
          coffee with us!
        </h3>
        <button
          onClick={handleClick}
          className="font-mono inline-flex items-center text-white rounded-md p-3 mt-6"
          style={{ backgroundColor: "#40AFBD" }}
        >
          <FaCoffee className="fill-current mr-2" />
          Show me!
        </button>
      </div>
    </div>
  );
}
