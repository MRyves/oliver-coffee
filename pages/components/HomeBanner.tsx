import styles from "../../styles/HomeBanner.module.css";
import Image from "next/image";
import homeCoffeePic from "../../public/home-coffee.jpg";

export default function HomeBanner() {
  return (
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
        <div className="relative z-10 flex flex-wrap items-center px-5 pt-16">
          <h1 className="flex-1 basis-full text-white text-2xl font-bold font-sans md:text-6xl">
            Traditional
            <br />
            vietnamese
            <br />
            Coffee
          </h1>
          <h3 className="flex-1 basis-full text-white text-xl md:text-3xl font-sans mt-6">
            Experice this unique
            <br />
            coffee with us!
          </h3>
        </div>
      </div>
  );
}
