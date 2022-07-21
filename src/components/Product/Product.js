import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addProduct, removeProduct } from "../../store/index.js";
import styles from "./Product.module.css";
import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";

export default function Product(props) {
  const dispatch = useDispatch();
  const addProductHandler = () => {
    dispatch(addProduct({ product: props.product }));
  };
  const removeProductHandler = () => {
    dispatch(removeProduct({ product: props.product }));
  };
  return (
    <Card {...props} className={styles.main}>
      Name: {props.product.name}, <br />
      Price: {props.product.price.toFixed(2)}, <br />
      Description: {props.product.description}
      <div className={styles.buttonsContainer}>
        <Button className={styles.button} onClick={addProductHandler}>
          Add
        </Button>
        <Button className={styles.button} onClick={removeProductHandler}>
          Remove
        </Button>
      </div>
    </Card>
  );
}
