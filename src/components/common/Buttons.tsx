/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";

interface ButtonProps {
  thumbneil: string;
  name: string;
  variant?: "contained" | "outlined";
  href?: string;
}

function Button(props: ButtonProps) {
  const {thumbneil, name = "dark", variant = "contained", href} = props;

  let variantClasses: string[] = [];
  if (variant === "outlined") {
    variantClasses = [
      "border-2",
      "border-primary-500",
      "text-primary-500 hover:bg-primary-500/10",
      "py-2.5",
    ];
  }
  if (variant === "contained") {
    variantClasses = [
      "bg-primary-500",
      "py-3",
      "hover:bg-primary-500/90",
      "text-white",
    ];
  }

  let RenderComp: any = Link;

  if (href) {
    RenderComp = Link;
  } else if (!href) {
    RenderComp = "div";
  }

  return (
    <RenderComp
      role="button"
      className={`flex items-center justify-center gap-2 px-6 rounded-md duration-200 focus:scale-95 ${variantClasses.join(
        " "
      )}`}
      tabIndex={-1}
      {...(href ? {href} : {})}
    >
      <div>
        <img src={thumbneil} alt="" />
      </div>
      <div className="text-base tracking-normal font-medium text-white">
        {name}
      </div>
    </RenderComp>
  );
}

export default Button;
