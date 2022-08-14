import React from "react";
import { useSelector } from "react-redux";
import Product from "../../Product/Product";
import Card from "../../UI/Card/Card";
import styles from "./Cart.module.css";

export default function Cart() {
  const cart = useSelector((state) => state.cart.products);
  const cartSize = useSelector((state) => state.cart.size);
  const isHidden = useSelector((state) => state.cart.hide);
  return (
    <>
      {" "}
      {!isHidden && (
        <Card className={styles.cart}>
          {cartSize > 0 ? (
            cart.map((product) => (
              <Product key={product.id} product={product}></Product>
            ))
          ) : (
            <div>
              <h2>The Cart is empty</h2>
              <h3>Add your first item</h3>
            </div>
          )}
        </Card>
      )}
    </>
  );
}
