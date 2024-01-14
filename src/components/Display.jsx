import React from "react";
import styles from "./Display.module.css";

function Display({ displayValue }) {
  return (
    <input
      placeholder="Enter number"
      className={styles.display}
      type="text"
      value={displayValue}
      readOnly
    />
  );
}

export default Display;
