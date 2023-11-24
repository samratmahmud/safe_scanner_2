import SearchStutasBar from "@/components/common/SearchStutasBar";
import React from "react";

function Scanner() {
  return (
    <section>
      <div className="container mb-32 pt-8">
        <div className="flex justify-center mb-2">
          <img src="/images/Group 50.svg" alt="" />
        </div>
        <div className="lg:text-base text-2xl text-neutral-400  text-center tracking-normal mb-8">
          Super User-friendly Transaction Explorer for the Safe Eco-system
        </div>
        <div className="flex justify-center mb-2">
          <div className="border-l-2 border-y-2 rounded-s-md border-emerald-200 focus:border-emerald-400">
            <img
              className="py-4 pr-2 pl-4 bg-stone-800/5"
              src="/images/Vector.svg"
              alt=""
            />
          </div>
          <input
            className="bg-stone-800/5 md:w-3/4 w-full focus:outline-none border-y-2 border-r-2 rounded-r-md border-emerald-200 focus:border-emerald-400 placeholder:text-neutral-400 pr-4 text-white text-base tracking-normal placeholder:font-comic-sans-ms"
            type="text"
            placeholder="Search for addresses & hashes..."
          />
        </div>
        <div className="flex justify-between md:w-[78%] m-auto">
          <SearchStutasBar
            describe="Scanner Network Status:"
            icon="/images/checkbox-marked-circle-outline 1.svg"
            status="Available"
          />
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

export default Scanner;
