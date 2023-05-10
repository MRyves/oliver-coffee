import Image from "next/image";
import coffeeDropPic from "../../public/coffee-drops.jpg";
import styles from "../../styles/RecipeCard/RecipeCard.module.css";
import flipAnimation from "../../styles/RecipeCard/FlipAnimation.module.css";
import { CSSTransition } from "react-transition-group";
import { useRef, useState } from "react";

export default function RecipeCard() {
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
            <a href="#">
              <Image className="rounded-t-lg" src={coffeeDropPic} alt="" />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                  Noteworthy technology acquisitions 2021
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 ">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
              <a
                href="#"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Read more
              </a>
            </div>
          </div>
          <div className={styles.cardBack}>backside</div>
        </div>
      </CSSTransition>
  );
}
