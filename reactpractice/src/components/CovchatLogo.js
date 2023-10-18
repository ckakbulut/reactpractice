import React from "react";
import logo from "../logo.svg";

function CovchatLogo() {
  return (
    <header class="flex flex-row pt-8 pb-2">
      <img src={logo} alt="logo" />
      <h1 class="text-[32px] font-bold bg-gradient-to-r from-[#949BF0] to-[#D1D5FF] text-transparent bg-clip-text">
        CovChat
      </h1>
    </header>
  );
}

export default CovchatLogo;
