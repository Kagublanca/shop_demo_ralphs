import styles from "./carousel.module.css";
import { useState, useEffect } from "react";
import Image from "next/image";
import CarouselSlide from "./_partials/carouselslide/carouselslide.component";

function Carousel() {
  //slide states are 'slideone', 'slidetwo' and 'slidethree'.
  const [slide, setSlide] = useState("slideone");
  const [pause, setPause] = useState(false);

  const sliderAnimation = setInterval(() => {
    if (!pause) {
      handleClick("right");
    }
  }, 5000);

  function handleClick(direction) {
    if (direction == "right" && !pause) {
      switch (slide) {
        case "slideone":
          clearInterval(sliderAnimation);
          return setSlide("slidetwo");
        case "slidetwo":
          clearInterval(sliderAnimation);
          return setSlide("slidethree");
        case "slidethree":
          clearInterval(sliderAnimation);
          return setSlide("slideone");
      }
    }
    if (direction == "left" && !pause) {
      switch (slide) {
        case "slideone":
          return setSlide("slidethree");
        case "slidethree":
          return setSlide("slidetwo");
        case "slidetwo":
          return setSlide("slideone");
      }
    }
  }

  return (
    <div className={styles.carouselwrapper}>
      <div className={styles.slidewrapper} id={styles[slide]}>
        <CarouselSlide
          header={"We want you to spend less with us"}
          subheader={
            "Heres a reminder of how you can spend less on your groceries"
          }
          picture="https://images.unsplash.com/photo-1615486171815-2611a6e3cd02?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880"
        />
        <CarouselSlide
          header={"You might really enjoy these new products"}
          subheader={
            "Our shelves have been packed to the brim with brand new products, exclusive to Ralphs!"
          }
          picture="https://images.unsplash.com/photo-1628102491629-778571d893a3?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2080"
        />
        <CarouselSlide
          header={"Eat healthier this summer"}
          subheader={
            "We always find ways to eat even healthier, and mosey into a better way of living"
          }
          picture="https://images.unsplash.com/photo-1467453678174-768ec283a940?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1444"
        />
      </div>
      <div className={styles.carouselcontrols}>
        <div className={styles.buttonwrapper}>
          <button
            className={styles.bigbutton}
            onClick={() => {
              handleClick("left");
            }}
          ></button>
          <button
            className={styles.smallbutton}
            id={slide == "slideone" ? styles.smallbuttonactive : null}
          ></button>
          <button
            className={styles.smallbutton}
            id={slide == "slidetwo" ? styles.smallbuttonactive : null}
          ></button>
          <button
            className={styles.smallbutton}
            id={slide == "slidethree" ? styles.smallbuttonactive : null}
          ></button>
          <button
            className={styles.bigbutton}
            onClick={() => {
              handleClick("right");
            }}
          ></button>
          <button
            className={styles.bigbutton}
            id={pause ? "paused" : "play"}
            onClick={() => {
              pause ? setPause(false) : setPause(true);
            }}
          ></button>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
