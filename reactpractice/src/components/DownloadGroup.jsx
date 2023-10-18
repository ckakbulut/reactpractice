import React from "react";
import DownloadLogo from "../download.svg";
import GooglePlayLogo from "../googleplay.svg";
import AppStoreLogo from "../appstore.svg";

function DownloadGroup() {
  return (
    <div class="flex flex-col">
      <div class="flex flex-row justify-around ">
        <img src={DownloadLogo} />
        <div class="text-white text-[24px]">Download Now</div>
      </div>
      <div>
        <img src={GooglePlayLogo} />
        <br />
        <img src={AppStoreLogo} />
      </div>
    </div>
  );
}

export default DownloadGroup;
