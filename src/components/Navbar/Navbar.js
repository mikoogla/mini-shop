import React from "react";
import Button from "../UI/Button/Button";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <div className={styles.main}>
      Navbar
      <Button className={styles.button}>Log In</Button>
    </div>
  );
}
