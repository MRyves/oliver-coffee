import StoryBanner from "./components/Banners/StoryBanner";
import Subtitle from "./components/Subtitle";
import Title from "./components/Title";

export default function StoryPage() {
  return (
    <>
      <StoryBanner />
      <section id="story-time" className="px-7 mt-3">
        <Title text="Story time" />
        <Subtitle text="It is the 10<sup>th</sup> of Ferbruary 2023..." />
        <div className="mt-2 text-justify">
          And I wake up on my first day in{" "}
          <a
            className="underline"
            style={{ color: "#40AFBD" }}
            href="https://goo.gl/maps/WkN5sbjVVJ1L6MX36"
          >
            H&#7897;i An
          </a>
          , craving some caffeine. In search of a coffee fix, I check Google
          Maps to find the closest coffee place, and to my delight, I discover
          one just a three-minute walk away - perfect!
          <p>
            I make my way there and order my usual morning coffee, C&#224; ph&#234; s&#7919;a 
            with ice, as the weather is already sweltering hot. Shortly after, I
            receive my coffee and take that eagerly awaited first sip. Despite
            my sleepiness, I&apos;m instantly amazed by the taste, and an
            unconscious smile spreads across my face. By now, I&apos;m well
            acquainted with the art of enjoying Vietnamese coffee, knowing
            it&apos;s best to savor it slowly. So I take my time, relishing
            every sip, while observing my surroundings.
          </p>
          <p>
            I realize that I&apos;ve stumbled upon a wonderfully relaxed café.
            At this moment, I&apos;m the only customer (later discovering it to
            be an exception), and the barista who served me is seated across the
            room, absorbed in his computer.
          </p>
          <p>
            At one point, he approaches me and asks where I&apos;m from.
            &ldquo;Switzerland&rdquo; I reply, and our conversation begins. We
            quickly discover our shared love for good coffee, and I express to
            him that the coffee I&apos;m currently sipping is the best I&apos;ve
            had throughout my journey in Vietnam.
          </p>
        </div>
        <Subtitle text="The private coffee class" classNames="pt-2" />
        <div className="mt-2 text-justify">To be continued....</div>
      </section>
    </>
  );
}
