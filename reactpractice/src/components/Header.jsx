import React from "react";
import Appstore from "../svg/appstore.svg";
import Googleplay from "../svg/googleplay.svg";
import Desktopdownload from "../svg/desktopdownload.svg";
import CovchatLogo from "./CovchatLogo";

function Header() {
  return (
    <div class="bg-[#181436]">
      <div class="flex flex-row justify-center">
        <CovchatLogo />
        <button class="bg-[#27DA52] text-white w-[228px] h-[64px] mt-8 mb-4 by-2 font-bold p-2 rounded-lg ml-80">
          Register
        </button>
      </div>
    </div>
  );
}

export default Header;
