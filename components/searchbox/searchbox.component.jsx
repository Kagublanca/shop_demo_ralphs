import styles from "./searchbox.module.css";
import { useState } from "react";
import Router from "next/router";

function SearchBox() {
  const [input, setInput] = useState("");

  function handleChange(e) {
    setInput(e.target.value);
  }

  function handleDeleteInput() {
    setInput("");
  }

  async function handleSubmit(e) {
    e.preventDefault();
    Router.push(`/groceries/search/?query=${input}`);
    setInput("");
  }

  return (
    <div className={styles.searchboxwrapper}>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Search"
          value={input}
          onChange={handleChange}
          className={styles.basestylesinput}
          id={styles.inputbox}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSubmit(e);
            }
          }}
        />
        {input ? (
          <button onClick={handleDeleteInput} className={styles.cancelbutton}>
            X
          </button>
        ) : null}
        <button className={styles.searchbutton} type="submit"></button>
      </form>
    </div>
  );
}

export default SearchBox;
