import IconButton from "@/components/common/IconButton";
import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <nav className="pt-6 mb-11 px-6 relative z-[1020]">
      <div className="flex justify-between items-center">
        <Link href="/">
          <img src="/images/Group 48.svg" alt="" />
        </Link>
        <div className="flex gap-2 items-center">
          <div
            role="button"
            className="text-md font-medium hover:bg-white/10 duration-200 text-white py-1.5 px-4 bg-black rounded-md"
          >
            Connect Wallet
          </div>
          <div>
            <IconButton icon="/images/dots-horizontal.svg" />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
