import styles from "./topribbon.module.css";

const ribbonButtons = [
  {
    buttonName: "Sign in",
    buttonPath: "/",
  },
  {
    buttonName: "Store Locator",
    buttonPath: "/",
  },
  {
    buttonName: "Contact Us",
    buttonPath: "/",
  },
  {
    buttonName: "Help",
    buttonPath: "/",
  },
  {
    buttonName: "My Account",
    buttonPath: "/",
  },
];

function TopRibbon() {
  return (
    <div className={styles.ribbonwrapper}>
      {ribbonButtons.map((item, index) => {
        return (
          <h1 key={index} className={styles.ribbonitem}>
            {item.buttonName}
          </h1>
        );
      })}
    </div>
  );
}

export default TopRibbon;
