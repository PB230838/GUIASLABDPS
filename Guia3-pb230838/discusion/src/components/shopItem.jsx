
import React from "react";
import styles from "../app/page.module.css";

const ShoppingItem = ({ item, index, deleteItem }) => {
  return (
    <div className={styles.list} key={index}>
      <h3 className="Titulo 3">Nombre: {item.name}</h3>
      <p>Marca: {item.brand}</p>
      <p>Cantidad: {item.quantity}</p>
      <p>Precio: {item.price}</p>
      <button className={styles.btn_delete} onClick={() => deleteItem(index)}>
        X
      </button>
    </div>
  );
};

export default ShoppingItem;
