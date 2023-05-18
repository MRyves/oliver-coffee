import Image from "next/image";
import coffeeDropPic from "../../public/home-coffee.jpg";
import styles from "../../styles/RecipeCard/RecipeCard.module.css";
import flipAnimation from "../../styles/RecipeCard/FlipAnimation.module.css";
import { CSSTransition } from "react-transition-group";
import { useRef, useState } from "react";
import { Recipe } from "../../public/recipes";

type RecipeCardProps = Recipe;

export default function RecipeCard(props: RecipeCardProps) {
  const cardRef = useRef(null);
  const [isFlipped, setIsFlipped] = useState(false);
  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <CSSTransition
      nodeRef={cardRef}
      in={isFlipped}
      timeout={300}
      classNames={flipAnimation}
    >
      <div
        ref={cardRef}
        className={`${styles.card} flex-1 max-w-sm bg-white border border-gray-200 rounded-lg shadow`}
        onClick={handleCardClick}
      >
        <div className={styles.cardFront}>
          <Image className="rounded-t-lg" src={coffeeDropPic} alt="" />
          <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900" dangerouslySetInnerHTML={{__html: props.name}}>
            </h5>
            <p className="mb-3 font-normal text-gray-700 ">{props.desc}</p>
            <a
              onClick={handleCardClick}
              style={{ backgroundColor: "#01DCF4" }}
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              How it&apos;s made
            </a>
          </div>
        </div>
        <div className={styles.cardBack}>
          <h5 className="text-xl font-bold tracking-tight text-gray-900 underline">
            Ingredients
          </h5>
          <ul className="tracking-tight list-disc list-inside">
            {props.ingredients?.map((i) => (
              <li key={i}>{i}</li>
            ))}
          </ul>
          <h5 className="text-xl font-bold tracking-tight text-gray-900 mt-3">
            Directions
          </h5>
          <p className="mb-2">{props.directions}</p>
          <p className="italic" dangerouslySetInnerHTML={{__html: props.tip || ''}}></p>
        </div>
      </div>
    </CSSTransition>
  );
}
