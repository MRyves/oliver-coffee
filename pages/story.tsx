import Link from "next/link";
import StoryBanner from "../src/components/Banners/StoryBanner";
import Subtitle from "../src/components/Subtitle";
import Title from "../src/components/Title";

export default function StoryPage() {
  return (
    <>
      <StoryBanner />
      <section id="story-time" className="px-7 mt-3 max-w-screen-2xl mx-auto">
        <Title text="Story time" />
        <Subtitle
          text="It is the 10<sup>th</sup> of Ferbruary 2023..."
          classNames="pt-2"
        />
        <div className="mt-2 text-justify">
          And I wake up on my first day in{" "}
          <a
            className="underline text-default-brown-dark"
            href="https://goo.gl/maps/WkN5sbjVVJ1L6MX36"
          >
            H&#7897;i An
          </a>
          , craving some caffeine. In search of a coffee fix, I check Google
          Maps to find the closest coffee place, and to my delight, I discover
          one just a three-minute walk away - perfect!
          <p>
            I make my way there and order my usual morning coffee,{" "}
            <Link
              className="underline text-default-brown-dark"
              href="/recipes"
            >
              C&#224; ph&#234; s&#7919;a
            </Link>{" "}
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
        <div className="mt-2 text-justify">
          <p>
            The very next day, my feet led me, almost as if by magic, back to
            Olivier Coffee for my morning brew. Quang greeted me with a warm
            smile, already preparing my{" "}
            <Link
              className="underline text-default-brown-dark"
              href="/recipes"
            >
              C&#224; ph&#234; s&#7919;a
            </Link>
            , as if he&apos;d predicted my return.
          </p>

          <p>
            I savored every sip of my coffee, the creamy sweetness punctuated by
            the robust flavor of the beans working a symphony on my tastebuds.
            As I drained the last drop, Quang approached me with an intriguing
            proposition. &ldquo;Interested in learning the Vietnamese way of
            brewing coffee?&rdquo; he asked.
          </p>

          <p>
            My response was instant and enthusiastic, &ldquo;Absolutely!&rdquo;
            Before I knew it, I was embarking on a private coffee class, with
            Quang revealing the secrets behind the mesmerizing Vietnamese
            coffee. I discovered that it wasn&apos;t just about the method; it
            was the meticulous attention to detail and the right equipment that
            made all the difference.
          </p>

          <p>
            A lightbulb moment struck me then. Why not bring this incredible
            coffee experience back to Switzerland? And just like that, with a
            surprising dose of good fortune, turning this dream into reality
            proved to be surprisingly straightforward.
          </p>

          <p>
            Quang put together a package of all the necessary equipment and sent
            it off to my home address. A month later, I was standing in my
            kitchen in Zurich, a parcel containing a piece of Vietnam in my
            hands. The adventure of Olivier Coffee in Switzerland was just about
            to begin.
          </p>
        </div>
        <Subtitle text="The begining of a friendship" classNames="pt-2" />
        <div className="mt-2 text-justify">
          <p>
            Day after day fell into a comfortable routine, but one particular
            day took an unexpected turn. After finishing our morning brew, Quang
            guided me to a local hairdresser&apos;s shop where, to my surprise,
            we had our ears cleaned — a customary practice in Vietnam.
          </p>

          <p>
            After this unique experience, we sat down for a meal together,
            sharing stories over hearty Vietnamese dishes. By the time we&apos;d
            finished, the midday heat had reached its peak, leaving me with a
            pressing need for an afternoon siesta.
          </p>

          <p>
            Awakening from my nap, I found a message from Quang on my phone. He
            asked if I was available around 4 p.m. and hinted at a surprise. Any
            pre-existing plans would have paled in comparison to the allure of
            Quang&apos;s mystery plan. I immediately agreed to meet him at the
            café.
          </p>

          <p>
            Upon my arrival, he unveiled the surprise—we were going sunset
            fishing at the beach. A broad smile spread across my face as we
            hopped on a scooter, the promise of adventure carrying us towards
            the shore.
          </p>

          <p>
            Under the setting sun, Quang taught me the art of casting a rod into
            the sea, how to tell if a fish had taken the bait. Our aim
            wasn&apos;t to haul in a catch, but to enjoy the tranquil moments
            shared between the waves and the sinking sun. As fate would have it,
            we did catch two small fish, which we happily handed over to a
            nearby fisherman in need.
          </p>

          <p>
            Time seemed to dissolve, and before we knew it, the last glimmers of
            sunlight had been replaced by a blanket of stars. With a quiet sigh
            of contentment, we knew it was time to head back.
          </p>
        </div>
        <Subtitle
          text="Fast-Forward to todays morning brew"
          classNames="pt-2"
        />
        <div className="text-justify mt-2">
          <p>
            Today, as the calendar marks the 27th of May, I find myself back
            home in Zurich, transcribing our tale. The morning began, as always,
            with my Vietnamese staple: Ca Phe Sua. The difference now, however,
            is that I&#39;m the barista, guided by the recipe and wisdom
            imparted by Quang.
          </p>

          <p>
            The once flickering idea of introducing his exceptional coffee to
            Switzerland has since flourished, giving birth to this very website
            you&#39;re browsing. As I write these words, a sense of anticipation
            fills me. While this chapter closes, the aroma of our shared story
            continues to brew, hinting that the narrative of Olivier Coffee is
            far from over...
          </p>

          <p>
            <br />
            Thank you for sharing in our journey by taking the time to read our
            story.
          </p>
        </div>
      </section>
    </>
  );
}
