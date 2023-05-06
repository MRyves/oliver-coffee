import styles from "../../styles/CoffeeBanner.module.css";
import { FaCoffee } from "react-icons/fa";
import { MouseEvent } from "react";

export default function CoffeeBanner() {
  const handleClick = (event: MouseEvent) => {
    event.preventDefault();
    const anchorTag = document.getElementById("more-info");
    anchorTag?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div id="banner" className={styles.banner}>
      <div className="relative z-10 flex flex-wrap items-center px-4 pt-24 md:px-40 md:pt-96">
        <h1 className="flex-1 basis-full text-white text-2xl font-bold font-sans md:text-6xl">
          This is our Coffee
        </h1>
        <h3 className="flex-1 basis-full text-white text-xl md:text-3xl font-sans mt-6">
          Order your starterpack here, <br />
          straight outta Vietnam!
        </h3>
        <button
          onClick={handleClick}
          className="inline-flex items-center text-white rounded-md p-3 mt-3"
          style={{ backgroundColor: "#40AFBD" }}
        >
          <FaCoffee className="fill-current mr-2" />
          More info!
        </button>
      </div>
    </div>
  );
}
