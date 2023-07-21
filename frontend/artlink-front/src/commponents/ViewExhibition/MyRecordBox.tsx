// import React from 'react';
import styles from "./MyRecordBox.module.css";
import AB from "./ArtworkBox";

/*
정보 및 작품 컴포넌트 가져오는 코드
*/

const year = 2023;
const month = 7;
const day = 17;

// 내가 저장한 작품들을 보여주는 컴포넌트
function MyRecordBox() {
  return (
    <>
      <div className={styles.container}>
        <h1>MyRecordBox</h1>
        <div>
          Date: {year}.{month}.{day}
        </div>
        <div className={styles["artwork-container"]}>
          <AB />
          <AB />
          <AB />
        </div>
      </div>
    </>
  );
}
export default MyRecordBox;
