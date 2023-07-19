// import React from "react";
import styles from "./EntranceLogo.module.css";
import Art from "../../assets/Art.png";
import Link from "../../assets/Link.png";

function EntranceLogo() {
  return (
    <div className={styles.logo}>
      <img src={Art} alt="Art" />
      <img src={Link} alt="Link" />
    </div>
  );
}

export default EntranceLogo;
