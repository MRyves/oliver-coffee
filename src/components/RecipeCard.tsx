import Image from "next/image";
import styles from "../../styles/RecipeCard/RecipeCard.module.css";
import flipAnimation from "../../styles/RecipeCard/FlipAnimation.module.css";
import { CSSTransition } from "react-transition-group";
import { useCallback, useRef, useState } from "react";
import { Recipe } from "../../public/recipes";
import { useTranslation } from "next-i18next";

type RecipeCardProps = Recipe;

export default function RecipeCard(props: RecipeCardProps) {
  const { t: translate } = useTranslation("recipes");
  const t = useCallback(
    (value: string) => {
      return translate(`${props.id}.${value}`);
    },
    [props.id, translate]
  );

  const cardRef = useRef(null);
  const [isShowingFront, setIsShowingFront] = useState(true);
  const handleCardClick = () => {
    setIsShowingFront(!isShowingFront);
  };

  return (
    <CSSTransition
      nodeRef={cardRef}
      in={isShowingFront}
      timeout={300}
      classNames={flipAnimation}
    >
      <div
        ref={cardRef}
        className={`${styles.card} flex-1 max-w-sm bg-white border border-gray-200 rounded-lg shadow`}
        onClick={handleCardClick}
      >
        <div className={styles.cardFront}>
          <Image className="rounded-t-lg" src={props.img} alt={props.name} />
          <div className="p-5">
            <h5
              className="mb-2 text-2xl font-bold tracking-tight text-gray-900"
              dangerouslySetInnerHTML={{ __html: props.name }}
            ></h5>
            <p className="mb-3 font-normal text-gray-700 ">{t("desc")}</p>
            <a
              onClick={handleCardClick}
              className="inline-flex items-center px-3 p-3 text-sm font-medium text-center text-white rounded-lg bg-default-brown-normal hover:bg-default-brown-dark focus:ring-4 focus:outline-none focus:ring-blue-300"
            >
              {translate("button")}
            </a>
          </div>
        </div>
        <div className={styles.cardBack}>
          <h5 className="text-xl font-bold tracking-tight text-gray-900 underline">
            {translate("ingredients")}
          </h5>
          <ul className="tracking-tight list-disc list-inside">
            {props.ingredients?.map((i, index) => (
              <li key={i}>{t(`ingredients.${index}`)}</li>
            ))}
          </ul>
          <h5 className="text-xl font-bold tracking-tight text-gray-900 mt-3 underline">
            {translate("directions")}
          </h5>
          <p className="mb-2">{t("directions")}</p>
          <p
            className="italic"
            dangerouslySetInnerHTML={{ __html: !!props.tip && t("tip") || "" }}
          ></p>
        </div>
      </div>
    </CSSTransition>
  );
}
