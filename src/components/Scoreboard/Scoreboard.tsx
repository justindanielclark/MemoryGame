import React from "react";
import PropsType from "./_types_Scoreboard";
import TailwindSVG from "../../assets/TailwindLogo.svg";

function Scoreboard({ current, best }: PropsType) {
  return (
    <header className="flex flex-row select-none bg-neutral-200 flex-initial">
      <div className="flex-1 border-r-2 border-r-slate-800 p-5">
        <img src={TailwindSVG} alt="Tailwind Logo" className="w-fit" />
      </div>
      <div className="flex-1 flex justify-center items-center flex-col">
        <p className="text-3xl">Current: {current}</p>
        <p className="text-3xl">Best: {best}</p>
      </div>
    </header>
  );
}

export default Scoreboard;
