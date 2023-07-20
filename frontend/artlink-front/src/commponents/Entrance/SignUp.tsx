// import React from 'react'
import styles from "./SignUp.module.css";

// 회원 가입 화면
function SignUp() {
  return (
    <>
      <div className={styles.container}>
        <h1>LogIn</h1>
        <input type="text" placeholder="ID" />
        <input type="text" placeholder="Password" />
        <a href="">아이디/비밀번호를 잊어버리셨나요?</a>
        {/* <a href="">Did you forget ID/Password?</a> */}
        <div className={styles["button-wrapper"]}>
          <button>회원 가입</button>
          {/* <button>Sign up</button> */}
          <button>로그인</button>
          {/* <button>Log in</button> */}
        </div>
      </div>
    </>
  );
}

export default SignUp;
