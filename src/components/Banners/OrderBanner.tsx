import { useTranslation } from "next-i18next";
import styles from "../../../styles/Banners/OrderBanner.module.css";
import Subtitle from "../Subtitle";
import Title from "../Title";

export default function OrderBanner() {

const {t} = useTranslation("order", {keyPrefix: "banner"});

  return (
    <div className={styles.banner}>
      <div className="flex flex-col flex-1 justify-center text-center">
        <Title
          text={t("title")}
          classNames="text-white"
        />
        <Subtitle text="..." classNames="text-white" />
        <Subtitle
          text={t("subtitle")}
          classNames="text-white"
        />
      </div>
    </div>
  );
}
