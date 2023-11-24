import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <nav className="pt-8 mb-11 px-6">
      <div className="flex justify-between items-center">
        <Link href="/">
          <img src="/images/Group 48.svg" alt="" />
        </Link>
        <div className="flex gap-2 items-center">
          <div
            role="button"
            className="text-md font-medium text-white py-1.5 px-4 bg-black rounded-md tracking-normal hover:bg-stone-900 duration-300"
          >
            Connect Wallet
          </div>
          <div
            role="button"
            className="p-1.5 bg-slate-300/[15%] hover:bg-gray-800 duration-300 rounded-md"
          >
            <img src="/images/dots-horizontal.svg" alt="" />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
