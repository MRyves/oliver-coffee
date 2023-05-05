import Image from "next/image";
import styles from "../styles/index.module.css";
import homeCoffeePic from "../public/home-coffee.jpg";
import coffeeDropPic from "../public/coffee-drops.jpg";

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
      <section id="explanaition-anker" className="px-5">
        <h2 className="text-2xl md:text-3xl">What is vietnamese coffee?</h2>
        <h3 className="text-xl md:text-2xl italic">and why we love it...</h3>
        <div className="flex justify-between mt-5">
          <div className="hidden md:block w-1/3 h-fit">
            <Image
              src={coffeeDropPic}
              priority={false}
              className="rounded-md opacity-90"
              style={{ objectFit: "contain", objectPosition: "center" }}
              alt="Dripping coffee image"
            />
          </div>
          <div className="md:w-3/5 self-center">
            <span>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime
              porro consequatur sapiente voluptatum magni blanditiis aut alias,
              similique soluta, a aliquid dolore provident iure nesciunt nihil
              aliquam nisi eius laborum.
            </span>
          </div>
        </div>
      </section>
    </>
  );
}
