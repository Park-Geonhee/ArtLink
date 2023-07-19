// import React from 'react';
import BigButton from "../../commponents/Base/BigButton";
import MainLogo from "../../commponents/Base/MainLogo";

function HomeGallery() {
  return (
    <>
      <MainLogo />
      <h3>HomeGallery</h3>
      <div className="BigBtnBox2">
        <BigButton tabName={"Artwork Manager"} />
        <BigButton tabName={"My Page"} />
      </div>
    </>
  );
}
export default HomeGallery;
