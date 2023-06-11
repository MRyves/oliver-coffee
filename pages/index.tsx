import Image from "next/image";
import coffeeDropPic from "../public/coffee-drops.jpg";
import sharingCoffeePic from "../public/sharing-coffee.jpg";
import coffeeFarmerPic from "../public/coffee-farmer.jpg";
import Title from "../src/components/Title";
import Subtitle from "../src/components/Subtitle";
import HomeBanner from "../src/components/Banners/HomeBanner";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <HomeBanner />
      <section id="explanaition-anker" className="mt-3 max-w-screen-2xl mx-auto">
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
          <div className="self-center pb-2 md:pb-0 md:text-lg md:w-3/5 ">
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
      <div className="max-w-screen-2xl mx-auto">
        <hr className="h-px my-8 mx-auto" />
      </div>
      <section className="max-w-screen-2xl mx-auto mt-5">
        <Title text="What we do" classNames="md:text-right" />
        <Subtitle text="... and why we do it" classNames="md:text-right" />
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
          <div className="self-center pb-2 md:pb-0 md:text-lg md:w-3/5 md:text-right">
            We are in the business of introducing Vietnamese coffee to
            Switzerland. Our mission is to share the unique and robust flavor of
            Vietnamese coffee with Swiss coffee lovers. We carefully source our
            beans directly from Vietnam, and bring the traditional brewing
            techniques to our local cafés and homes here in Switzerland.
            <br />
            Our motivation comes from our love for Vietnamese coffee. The
            distinct richness, deep flavors, and the vibrant coffee culture of
            Vietnam captivated us. We want to share this experience with
            Switzerland, to broaden the coffee horizons and bring more diversity
            to the Swiss coffee scene. We are passionate about connecting
            cultures through coffee, and we believe that Vietnamese coffee has a
            special place in the Swiss market.
          </div>
        </div>
      </section>
      <div className="max-w-screen-2xl mx-auto">
        <hr className="h-px my-8 mx-auto" />
      </div>
      <section className="max-w-screen-2xl mx-auto mt-5">
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
          <div className="md:w-3/5 md:text-lg self-center">
            Are you intrigued by the unique and bold flavors of Vietnamese
            coffee? Whether you&apos;re a café owner looking to diversify your
            offerings, or a coffee enthusiast longing for a taste adventure,
            weve got you covered. Our starter pack is a perfect introduction to
            the rich world of Vietnamese coffee, carefully curated to deliver an
            authentic experience. Discover the distinctive tastes and brewing
            methods that make Vietnamese coffee stand out. If you have any
            questions or need further guidance, our team is always ready to
            assist you. Reach out to us via the{" "}
            <Link href="/contact" className="text-default-cyan-dark">contact</Link> page and embark on your
            Vietnamese coffee journey today.
            <p className="text-center mt-2">
              <Link href="/coffee" passHref>
                <button
                  className="p-3 rounded text-white bg-default-cyan-normal"
                >
                  Read about our Coffee
                </button>
              </Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
