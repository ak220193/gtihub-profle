import React from "react";
import styles from "./Navbar.module.css";
import Logo from "../../Assets/logo.png";

const Navbar = () => {
  return (
    <>
      <div className={styles.Navbar}>
        <div className={styles.logo}>
          <img src={Logo} alt="logo" />
        </div>
        <div className={styles.button}>
          <button> Home </button>
          <button> All Users </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
