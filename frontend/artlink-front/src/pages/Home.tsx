// import React, { useState } from "react";
// import { Link } from "react-router-dom";
import Header from "../layout/Header/Header";
import Footer from "../layout/Footer/Footer";

import "./Home.css";

import HomeGallery from "./HomeWho/HomeGallery";
import HomeUser from "./HomeWho/HomeUser";
import HomeManager from "./HomeWho/HomeManager";

function Homepage() {
  const isLoggedIn = true;
  // eslint-disable-next-line prefer-const
  let whoareyou = "gallery";
  let render_component;

  if (isLoggedIn) {
    if (whoareyou === "manager") {
      render_component = <HomeManager />;
    } else if (whoareyou === "user") {
      render_component = <HomeUser />;
    } else if (whoareyou === "gallery") {
      render_component = <HomeGallery />;
    }
  } else {
    render_component = <button>로그인 하세요</button>;
  }

  return (
    <>
      {/* Header */}
      <Header />
      {/* Body */}
      {render_component}
      {/* Footer */}
      <Footer />
    </>
  );
}

export default Homepage;
