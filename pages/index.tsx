import Image from "next/image";
import homeCoffeePic from "../public/home-coffee.jpg";
import styles from "../styles/index.module.css";

export default function Home() {
  return (
    <>
      <div id="home-banner" className={styles.homeBanner}>
        <div id="image-container" className={styles.imageContainer}>
          <Image
            src={homeCoffeePic}
            alt="Home Coffee picture"
            style={{ objectFit: "cover", objectPosition: "35% center" }}
            priority
            fill
          />
        </div>
        <div className="relative z-10 flex flex-wrap items-center h-full align-middle px-5 pt-16">
          <h1 className="flex-1 text-white text-2xl whitespace-pre font-bold font-sans md:text-6xl">
            Traditional
            <br />
            vietnamese
            <br />
            Coffee
          </h1>
          <h3 className="text-white md:text-3xl font-sans">
            Experice this unique coffee with Oliver Coffee!
          </h3>
        </div>
      </div>
    </>
  );
}
