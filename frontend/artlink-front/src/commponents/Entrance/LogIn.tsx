// import React from 'react'
import styles from "./LogIn.module.css";

// 로그인 화면
function LogIn() {
  return (
    <div className={styles.container}>
      <h1>Log In</h1>
      <input type="text" placeholder="아이디" />
        <input type="password" placeholder="비밀번호" />
      <a href="">아이디/비밀번호를 잊어버리셨나요?</a>
      {/* <a href="">Did you forget ID/Password?</a> */}
      <div className={styles["button-wrapper"]}>
        <button>회원 가입</button>
        {/* <button>Sign up</button> */}
        <button type="submit">로그인</button>
        {/* <button type="submit">Log In</button> */}
      </div>
    </div>
  );
}

export default LogIn;
