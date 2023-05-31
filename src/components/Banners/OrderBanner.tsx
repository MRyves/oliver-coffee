import styles from "../../../styles/Banners/OrderBanner.module.css";
import Subtitle from "../Subtitle";
import Title from "../Title";

export default function OrderBanner() {
  return (
    <div className={styles.banner}>
      <div className="flex flex-col flex-1 justify-center text-center">
        <Title
          text="Order your starterpack!"
          classNames="text-white"
        />
        <Subtitle text="..." classNames="text-white" />
        <Subtitle
          text="and we will reach out to you very soon"
          classNames="text-white"
        />
      </div>
    </div>
  );
}
