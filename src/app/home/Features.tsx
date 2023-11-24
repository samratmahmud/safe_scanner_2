import Buttons from "@/components/common/Buttons";
import Link from "next/link";
import React from "react";

const feedback = [
  {
    thumbneil1: "/images/Frame 107.png",
    title: "MVP offers address search for wallet balance and activity.",
  },
  {
    thumbneil1: "/images/Frame 107 (1).png",
    title: "Smart contract execution history is visible and searchable.",
  },
  {
    thumbneil1: "/images/Frame 107 (2).png",
    title: "Smart contract execution history is visible and searchable.",
  },
  {
    thumbneil1: "/images/dot.png",
    title: "Smart contract execution history is visible and searchable.",
  },
];

const buttonProps = [
  {
    thumbneil: "/images/Group 52.svg",
    title: "Optimism",
  },
  {
    thumbneil: "/images/Group 52.svg",
    title: "Optimism Goerli",
  },
  {
    thumbneil: "/images/Group 53.svg",
    title: "Ethereum Mainnet",
  },
  {
    thumbneil: "/images/Group 53.svg",
    title: "Ethereum Goerli",
  },
  {
    thumbneil: "/images/Group 54.svg",
    title: "Polygon",
  },
  {
    thumbneil: "/images/Group 54.svg",
    title: "Polygon Mumbai",
  },
  {
    thumbneil: "/images/Group 55.svg",
    title: "Arbitrum",
  },
  {
    thumbneil: "/images/Group 55.svg",
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

function Features() {
  return (
    <section className="container mb-24">
      <div className="grid grid-cols-3 gap-6">
        <div className="p-7 bg-stone-800/5">
          <h2 className="text-xl font-medium text-white mb-1">Multi Chain</h2>
          <div className="text-md text-slate-300 mb-6">
            Supported blockchains & tech behind
          </div>
          <div className="flex flex-wrap gap-3 mb-6">
            {buttonProps.map((item, index) => (
              <div key={index} className="">
                <Link
                  href="/"
                  className="bg-white flex items-center gap-2 py-1.5 pl-1.5 pr-3 rounded-full"
                >
                  <div>
                    <img src={item.thumbneil} alt="" />
                  </div>
                  <div className="lg:text-md text-md font-medium text-stone-900 tracking-normal">
                    {item.title}
                  </div>
                </Link>
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
          <div className="flex">
            <Buttons
              name="Read More About Tech"
              thumbneil="/images/file-code.svg"
              theme="dark"
            />
          </div>
        </div>
        <div className="p-10 bg-stone-800/5">
          <div className="text-xl font-medium text-white mb-1">Features</div>
          <div className="text-md text-slate-300 mb-5">
            See our latest features and leave feedback
          </div>
          <div className="flex flex-col gap-1 mb-5">
            {feedback.map((item, index) => (
              <div key={index} className="flex gap-2">
                <div className="flex items-center flex-shrink-0">
                  <img
                    className="-mt-1.5 flex-shrink-0"
                    src={item.thumbneil1}
                    alt=""
                  />
                </div>
                <div className="text-base font-medium text-slate-300">
                  {item.title}
                </div>
              </div>
            ))}
          </div>
          <div className="flex">
            <Buttons
              thumbneil="/images/map-marker-path.svg"
              name="See Roadmap"
              theme="dark"
            />
          </div>
        </div>
        <div className="p-10 bg-stone-800/5">
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
                <div className="text-base tracking-normal text-white">
                  {title}
                </div>
              </div>
            ))}
          </div>
          <div className="flex">
            <Buttons
              thumbneil="/images/book-open-blank-variant.svg"
              name="Open Help Center"
              theme="dark"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
