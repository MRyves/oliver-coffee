import styles from "../../styles/ContactBanner.module.css";
import Subtitle from "./Subtitle";
import Title from "./Title";

export default function ContactBanner() {
  return (
    <div className={styles.banner}>
      <div className="flex flex-col flex-1 justify-center text-center">
        <Title
          text="We would love to hear from you"
          classNames="text-white"
        />
        <Subtitle text="..." classNames="text-white" />
        <Subtitle
          text="and we will get back to you very soon"
          classNames="text-white"
        />
      </div>
    </div>
  );
}
