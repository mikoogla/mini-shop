import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addProduct, removeProduct } from "../../store/index.js";
import Product from "../Product/Product";
import Card from "../UI/Card/Card";
import styles from "./Content.module.css";
export default function Content() {
  const products = useSelector((state) => state.products.products);
  const cart = useSelector((state) => state.cart.products);
  const cartSize = useSelector((state) => state.cart.products.length);
  const dispatch = useDispatch();
  return (
    <div className={styles.main}>
      <Card className={styles.content}>
        {cartSize > 0 ? (
          cart.map((product) => (
            <Product key={product.id} product={product}>
              {product.name}
            </Product>
          ))
        ) : (
          <h2>The Cart is empty</h2>
        )}
      </Card>

      <Card className={styles.content}>
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </Card>
    </div>
  );
}
