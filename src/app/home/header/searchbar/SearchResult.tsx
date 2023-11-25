/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import SmoothCollapse from "react-smooth-collapse";

interface SearchResultProps {
  meta: {icon: string; name: string};
  wallets: {
    icon: string;
    name: string;
    token: string;
  }[];
}

function SearchResult(props: SearchResultProps) {
  const {meta, wallets} = props;

  const [isOpen, setIsOpen] = React.useState(true);
  const toggle = () => setIsOpen((v) => !v);

  return (
    <div className="">
      <div
        className="flex gap-3 items-center justify-between py-2.5"
        role="button"
        onClick={toggle}
      >
        <div className="flex gap-3 items-center">
          <div className="flex-shrink-0">
            <img className="w-6 h-6" src={meta.icon} alt="" />
          </div>
          <div className="text-md text-white">{meta.name}</div>
        </div>
        <div className="pr-3">
          <img
            className={`duration-200 ${isOpen ? "" : "rotate-180"}`}
            src="/images/Group 79 (1).svg"
            alt=""
          />
        </div>
      </div>
      <SmoothCollapse expanded={isOpen}>
        <div className="flex flex-col gap-1">
          {wallets.map(({icon, name, token}, index) => (
            <div
              role="button"
              key={index}
              className="flex gap-3 items-center justify-between bg-stone-800/5 py-3 px-4 rounded-md"
            >
              <div className="flex gap-3 items-center">
                <div>
                  <img className="rounded-md" src={icon} alt="" />
                </div>
                <div className="text-md text-white">
                  <p className="font-medium mb-1">{name}</p>
                  <p>{token}</p>
                </div>
              </div>
              <div>
                <img className="w-6 h-6" src={meta.icon} alt="" />
              </div>
            </div>
          ))}
        </div>
      </SmoothCollapse>
    </div>
  );
}

export default SearchResult;
