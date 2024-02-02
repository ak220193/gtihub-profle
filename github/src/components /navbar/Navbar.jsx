import React from "react";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <>
      <div className={styles.Navbar}>
        <div className={styles.logo}>
          <img src={logo} alt="logo" />
        </div>
      </div>
    </>
  );
};

export default Navbar;
