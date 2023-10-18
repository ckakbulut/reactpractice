import React from "react";

function GettingStarted() {
  return (
    <div class="h-[320px] bg-[#353875] flex flex-row ">
      <div class="flex flex-col justify-center w-3/4 text-left pl-12">
        <p class="text-white text-[24px] font-bold ">Get started now</p>
        <p class="text-white text-[16px]">
          You can easily set up your chat groups by downloading the application.
        </p>
      </div>
      <div class="text-center justify-center w-3/4 flex flex-col items-center">
        <button class="bg-white text-[#353A75] w-1/2  by-2 font-bold p-2 rounded-lg">
          Download
        </button>
      </div>
    </div>
  );
}

export default GettingStarted;
