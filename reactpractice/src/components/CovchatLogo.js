import React from "react";
import logo from "../logo.svg";

function CovchatLogo() {
  return (
    <header className="covchat-logo" class="flex flex-row">
      <img src={logo} className="covchat-logo" alt="logo" />
      <h1 class="text-[32px] font-bold bg-gradient-to-r from-[#949BF0] to-[#D1D5FF] text-transparent bg-clip-text">
        CovChat
      </h1>
    </header>
  );
}

export default CovchatLogo;
