import React from "react";
import CovchatLogo from "./CovchatLogo";
import DownloadGroup from "./DownloadGroup";
import Platforms from "./Platforms";
import Information from "./Information";
import Contact from "./Contact";

function Footer() {
  return (
    <div class="flex flex-row justify-around bg-[#181436] w-full h-[647px]">
      <div class="flex flex-col space-y-8">
        <CovchatLogo />
        <DownloadGroup />
      </div>
      <div class="flex flex-col pt-[138px]">
        <Platforms />
      </div>
      <div class="flex flex-col pt-[138px]">
        <Information />
      </div>
      <div class="flex flex-col pt-[138px]">
        <Contact />
      </div>
    </div>
  );
}

export default Footer;
