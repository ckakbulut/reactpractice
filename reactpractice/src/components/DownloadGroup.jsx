import React from "react";
import DownloadLogo from "../svg/download.svg";
import GooglePlayLogo from "../svg/googleplay.svg";
import AppStoreLogo from "../svg/appstore.svg";

function DownloadGroup() {
  return (
    <div class="flex flex-col pt-2">
      <div class="flex flex-row justify-around pb-8 ">
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
