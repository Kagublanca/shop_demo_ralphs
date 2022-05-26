import Image from "next/image";
import styles from "./seasonalcard.module.css";

function SeasonalCard({ image, header, subtext }) {
  return (
    <div className={styles.cardwrapper}>
      <div className={styles.image}>
        <Image
          src={image}
          alt="A seasonal picture"
          width={3000}
          height={2000}
        />
      </div>
      <div className={styles.cardcontent}>
        <h4 id={styles.header} className={styles.text}>
          {header}
        </h4>
        <p id={styles.subtext} className={styles.text}>
          {subtext}
        </p>
      </div>
    </div>
  );
}

export default SeasonalCard;
