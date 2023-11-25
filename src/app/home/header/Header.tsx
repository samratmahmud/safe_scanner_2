import SearchStutasBar from "@/components/common/SearchStutasBar";
import React from "react";
import Searchbar from "./searchbar/Searchbar";

function Header() {
  return (
    <section className="container mb-32">
      <div className="flex justify-center mb-2">
        <img src="/images/Group 50.svg" alt="" />
      </div>
      <div className="lg:text-base tracking-normal text-2xl text-neutral-400 text-center mb-8">
        Super User-friendly Transaction Explorer for the Safe Eco-system
      </div>
      <Searchbar />
      <div className="flex items-center justify-between gap-1 max-w-4xl m-auto w-full">
        <div>
          <SearchStutasBar
            describe="Scanner Network Status"
            icon="/images/checkbox-marked-circle-outline 1.svg"
            status="Available"
          />
        </div>
        <div>
          <SearchStutasBar
            describe="Total Safe Transactions"
            icon="/images/Group 51 (1).svg"
            status="33 013 011"
          />
        </div>
      </div>
    </section>
  );
}

export default Header;
