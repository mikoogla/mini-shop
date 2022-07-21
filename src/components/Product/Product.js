import React from "react";
import styles from "./Product.module.css";
import Card from "../UI/Card/Card";

export default function Product(props) {
  return <Card className={styles.main}>{props.children}</Card>;
}
