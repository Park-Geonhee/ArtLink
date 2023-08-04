// import React from "react";
import { Link } from "react-router-dom";
import BigButton from "../../commponents/Base/BigButton";
import MainLogo from "../../commponents/Base/MainLogo";
import LinkStyle from "./Link.module.css";

function HomeManager() {
  return (
    <>
      <MainLogo />
      <div className="BigBtnBox2">
        {/* Menu : User Manage */}
        <Link to="/user-board" className={LinkStyle.LinkNone}>
          <BigButton tabName={"User Manage"} mini={"Manage your users"} />
        </Link>
        {/* Menu : Gallery Manage */}
        <Link to="/gallery-board" className={LinkStyle.LinkNone}>
          <BigButton
            tabName={"Gallery Manage"}
            mini={"Manage your galleries"}
          />
        </Link>
      </div>
    </>
  );
}
export default HomeManager;
