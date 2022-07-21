import React from "react";
import Card from "../UI/Card/Card";
import styles from "./Content.module.css";
export default function Content() {
  return (
    <div className={styles.main}>
      <Card className={styles.content}>Cart</Card>
      <Card className={styles.content}>Products</Card>
    </div>
  );
}
