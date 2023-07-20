// import React from 'react';
import styles from "./ExhibitionTable.module.css";
import Mona from "../../assets/모나리자.jpg";
import Perl from "../../assets/진주귀걸이.jpg";

// 관람한 전시회 목록에 띄워질 박스
// 전시회의 작품 목록이 썸네일로 쓰임.

/*
사진 서버에서 불러오는 코드
*/

function ExhibitionTable() {
  return (
    <>
      <div className={styles.container}>
        <h1>ExhibitionTable</h1>
        <div className={styles["img-wrapper"]}>
          <img src={Mona} alt="모나리자" />
          <img src={Perl} alt="진주귀걸이" />
        </div>
      </div>
    </>
  );
}
export default ExhibitionTable;
