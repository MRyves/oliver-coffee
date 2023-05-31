import { FaCoffee } from "react-icons/fa";
import { MouseEvent } from "react";
import styles from "../../../styles/Banners/StoryBanner.module.css";

export default function StoryBanner() {
    const handleClick = (event: MouseEvent) => {
        event.preventDefault();
        const anchorTag = document.getElementById("story-time");
        anchorTag?.scrollIntoView({ behavior: "smooth", block: "start" });
      };
  return (
    <div id="story-banner" className={`${styles.banner} font-mono`}>
      <div className={styles.bannerTextBox}>
        This is the two of us, sitting in front of the Oliver Caffé in Hoi An.
        I (Yves) am the guy on the left and Quang, the owner, is the guy on the
        right. Our story starts with me ordering my morning coffee...
        <br />
        <button
          onClick={handleClick}
          className="inline-flex items-center font-mono text-white rounded-md p-2 mt-1"
          style={{ backgroundColor: "#40AFBD" }}
        >
          <FaCoffee className="fill-current mr-2" />
          Continue reading
        </button>
      </div>
    </div>
  );
}
