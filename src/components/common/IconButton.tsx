/* eslint-disable @next/next/no-img-element */
import React from "react";

interface IconButtonProps {
  icon: string;
}

function IconButton(props: IconButtonProps) {
  const {icon} = props;

  return (
    <div
      role="button"
      className="p-1.5 hover:bg-white/10 duration-200 bg-gray-300/[15%] rounded-md"
    >
      <img src={icon} alt="" />
    </div>
  );
}

export default IconButton;
