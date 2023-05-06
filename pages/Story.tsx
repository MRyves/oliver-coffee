import Title from "./components/Title";

export default function StoryPage() {
  return (
    <>
    <div className="w-full flex justify-center mt-10">
      <iframe
        src="https://giphy.com/embed/fVeAI9dyD5ssIFyOyM"
        width="480"
        height="360"
        frameBorder="0"
        className="giphy-embed"
        allowFullScreen
      ></iframe>
      <p>
        <a href="https://giphy.com/gifs/OctoNation-work-construction-fVeAI9dyD5ssIFyOyM">
        </a>
      </p>
    </div>
    <div className="w-full flex justify-center mt-10 mb-20">
        <Title classNames="text-center" text="This page is under construction" />
    </div>
    </>
  );
}
