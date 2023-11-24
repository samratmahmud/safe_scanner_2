import React from "react";

interface buttons {
  thumbneil: string;
  name: string;
  theme?: "dark" | "green";
}

function Buttons(props: buttons) {
  const {thumbneil, name, theme = "dark"} = props;
  return (
    <div
      role="button"
      className={`flex items-center justify-center gap-2 py-2.5 px-6 ${
        theme === "dark"
          ? "border-[2px] border-emerald-400 rounded-md"
          : "bg-emerald-400 rounded-md"
      }`}
    >
      <div>
        <img src={thumbneil} alt="" />
      </div>
      <div className="text-base font-medium text-white">{name}</div>
    </div>
  );
}

export default Buttons;
