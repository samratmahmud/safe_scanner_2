/* eslint-disable @next/next/no-img-element */
"use client";
import SearchPanel from "./SearchPanel";
import React from "react";
import {Transition} from "@headlessui/react";
import ReactVisibilitySensor from "react-visibility-sensor";

function Searchbar() {
  const [searchOpen, setSearchOpen] = React.useState(false);
  const [search, setSearch] = React.useState("");
  const [visibility, setVisibility] = React.useState(false);

  const handleSearchFocus = (v: boolean) => {
    setSearchOpen(v);
  };

  function handleVisibility(isVisible: boolean) {
    if (!isVisible) {
      setSearchOpen(false);
      setVisibility(searchOpen);
    } else if (visibility) {
      setSearchOpen(visibility);
    }
  }

  return (
    <div className="relative z-10">
      <ReactVisibilitySensor onChange={handleVisibility}>
        <div className="z-10 max-w-4xl m-auto w-full relative">
          <div
            className={`flex justify-center mb-2 items-center border-2 rounded-md h-14 px-2 ${
              searchOpen ? "border-primary-400" : "border-primary-900"
            }`}
            aria-label="Search bar"
            onFocus={() => handleSearchFocus(true)}
          >
            <label
              htmlFor="search"
              className="translate-y-0.5 h-full flex items-center px-2 flex-shrink-0"
              role="button"
            >
              <img className="" src="/images/Vector.svg" alt="" />
            </label>
            <input
              id="search"
              className="bg-transparent h-full w-full font-comic-sans-ms text-white placeholder:text-neutral-400 caret-primary-400"
              type="text"
              placeholder="Search for addresses & hashes..."
              autoComplete="off"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            {searchOpen && search && (
              <div
                role="button"
                aria-label="clear search value"
                className="px-2 h-full flex items-center flex-shrink-0"
                onClick={() => setSearch("")}
              >
                <img src="/images/close.svg" alt="clear" />
              </div>
            )}
          </div>
          <Transition
            enter="transition duration-100 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
            show={searchOpen}
            as="div"
          >
            <SearchPanel />
          </Transition>
        </div>
      </ReactVisibilitySensor>
      <div
        onClick={() => handleSearchFocus(false)}
        className="fixed top-0 left-0 right-0 h-full bottom-0 -z-10"
        style={{
          backgroundImage: `linear-gradient(transparent 30%, black 70%)`,
          display: searchOpen ? "block" : "none",
        }}
      />
    </div>
  );
}

export default Searchbar;
