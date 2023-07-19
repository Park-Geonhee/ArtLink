// import React from "react";
import BigButton from "../../commponents/Base/BigButton";
import MainLogo from "../../commponents/Base/MainLogo";

function HomeUser() {
  return (
    <>
      <MainLogo />
      <h3>HomeUser</h3>
      <div className="BigBtnBox3">
        <BigButton tabName={"Menu 1"} />
        <BigButton tabName={"Menu 2"} />
        <BigButton tabName={"My Page"} />
      </div>
    </>
  );
}
export default HomeUser;
