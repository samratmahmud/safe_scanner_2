/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import SearchResult from "./SearchResult";

const results = [
  {
    meta: {
      icon: "/images/chip (1).svg",
      name: "Ethereum Mainnet",
    },
    wallets: [
      {
        icon: "/images/Group 69.svg",
        name: "WalletName",
        token: "matic:0x27ce...857e",
      },
      {
        icon: "/images/Group 69.svg",
        name: "WalletName",
        token: "matic:0x27ce...857e",
      },
    ],
  },
  {
    meta: {
      icon: "/images/chip (2).svg",
      name: "Ethereum Mainnet",
    },

    wallets: [
      {
        icon: "/images/Group 69.svg",
        name: "WalletName",
        token: "matic:0x27ce...857e",
      },
    ],
  },
  {
    meta: {
      icon: "/images/Group 77.svg",
      name: "Ethereum Mainnet",
    },
    wallets: [
      {
        icon: "/images/Group 69.svg",
        name: "WalletName",
        token: "matic:0x27ce...857e",
      },
    ],
  },
];

function SearchPanel() {
  return (
    <div className="absolute left-0 right-0">
      <div className="bg-slate-900 border-2 md:border-white border-gray-400 rounded-md p-4 w-full m-auto">
        {results.map(({meta, wallets}, index) => (
          <SearchResult meta={meta} wallets={wallets} key={index} />
        ))}
      </div>
    </div>
  );
}

export default SearchPanel;
