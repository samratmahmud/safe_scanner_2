import React from "react";

interface searchBarProps {
  describe: string;
  icon: string;
  status: string;
}

function SearchStutasBar(props: searchBarProps) {
  const {describe, icon, status} = props;
  return (
    <div className="flex items-center gap-2 justify-center">
      <div className="text-md text-neutral-400 py-0.5 tracking-normal">
        {describe}
      </div>
      <div className="flex items-center gap-1">
        <span>
          <img className="py-0.5" src={icon} alt="" />
        </span>
        <span className="text-md text-emerald-400">{status}</span>
      </div>
    </div>
  );
}

export default SearchStutasBar;
