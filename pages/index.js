import styles from "../styles/Home.module.css";
import Greeter from "../components/greeter/greeter.component";
import Carousel from "../components/carousel/carousel.component";
import ServiceRibbon from "../components/serviceribbon/serviceribbon";
import SeasonalRibbon from "../components/seasonalribbon/seasonalribbon.component";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <ServiceRibbon />
        <Greeter />
        <Carousel />
        <SeasonalRibbon />
      </div>
    </div>
  );
}
