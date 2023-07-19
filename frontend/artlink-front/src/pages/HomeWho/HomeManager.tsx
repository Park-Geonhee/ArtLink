// import React from 'react';
import BigButton from "../../commponents/Base/BigButton";
import MainLogo from "../../commponents/Base/MainLogo";

function HomeManager() {
  return (
    <>
      <MainLogo />
      <h3>HomeManager</h3>
      <div className="BigBtnBox2">
        <BigButton tabName={"User Manage"} />
        <BigButton tabName={"Gallery Manage"} />
      </div>
    </>
  );
}
export default HomeManager;
