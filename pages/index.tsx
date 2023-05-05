import Image from "next/image";
import coffeeDropPic from "../public/coffee-drops.jpg";
import sharingCoffeePic from "../public/sharing-coffee.jpg";
import coffeeFarmerPic from "../public/coffee-farmer.jpg";
import HomeBanner from "./components/HomeBanner";

export default function Home() {
  return (
    <>
      <HomeBanner />
      <section id="explanaition-anker" className="px-7">
        <h2 className="block text-2xl md:text-3xl">
          What is vietnamese coffee?
        </h2>
        <h3 className="block text-xl md:text-2xl italic">
          and why we love it...
        </h3>
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
      <section className="px-7 mt-5">
        <h2 className="text-2xl md:text-3xl text-right">What we do</h2>
        <h3 className="text-xl md:text-2xl text-right italic">
          ... and why we do it
        </h3>
        <div className="flex justify-between mt-5">
          <div className="order-last hidden md:block w-1/3 h-fit">
            <Image
              src={sharingCoffeePic}
              alt="Sharing coffee image"
              priority={false}
              className="rounded-md opacity-90"
              style={{ objectFit: "contain", objectPosition: "center" }}
            />
          </div>
          <div className="md:w-3/5 self-center">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum quia
            fugit, hic velit non molestias ad eveniet quaerat officiis labore
            soluta voluptatum natus debitis nulla voluptatibus corrupti
            recusandae maxime necessitatibus.
          </div>
        </div>
      </section>
      <section className="px-7 mt-5">
        <h2 className="text-2xl md:text-3xl">Are you interested?</h2>
        <h3 className="text-xl md:text-2xl italic">how about some coffee...</h3>
        <div className="flex justify-between mt-5">
        <div className="hidden md:block w-1/3 h-fit">
          <Image
            src={coffeeFarmerPic}
            alt="Coffee farmer image"
            priority={false}
            className="rounded-md opacity-90"
            style={{ objectFit: "contain", objectPosition: "center" }}
          />
        </div>
        <div className="md:w-3/5 self-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero ad
          fugiat esse, alias, optio eveniet consectetur ab numquam et possimus
          perferendis quo repudiandae iusto odio! Repellendus, dolores aliquid?
          Vitae, repellendus.
        </div>
        </div>
      </section>
    </>
  );
}
