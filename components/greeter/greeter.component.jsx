import { useState, useEffect } from "react";
import styles from "./greeter.module.css";

function Greeter() {
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    const date = new Date();
    const hour = date.getHours();

    if (hour >= 6 && hour < 12) {
      return setGreeting("Good Morning");
    }
    if (hour >= 12 && hour < 18) {
      return setGreeting("Good Afternoon");
    }
    if (hour >= 18) {
      return setGreeting("Good Evening");
    }
  }, []);

  return (
    <>
      <h1 className={styles.header}>{greeting}</h1>
      <p className={styles.subtext}>
        <a className={styles.link}>Sign in</a> for the best experience. Not a
        customer yet? <a className={styles.link}>Register</a>
      </p>
    </>
  );
}

export default Greeter;
