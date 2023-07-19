// import React from 'react'
import Styles from "./BigButton.module.css";

interface Props {
  tabName: string;
}

const BigButton: React.FC<Props> = ({ tabName }) => {
  return (
    <>
      <div className={Styles.BigBtn}>
        <h1>BigButton</h1>
        {tabName}
      </div>
    </>
  );
};

export default BigButton;
