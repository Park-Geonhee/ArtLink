// import React from 'react'
import styles from "./SignUp.module.css";

// 회원 가입 화면
function SignUp() {
  return (
    <>
      <div className={styles.container}>
        <h1>Sign Up</h1>
        <input type="text" placeholder="아이디" />
        <input type="password" placeholder="비밀번호" />
        <input type="password" placeholder="비밀번호 확인" />
        <input type="email" placeholder="e-mail" />
        <button type="submit">가입</button>
      </div>
    </>
  );
}

export default SignUp;
