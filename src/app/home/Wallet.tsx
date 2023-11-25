import React from "react";

function Wallet() {
  return (
    <section>
      <div className="container mb-36">
        <div className="flex items-center gap-3 mb-6">
          <div>
            <img src="/images/Group 57.svg" alt="" />
          </div>
          <div className="text-2xl font-medium text-white">Wallet</div>
        </div>
        <div className="flex gap-2 mb-6">
          <button className="text-base tracking-normal text-white font-medium bg-green-400 py-2.5 px-4 rounded-md">
            Overview
          </button>
          <button className="text-base tracking-normal text-white font-medium bg-gray-300/[15%] py-2.5 px-4 rounded-md">
            Balance
          </button>
          <button className="text-base tracking-normal text-white font-medium bg-gray-300/[15%] py-2.5 px-4 rounded-md">
            Transactions
          </button>
          <button className="text-base tracking-normal text-white font-medium bg-gray-300/[15%] py-2.5 px-4 rounded-md">
            Owners
          </button>
        </div>
        <div className="flex items-center justify-between gap-4 bg-stone-800/5 rounded-md p-4 mb-6">
          <div className="flex gap-4 items-center">
            <div>
              <img src="/images/Group 58.svg" alt="" />
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-xs font-medium text-neutral-400">
                Safe address
              </p>
              <p className="text-base tracking-normal font-medium text-slate-300">
                0x3a12…8cfc
              </p>
            </div>
          </div>
          <div className="flex gap-2">
            <div className="p-1.5">
              <img src="/images/content-copy.svg" alt="" />
            </div>
            <div className="p-1.5">
              <img src="/images/open-in-new.svg" alt="" />
            </div>
          </div>
        </div>
        <div className="bg-stone-800/5 rounded-md p-4 flex flex-col gap-5 mb-6">
          <div className="flex items-center justify-between gap-4">
            <div className="flex gap-4 items-center">
              <div>
                <img src="/images/Group 58.svg" alt="" />
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-xs font-medium text-neutral-400">
                  Safe address
                </p>
                <p className="text-base tracking-normal font-medium text-slate-300">
                  0x3a12…8cfc
                </p>
              </div>
            </div>
            <div className="p-1.5">
              <img src="/images/open-in-new.svg" alt="" />
            </div>
          </div>
          <div className="flex items-center justify-between gap-4">
            <div className="flex flex-col gap-1">
              <p className="text-xs font-medium text-neutral-400">
                Created transaction
              </p>
              <p className="text-base tracking-normal font-medium text-slate-300">
                0x242a…6b96
              </p>
            </div>
            <div className="flex gap-2">
              <div className="p-1.5">
                <img src="/images/content-copy.svg" alt="" />
              </div>
              <div className="p-1.5">
                <img src="/images/open-in-new.svg" alt="" />
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between gap-4">
            <div className="flex flex-col gap-1">
              <p className="text-xs font-medium text-neutral-400">
                Fallback handler
              </p>
              <p className="text-base tracking-normal font-medium text-slate-300">
                0x00000000
              </p>
            </div>
            <div className="flex gap-2">
              <div className="p-1.5">
                <img src="/images/content-copy.svg" alt="" />
              </div>
              <div className="p-1.5">
                <img src="/images/open-in-new.svg" alt="" />
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between gap-4">
            <div className="flex flex-col gap-1">
              <p className="text-xs font-medium text-neutral-400">
                master copy
              </p>
              <p className="text-base tracking-normal font-medium text-slate-300">
                eth:0xd9Db…9552
              </p>
              <p className="text-xs font-medium text-neutral-400">
                Gnosis Safe: Singleton 1.3.0
              </p>
            </div>
            <div className="flex gap-2">
              <div className="p-1.5">
                <img src="/images/content-copy.svg" alt="" />
              </div>
              <div className="p-1.5">
                <img src="/images/open-in-new.svg" alt="" />
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between gap-4">
            <div className="flex flex-col gap-1">
              <p className="text-xs font-medium text-neutral-400">Guardian</p>
              <p className="text-base tracking-normal font-medium text-slate-300">
                0x242a…6b96
              </p>
            </div>
            <div className="flex gap-2">
              <div className="p-1.5">
                <img src="/images/content-copy.svg" alt="" />
              </div>
              <div className="p-1.5">
                <img src="/images/open-in-new.svg" alt="" />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-xs font-medium text-neutral-400">Nonce #</p>
            <p className="text-base tracking-normal font-medium text-slate-300">
              1
            </p>
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-xs font-medium text-neutral-400">TOtal owners</p>
            <p className="text-base tracking-normal font-medium text-slate-300">
              35
            </p>
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-xs font-medium text-neutral-400">
              installed modules
            </p>
            <p className="text-base tracking-normal font-medium text-slate-300">
              1
            </p>
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-xs font-medium text-neutral-400">version</p>
            <p className="text-base tracking-normal font-medium text-slate-300">
              1.3.0
            </p>
          </div>
        </div>
        <div className="flex items-center justify-between gap-4 bg-stone-800/5 rounded-md p-3.5">
          <div className="flex flex-col gap-1">
            <p className="text-xs font-medium text-neutral-400">Tokens</p>
            <p className="text-base tracking-normal font-medium text-slate-300">
              7
            </p>
          </div>
          <div className="p-1.5">
            <img src="/images/button (1).svg" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Wallet;
