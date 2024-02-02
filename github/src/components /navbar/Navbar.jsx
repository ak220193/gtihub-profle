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
      </div>
    </>
  );
};

export default Navbar;
