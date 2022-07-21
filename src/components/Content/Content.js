import React from "react";
import Product from "../Product/Product";
import Card from "../UI/Card/Card";
import styles from "./Content.module.css";
export default function Content() {
  return (
    <div className={styles.main}>
      <Card className={styles.content}>
        <Product>just product</Product>
        <Product>just large long product</Product>
        <Product>just product</Product>
        <Product>1dwefeqwf3erf23fq432433qef2f</Product>
        <Product>just product</Product>
        <Product>just product</Product>
      </Card>
      <Card className={styles.content}>Products</Card>
    </div>
  );
}
