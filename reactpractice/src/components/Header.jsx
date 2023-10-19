import React from "react";
import Appstore from "../svg/appstore.svg";
import Googleplay from "../svg/googleplay.svg";
import Desktopdownload from "../svg/desktopdownload.svg";
import CovchatLogo from "./CovchatLogo";
import Prodisplay from "../svg/prodisplay.svg";
import Iphone from "../svg/iphone.svg";
import InfoPanel from "./InfoPanel";

function Header() {
  return (
    <>
      <div class="bg-[#181436] rounded-br-[75px] rounded-bl-[75px] h-[750px]">
        <div class="flex flex-row justify-around">
          <CovchatLogo />
          <button class="bg-[#27DA52] text-white w-[228px] h-[64px] mt-8 mb-4 by-2 font-bold p-2 rounded-lg ml-80">
            Register
          </button>
        </div>
        <div>
          <p class="text-white font-bold text-[48px] text-center">
            Nullam gravida <a class="text-[#61B1E1]">dabipus ipsum</a> ac semper
          </p>
          <p class="w-3/5 m-auto text-[#CAC8E3] text-[28px] text-center flex justify-center items-center opacity-75">
            Nam et risus sed felis auctor tincidunt. Nunc dignissim non ex sit
            amet porta. Vestibulum nibh odio, tempor at arcu ut, condimentum
            tincidunt odio.
          </p>
        </div>
        <div class="flex flex-row justify-center space-x-8 pt-20 pb-4">
          <img src={Desktopdownload} />
          <img src={Appstore} />
          <img src={Googleplay} />
        </div>
      </div>
      <div class="bg-white flex flex-col relative h-[1100px] items-center justify-end ">
        <img
          class="items-center absolute left-60 top-[-300px]"
          src={Prodisplay}
        />
        <img class="absolute right-52 top-[-110px]" src={Iphone} />
        <>
          <p class="text-[#353A75] text-[40px] top-1/2">
            <a class="text-[#009FFF]">Covchat</a> what it offers for you
          </p>
          <p class="mt-8 text-[20px] text-[#9C9FC1] w-[960px] text-center">
            For better and higher quality use, covchat offers you unique
            features. It continues to improve and improves your usage quality.
          </p>
          <div class="flex flex-row mt-12 mb-32 space-x-4">
            <InfoPanel title="Trustworthy" />
            <InfoPanel title="Fast" />
            <InfoPanel title="Current" />
            <InfoPanel title="Economical" />
          </div>
        </>
      </div>
    </>
  );
}

export default Header;
