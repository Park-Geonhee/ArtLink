// import React from 'react';
import styles from "./ArtworkBox.module.css";
import Mona from "../../assets/모나리자.jpg";

// 내가 저장한 작품의 정보를 보여주는 컴포넌트
// MyRecordBox 컴포넌트 내에 들어간다.

/*
작품 별 메모 불러오는 코드
*/

const memo = "모나리자";

function ArtworkBox() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles["img-box"]}>
          <img src={Mona} alt="모나리자" />
        </div>
        <div className={styles.text}>
          {memo}
          <button>Edit</button>
        </div>
      </div>
    </>
  );
}
export default ArtworkBox;
