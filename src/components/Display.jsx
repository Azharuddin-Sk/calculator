import React from "react";
import styles from "./Display.module.css";

const Display = ({ displayValue }) => {
  return (
    <input
      placeholder="Enter number"
      className={styles.display}
      type="text"
      value={displayValue}
      readOnly
    />
  );
};

export default Display;
