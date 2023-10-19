import React from "react";

// can use text to substitute the text in the panel
function InfoPanel({ title, text }) {
  return (
    <div class="rounded-lg flex flex-col bg-[#353A75] w-[350px] h-[196px]">
      <div class="flex flex-row ">
        <div class="rounded-lg w-[8px] h-[32px] bg-[#009FFF] ml-4 mt-4"></div>
        <p class="text-[24px] text-white pl-4 mt-3">{title}</p>
      </div>
      <p class="text-[16px] text-white text-left ml-4 mt-4">
        In pulvinar tincidunt nisi vel pretium. Morbi placerat dui sollicitudin
        massa volutpat, ut rhoncus nulla viverra.
      </p>
    </div>
  );
}

export default InfoPanel;
