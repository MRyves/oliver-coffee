import CoffeeBanner from "./components/CoffeeBanner";
import Subtitle from "./components/Subtitle";
import Title from "./components/Title";
import Image from "next/image";
import StarterpackPic from "../public/starterpack.jpg";

export default function CoffeePage() {
  return (
    <>
      <CoffeeBanner />
      <section id="more-info" className="px-7 mt-3">
        <Title text="What is in the starterpack" />
        <Subtitle text="and how do i get one..." />
        <div className="flex justify-between mt-5">
          <div className="hidden md:block w-1/3 h-fit">
            <Image
              src={StarterpackPic}
              priority={false}
              className="rounded-md opacity-90"
              style={{ objectFit: "contain", objectPosition: "center" }}
              alt="Starterpack image"
            />
          </div>
          <div className="md:w-3/5 self-center">
            <span>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime
              porro consequatur sapiente voluptatum magni blanditiis aut alias,
              similique soluta, a aliquid dolore provident iure nesciunt nihil
              aliquam nisi eius laborum. Lorem, ipsum dolor sit amet consectetur
              adipisicing elit. Ipsam, ea officiis? Sed nulla labore aut,
              repudiandae voluptatibus est fuga error modi earum tempora
              voluptate, nihil ducimus sunt dicta in incidunt..
            </span>
          </div>
        </div>
      </section>
    </>
  );
}
