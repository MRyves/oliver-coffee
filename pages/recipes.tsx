import Image from "next/image";
import RecipeCard from "../src/components/RecipeCard";
import recepiesList from "../public/recipes";
import Title from "@/src/components/Title";
import Subtitle from "@/src/components/Subtitle";
import DripCoffeeImg from "@/public/drip-coffee.jpg";

export default function recipes() {
  return (
    <>
      <section className="p-3 max-w-screen-2xl mx-auto">
        <Title text="Your journey begins here" />
        <Subtitle text="A simple guide to brewing our coffee" />
        <div className="mt-3">
          <p>
            Before you delve into the diverse world of Vietnamese coffee
            recipes, you must master the fundamental step: brewing the black
            coffee base. Fear not, this process is straightforward and requires
            just a bit of patience. Follow these steps:
          </p>
          <br />
          <div className="flex align-middle justify-center">
            <div className="md:w-2/3">
              <ol className="list-decimal pl-4">
                <li>
                  Begin by filling the aluminium filter (included in your
                  starter pack) just above the intention mark with our specially
                  ground coffee beans.
                </li>
                <li>Position the filter on top of your chosen glass or cup.</li>
                <li>
                  Pour a small amount of boiling water into the filter. This is
                  to preheat the coffee grounds. Wait for about 30 seconds.
                </li>
                <li>Proceed to fill the filter with boiling water.</li>
                <li>
                  Now comes the beauty of the process: sit back, relax, and
                  allow the magic to happen. It typically takes around 20
                  minutes for the water to fully seep through the filter.
                </li>
                <li>
                  For an even richer experience, repeat steps 3 to 5 using the
                  same coffee grounds in the filter. This second brew truly
                  unravels the depth of the coffee&apos;s flavor profile.
                </li>
                <li>
                  Now comes the best part: savor your creation and embark on a
                  unique coffee journey.
                </li>
              </ol>
              <br />
              <p>
                With these steps, you&apos;ll be well on your way to exploring
                the exquisite tastes and textures that Vietnamese coffee has to
                offer.
              </p>
              <p>
                Check out our traditional recipes below &darr;
              </p>
            </div>
            <div className="hidden md:block">
              <Image
                src={DripCoffeeImg}
                width={300}
                className="rounded-sm"
                alt="dripping coffee image"
              />
            </div>
          </div>
        </div>
      </section>
      <hr className="h-px my-8 mx-auto" />
      <section className="p-3 max-w-screen-2xl mx-auto">
        <Title text="Our Recipes" />
        <Subtitle text="Have fun experimenting!" />
        <div
          id="recipes-list"
          className="grid grid-cols-1 gap-y-5 justify-items-center pt-3 md:grid-cols-3 md:px-20 md:gap-x-1"
        >
          {recepiesList.map((r) => (
            <RecipeCard key={r.id} {...r} />
          ))}
        </div>
      </section>
    </>
  );
}
