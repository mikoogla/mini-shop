import React from "react";
import Button from "../UI/Button/Button";
import styles from "./Navbar.module.css";
import { useSelector, useDispatch } from "react-redux";
import { toggleCart } from "../../store/index.js";

export default function Navbar() {
  const dispatch = useDispatch();
  const cartSize = useSelector((state) => state.cart.size);
  return (
    <div className={styles.main}>
      Navbar
      <Button
        onClick={() => {
          dispatch(toggleCart());
        }}
        className={styles.button}
      >
        Cart {cartSize}
      </Button>
    </div>
  );
}
