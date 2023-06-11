import Subtitle from "../src/components/Subtitle";
import Title from "../src/components/Title";
import Image from "next/image";
import Link from "next/link";
import StarterpackPic from "../public/starterpack.jpg";
import CoffeeVariationPic from "../public/coffee-variations.jpg";
import CoffeeBanner from "../src/components/Banners/CoffeeBanner";

export default function CoffeePage() {
  return (
    <>
      <CoffeeBanner />
      <section id="more-info" className="px-7 lg:px-3 max-w-screen-2xl mx-auto mt-3">
        <Title text="What is in the starterpack?" />
        <Subtitle text="and how do i get one..." />
        <div className="flex flex-col md:flex-row justify-between mt-5">
          <div className="w-full md:block md:w-1/3 h-fit">
            <Image
              src={StarterpackPic}
              priority={true}
              className="rounded-md opacity-90"
              style={{ objectFit: "contain", objectPosition: "center" }}
              alt="Starterpack image"
            />
          </div>
          <div className="self-center pt-2 md:pt-0 md:w-3/5 md:text-lg">
            <span>
              Introducing the perfect starter kit for brewing Vietnamese coffee!
              This all-in-one package includes:
              <ul className="list-disc list-outside pl-4 ">
                <li>
                  Filter: A high-quality coffee filter, designed specifically
                  for Vietnamese coffee brewing. It ensures a smooth and robust
                  cup of coffee every time.
                </li>
                <li>
                  1kg Oliver Coffee: Already grouded coffee beans straight out
                  of Vietnam
                </li>
                <li>
                  1 Can Condensed Milk: Indulge in the traditional sweetness of
                  Vietnamese coffee with a can of rich and creamy condensed
                  milk. It adds a unique touch to your brew, creating the
                  perfect balance of flavors
                </li>
                <li>
                  Small Surprise: As an extra treat, we&apos;ve included a small
                  surprise in your starter kit! Discover a little something
                  special that will enhance your coffee brewing journey even
                  further
                </li>
              </ul>
            </span>
            <p className="text-center mt-2">
              <Link href="/order" passHref>
                <button
                  className="p-3 rounded text-white bg-default-cyan-normal"
                >
                  Get your starterpack!
                </button>
              </Link>
            </p>
          </div>
        </div>
      </section>
      <div className="px-7 lg:px-3 max-w-screen-2xl mx-auto">
        <hr className="h-px my-8 mx-auto" />
      </div>
      <section className="px-7 lg:px-3 max-w-screen-2xl mt-3 mx-auto">
        <Title
          text="What can you do with the starterpack?"
          classNames="md:text-right"
        />
        <Subtitle
          text="... the traditional recipes"
          classNames="md:text-right"
        />
        <div className="flex flex-col-reverse md:flex-row justify-between mt-5">
          <div className="self-center pt-2 md:pt-0 md:w-3/5 md:text-right md:text-lg">
            <span>
              Immerse yourself in the world of Vietnamese coffee with our
              carefully curated starter pack. It&apos;s a gateway to experiencing the
              unique flavors and brewing traditions of Vietnam, right in your
              kitchen. This pack gives you the opportunity to prepare your own
              authentic Vietnamese drip coffee, renowned for its robust and
              satisfying flavors. Experiment with varying strengths, add
              sweetened condensed milk for a traditional Vietnamese taste, or
              enjoy it black to savor the beans&apos; true essence. Whether you&apos;re
              hosting a coffee tasting party or enjoying a quiet morning, our
              Vietnamese coffee starter pack will transport you to the vibrant
              coffee culture of Vietnam.
            </span>
            <p className="text-center mt-2">
              <Link href="/recipes">
                <button
                  className="p-3 rounded text-white bg-default-cyan-normal"
                >
                  Go to the recipes
                </button>
              </Link>
            </p>
          </div>
          <div className="block w-full md:w-1/3 h-fit">
            <Image
              src={CoffeeVariationPic}
              className="rounded-md opacity-90"
              style={{
                objectFit: "cover",
                objectPosition: "center",
                aspectRatio: "1/1",
              }}
              alt="Coffee variations image"
            />
          </div>
        </div>
      </section>
    </>
  );
}
