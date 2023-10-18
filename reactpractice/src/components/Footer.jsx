import React from "react";
import CovchatLogo from "./CovchatLogo";
import DownloadGroup from "./DownloadGroup";
import Platforms from "./Platforms";
import Information from "./Information";
import Contact from "./Contact";

function Footer() {
  return (
    <div class="flex flex-row justify-around bg-[#181436] w-full h-[647px]">
      <div class="flex flex-col justify-center gap-y-8">
        <CovchatLogo />
        <DownloadGroup />
      </div>
      <div class="flex flex-col justify-center">
        <Platforms />
      </div>
      <div class="flex flex-col justify-center">
        <Information />
      </div>
      <div class="flex flex-col justify-center">
        <Contact />
      </div>
    </div>
  );
}

export default Footer;
