// Home.js
import React from "react";
import styles from "../app/page.module.css";
import Form from "@/components/Form";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className="App">
        <div>
          <p>Aquí haremos nuestra lista de compras</p>
          <Form />
        </div>
      </div>
    </main>
  );
}
