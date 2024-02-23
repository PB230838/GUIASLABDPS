// Form.jsx
import React, { useState } from "react";
import ShoppingItem from "./ShoppingItem";
import styles from "../app/page.module.css";

const Form = () => {
  const [item, setItem] = useState({
    name: "",
    brand: "",
    quantity: "",
    price: ""
  });
  const [items, setItems] = useState([]);

  const handleChange = (e) =>
    setItem({ ...item, [e.target.name]: e.target.value });

  const handleClick = (e) => {
    e.preventDefault();
    if (
      Object.values(item).some((value) => value.trim() === "")
    ) {
      alert("Por favor completa todos los campos");
      return;
    }
    setItems([...items, item]);
    setItem({ name: "", brand: "", quantity: "", price: "" });
  };

  const deleteItem = (index) => {
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
  };

  return (
    <>
      <form onSubmit={(e) => e.preventDefault()}>
        <label>Nombre del producto:</label>
        <input
          className={styles.form_input}
          type="text"
          name="name"
          value={item.name}
          onChange={handleChange}
        />
        <label>Marca:</label>
        <input
          className={styles.form_input}
          type="text"
          name="brand"
          value={item.brand}
          onChange={handleChange}
        />
        <label>Cantidad:</label>
        <input
          className={styles.form_input}
          type="text"
          name="quantity"
          value={item.quantity}
          onChange={handleChange}
        />
        <label>Precio:</label>
        <input
          className={styles.form_input}
          type="text"
          name="price"
          value={item.price}
          onChange={handleChange}
        />
        <button className={styles.form_button} onClick={handleClick}>
          Agregar
        </button>
      </form>
      {items.map((item, index) => (
        <ShoppingItem
          key={index}
          item={item}
          index={index}
          deleteItem={deleteItem}
        />
      ))}
    </>
  );
};

export default Form;
