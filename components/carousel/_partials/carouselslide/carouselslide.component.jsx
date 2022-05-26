import styles from "./carouselslide.module.css";
import Image from "next/image";

//https://images.unsplash.com/photo-1628102491629-778571d893a3?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2080

//https://images.unsplash.com/photo-1615486171815-2611a6e3cd02?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880

function CarouselSlide({ header, subheader, picture }) {
  return (
    <div className={styles.slidewrapper}>
      <div className={styles.textwrapper}>
        <h2 className={styles.title}>{header}</h2>
        <p className={styles.subheading}>{subheader}</p>
      </div>
      <div className={styles.image}>
        <Image
          src={picture}
          alt="A promotional picture"
          width={750}
          height={600}
        />
      </div>
    </div>
  );
}

export default CarouselSlide;
