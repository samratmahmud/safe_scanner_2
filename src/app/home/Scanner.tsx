import React from "react";

function Scanner() {
  return (
    <section className="container mb-11">
      <div className="lg:text-3xl text-2xl font-bold text-white max-w-[1000px] m-auto text-center mb-11">
        Super User-friendly Transaction Explorer for the Safe Eco-system
      </div>
      <div className="flex justify-center mb-2">
        <div className="border-l-2 border-y-2 rounded-s-md border-emerald-400">
          <img
            className="py-4 pr-2 pl-4 bg-emerald-900"
            src="/images/Group 50.svg"
            alt=""
          />
        </div>
        <input
          className="bg-emerald-900 md:w-3/4 w-full focus:outline-none border-y-2 border-r-2 rounded-r-md border-emerald-400 placeholder:text-neutral-400 pr-4"
          type="text"
          placeholder="Search for addresses & hashes..."
        />
      </div>
      <div className="flex items-center gap-2 justify-center">
        <div className="text-md text-neutral-400 py-0.5">
          Scanner Network Status:
        </div>
        <div className="flex items-center gap-1">
          <span>
            <img className="py-0.5" src="/images/Group 51.svg" alt="" />
          </span>
          <span className="text-md text-emerald-400">Available</span>
        </div>
      </div>
    </section>
  );
}

export default Scanner;
