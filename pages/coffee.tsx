import CoffeeBanner from "./components/CoffeeBanner";
import Subtitle from "./components/Subtitle";
import Title from "./components/Title";
import Image from "next/image";
import Link from "next/link";
import StarterpackPic from "../public/starterpack.jpg";
import CoffeeVariationPic from "../public/coffee-variations.jpg";

export default function CoffeePage() {
  return (
    <>
      <CoffeeBanner />
      <section id="more-info" className="px-7 mt-3">
        <Title text="What is in the starterpack?" />
        <Subtitle text="and how do i get one..." />
        <div className="flex justify-between mt-5">
          <div className="hidden md:block w-1/3 h-fit">
            <Image
              src={StarterpackPic}
              priority={true}
              className="rounded-md opacity-90"
              style={{ objectFit: "contain", objectPosition: "center" }}
              alt="Starterpack image"
            />
          </div>
          <div className="md:w-3/5 self-center text-justify">
            <span>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime
              porro consequatur sapiente voluptatum magni blanditiis aut alias,
              similique soluta, a aliquid dolore provident iure nesciunt nihil
              aliquam nisi eius laborum. Lorem, ipsum dolor sit amet consectetur
              adipisicing elit. Ipsam, ea officiis? Sed nulla labore aut,
              repudiandae voluptatibus est fuga error modi earum tempora
              voluptate, nihil ducimus sunt dicta in incidunt.
            </span>
            <p className="text-center mt-2">
              <Link href="/order" passHref>
                <button
                  className="p-2 rounded text-white"
                  style={{ backgroundColor: "#40AFBD" }}
                >
                  Get your starterpack!
                </button>
              </Link>
            </p>
          </div>
        </div>
      </section>
      <section className="px-7 mt-3">
        <Title
          text="What can you do with the starterpack?"
          classNames="text-right"
        />
        <Subtitle text="... the traditional recipes" classNames="text-right" />
        <div className="flex justify-between mt-5">
          <div className="md:w-3/5 self-center text-justify">
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,
              quisquam, laborum perferendis accusantium, asperiores iure beatae
              ex necessitatibus cum aperiam voluptates ea rerum ratione adipisci
              blanditiis placeat doloribus praesentium nemo.
            </span>
            <p className="text-center mt-2">
              <Link href="/story">
                <button
                  className="p-2 rounded text-white"
                  style={{ backgroundColor: "#40AFBD" }}
                >
                  Go to the recipes
                </button>
              </Link>
            </p>
          </div>
          <div className="hidden md:block w-1/3 h-fit">
            <Image
              src={CoffeeVariationPic}
              className="rounded-md opacity-90"
              style={{ objectFit: "cover", objectPosition: "center", aspectRatio:"1/1" }}
              alt="Coffee variations image"
            />
          </div>
        </div>
      </section>
    </>
  );
}
