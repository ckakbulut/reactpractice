import React from "react";
import logo from "../svg/logo.svg";

function CovchatLogo() {
  return (
    <header class="flex flex-row mt-8 mb-2 gap-x-4">
      <img src={logo} alt="logo" />
      <h1 class="text-[32px] font-bold bg-gradient-to-r from-[#949BF0] to-[#D1D5FF] text-transparent bg-clip-text">
        CovChat
      </h1>
    </header>
  );
}

export default CovchatLogo;
