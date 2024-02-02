import React from "react";
import styles from "./main.module.css";
import { RiUserSearchLine } from "react-icons/ri";

const main = () => {
  return (
    <div className={styles.main}>
      <div className={styles.box}>
        <form>
          <input type="text" placeholder="Search" />
          <button type="submit">
            <RiUserSearchLine />
          </button>
        </form>
      </div>
    </div>
  );
};

export default main;
