import Buttons from "@/components/common/Buttons";
import Link from "next/link";
import React from "react";

const feedback = [
  {
    title: "MVP offers address search for wallet balance and activity.",
  },
  {
    title: "Smart contract execution history is visible and searchable.",
  },
  {
    title: "Explorer MVP simplifies blockchain analytics for users.",
  },
  {
    title: "Users gain insight into decentralized network operations.",
  },
];

const brands = [
  {
    icon: "/images/Group 52.svg",
    title: "Optimism",
    isNew: true,
  },
  {
    icon: "/images/Group 52.svg",
    title: "Optimism Goerli",
    isNew: true,
  },
  {
    icon: "/images/Group 53.svg",
    title: "Ethereum Mainnet",
  },
  {
    icon: "/images/Group 53.svg",
    title: "Ethereum Goerli",
  },
  {
    icon: "/images/Group 54.svg",
    title: "Polygon",
  },
  {
    icon: "/images/Group 54.svg",
    title: "Polygon Mumbai",
  },
  {
    icon: "/images/Group 55.svg",
    title: "Arbitrum",
  },
  {
    icon: "/images/Group 55.svg",
    title: "Arbitrum Testnet",
  },
];

const HelpCenter = [
  {
    thumbnail: "/images/lightbulb-on-outline 1.svg",
    title: "What happened to my transaction?",
  },
  {
    thumbnail: "/images/lightbulb-on-outline 1.svg",
    title: `How do blockchain transactions work?`,
  },
  {
    thumbnail: "/images/lightbulb-on-outline 1.svg",
    title: "What is paymaster and how to? use that?",
  },
];

function ImportentInfo() {
  return (
    <section className="container mb-24">
      <div className="grid grid-cols-3 gap-6">
        <div className="p-10 bg-stone-800/5 rounded-md">
          <h2 className="text-xl font-medium text-white mb-1">Multi Chain</h2>
          <div className="text-md text-slate-300 mb-6">
            Supported blockchains & tech behind
          </div>
          <div className="flex flex-wrap gap-3 mb-8">
            {brands.map(({icon, title, isNew}, index) => (
              <div
                key={index}
                className="bg-white flex items-center gap-2 py-1.5 pl-1.5 pr-3 rounded-full relative flex-grow sm:flex-grow-0"
                role="button"
              >
                {isNew && (
                  <span className="absolute top-0 -right-2 bg-primary-500 py-1 px-2 rounded-full text-white text-xs tracking-normal -translate-y-1/2">
                    New
                  </span>
                )}

                <div>
                  <img className="w-5 h-5" src={icon} alt="" />
                </div>
                <div className="text-md tracking-normal font-medium text-stone-900">
                  {title}
                </div>
              </div>
            ))}
          </div>
          <div className="flex mb-6">
            <Link
              href=""
              className="flex items-center gap-1 py-1.5 px-3 border border-green-300 rounded"
            >
              <span className="text-sm text-green-300 tracking-normal font-medium">
                Powered by
              </span>
              <img src="/images/safe.svg" alt="" />
            </Link>
          </div>
          <Link href="" className="flex">
            <Buttons
              name="Read More About Tech"
              thumbneil="/images/file-code.svg"
              variant="outlined"
            />
          </Link>
        </div>
        <div className="p-10 bg-stone-800/5 rounded-md">
          <div className="text-xl font-medium text-white mb-1">Features</div>
          <div className="text-md text-slate-300 mb-5">
            See our latest features and leave feedback
          </div>
          <div className="mb-5 flex flex-col">
            {feedback.map(({title}, index) => (
              <div
                key={index}
                className="text-base leading-[155%] tracking-normal font-medium text-slate-300 relative pl-7 pb-3.5 last:pb-0 group z-0"
              >
                <span className="absolute w-3.5 h-3.5 left-0 top-0 group-first:bg-primary-400 rounded-full border-2 border-primary-400 z-20 bg-black translate-y-1/2" />
                <span className="absolute h-full w-2 border-r-2 group-first:border-solid border-dotted border-primary-400 left-0 group-last:hidden z-10 translate-y-2"></span>
                {title}
              </div>
            ))}
          </div>
          <Link href="" className="flex">
            <Buttons
              thumbneil="/images/map-marker-path.svg"
              name="See Roadmap"
              variant="outlined"
            />
          </Link>
        </div>
        <div className="p-10 bg-stone-800/5 rounded-md">
          <div className="text-xl font-medium text-white mb-1">Help</div>
          <div className="text-md text-slate-300 mb-5">
            Learn how to use Scanner more effective
          </div>
          <div className="flex flex-col gap-2.5 mb-6">
            {HelpCenter.map(({thumbnail, title}, index) => (
              <div key={index} className="flex gap-3">
                <div>
                  <img src={thumbnail} alt="" />
                </div>
                <div className="text-base leading-[155%] tracking-normal text-white">
                  {title}
                </div>
              </div>
            ))}
          </div>
          <div className="flex">
            <Buttons
              thumbneil="/images/book-open-blank-variant.svg"
              name="Open Help Center"
              variant="outlined"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ImportentInfo;
