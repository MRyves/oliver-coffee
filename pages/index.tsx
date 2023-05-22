import Image from "next/image";
import coffeeDropPic from "../public/coffee-drops.jpg";
import sharingCoffeePic from "../public/sharing-coffee.jpg";
import coffeeFarmerPic from "../public/coffee-farmer.jpg";
import Title from "./components/Title";
import Subtitle from "./components/Subtitle";
import HomeBanner from "./components/Banners/HomeBanner";

export default function Home() {
  return (
    <>
      <HomeBanner />
      <section id="explanaition-anker" className="px-7 mt-3">
        <Title text="What is vietnamese coffee?" />
        <Subtitle text="and why we love it..." />
        <div className="flex flex-col-reverse md:flex-row justify-between mt-5">
          <div className="block w-full md:w-1/3 h-fit">
            <Image
              src={coffeeDropPic}
              priority={true}
              className="rounded-md opacity-90"
              style={{ objectFit: "contain", objectPosition: "center" }}
              alt="Dripping coffee image"
            />
          </div>
          <div className="md:w-3/5 self-center pb-2 md:text-lg">
            <span>
              I love Vietnamese coffee for its unique flavor combination of
              dark-roasted beans and sweetened condensed milk. The taste is
              smooth and indulgent, leaving me wanting more. The brewing process
              encourages mindfulness and appreciation for simplicity. Whether I
              want it hot or iced, black or with milk, Vietnamese coffee caters
              to my preferences. Its rich history reflects resilience and
              cultural influences. Overall, Vietnamese coffee offers a
              delightful experience that transports me to moments of tranquility
              and pure enjoyment.
            </span>
          </div>
        </div>
      </section>
      <div className="px-7">
        <hr className="h-px my-8 mx-auto" />
      </div>
      <section className="px-7 mt-5">
        <Title text="What we do" classNames="text-right" />
        <Subtitle text="... and why we do it" classNames="text-right" />
        <div className="flex flex-col-reverse md:flex-row justify-between mt-5">
          <div className="md:order-last block w-full md:w-1/3 h-fit">
            <Image
              src={sharingCoffeePic}
              alt="Sharing coffee image"
              priority={false}
              className="rounded-md opacity-90"
              style={{ objectFit: "contain", objectPosition: "center" }}
            />
          </div>
          <div className="md:w-3/5 self-center text-right">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum quia
            fugit, hic velit non molestias ad eveniet quaerat officiis labore
            soluta voluptatum natus debitis nulla voluptatibus corrupti
            recusandae maxime necessitatibus.
          </div>
        </div>
      </section>
      <div className="px-7">
        <hr className="h-px my-8 mx-auto" />
      </div>
      <section className="px-7 mt-5">
        <Title text="Are you interested?" />
        <Subtitle text="how about some coffee..." />
        <div className="flex flex-col-reverse md:flex-row justify-between mt-5">
          <div className="block w-full md:w-1/3 h-fit">
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
            perferendis quo repudiandae iusto odio! Repellendus, dolores
            aliquid? Vitae, repellendus.
          </div>
        </div>
      </section>
    </>
  );
}
