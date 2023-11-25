import React from "react";

const value = [
  {
    title: "value",
    date: "0",
    icon: "/images/content-copy.svg",
  },
  {
    title: "Submission date",
    date: "2023-10-17 T17:50:04.792296Z",
  },
  {
    title: "modified date",
    date: "2023-10-17 T17:51:07.262421Z",
  },
  {
    title: "Nounce",
    date: "0",
  },
];

function Transactions() {
  return (
    <section>
      <div className="container mb-36">
        <div className="flex items-center gap-4 mb-9">
          <div>
            <img src="/images/Group 56.svg" alt="" />
          </div>
          <div className="text-2xl font-medium text-white">
            Pending Transaction
          </div>
        </div>
        <div className="flex gap-2 mb-8">
          <button className="text-base tracking-normal text-white font-medium bg-gray-300/[15%] py-2.5 px-4 rounded-md">
            Overview
          </button>
          <button className="text-base tracking-normal text-white font-medium bg-gray-300/[15%] py-2.5 px-4 rounded-md">
            Balance
          </button>
          <button className="text-base tracking-normal text-white font-medium bg-gray-300/[15%] py-2.5 px-4 rounded-md">
            Transactions
          </button>
          <button className="text-base tracking-normal text-white font-medium bg-green-400 py-2.5 px-4 rounded-md">
            Owners
          </button>
        </div>
        <div className="p-4 flex gap-8 mb-4">
          {value.map(({title, icon, date}, index) => (
            <div key={index} className="flex items-center gap-4">
              <div className="flex flex-col gap-1">
                <p className="text-xs font-medium text-slate-300">{title}</p>
                <p className="text-base tracking-normal font-medium text-slate-300">
                  {date}
                </p>
              </div>
              <div className="p-1.5">
                <img src={icon} alt="" />
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-4 p-4 mb-9 bg-stone-800/5 rounded-md max-w-[936px]">
          <div className="flex items-center justify-between gap-4">
            <div className="flex flex-col gap-1">
              <p className="text-xs font-medium text-slate-300">Safe address</p>
              <p className="text-base tracking-normal font-medium text-slate-300">
                0x279EEa1dA583dCcfb0Fc99bb11A5ffd9EE711F65
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
          <div className="flex items-center justify-between gap-4 ">
            <div className="flex flex-col gap-1">
              <p className="text-xs font-medium text-slate-300">TO</p>
              <p className="text-base tracking-normal font-medium text-slate-300">
                0x279EEa1dA583dCcfb0Fc99bb11A5ffd9EE711F65
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
          <div className="flex items-center justify-between gap-4 ">
            <div className="flex flex-col gap-1 max-w-[816px]">
              <p className="text-xs font-medium text-slate-300">data</p>
              <p className="text-base tracking-normal font-medium text-slate-300">
                0xa9059cbb000000000000000000000000e95c4707ecf588dfd8ab3b253e00f45339ac3054000000000000000000
                00000000000000000000000000000000000000000f4240
              </p>
            </div>
            <div className="flex gap-2">
              <div className="p-1.5 flex-shrink-0">
                <img src="/images/content-copy.svg" alt="" />
              </div>
              <div className="p-1.5 flex-shrink-0">
                <img src="/images/open-in-new.svg" alt="" />
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between gap-4 ">
            <div className="flex flex-col gap-1">
              <p className="text-xs font-medium text-slate-300">safe Tx Hash</p>
              <p className="text-base tracking-normal font-medium text-slate-300">
                0xcbe165494374e8aadf6b3ce94d8c9db8311091674df25da1318d6811655f0200
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
        </div>
        <div>
          <h2 className="text-base tracking-normal text-white font-medium mb-5">
            Confirmations
          </h2>
          <div className="flex gap-4 mb-5">
            <div className="flex gap-3">
              <p className="text-xs uppercase text-neutral-400 font-medium">
                Owners
              </p>
              <p className="text-base font-medium tracking-normal text-gray-300">
                12
              </p>
            </div>
            <div className="flex gap-3">
              <p className="text-xs uppercase text-neutral-400 font-medium">
                required to sign
              </p>
              <p className="text-base font-medium tracking-normal text-gray-300">
                2/3
              </p>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-2">
            {Array.from({length: 9}).map((_, index) => (
              <div
                key={index}
                className="flex flex-col gap-4 bg-black rounded-md p-4"
              >
                <div className="flex items-center justify-between">
                  <div className="flex gap-1 items-center">
                    <div>
                      <img src="/images/clock.svg" alt="" />
                    </div>
                    <div className="text-md tracking-normal font-medium text-red-400">
                      Signature Pending
                    </div>
                  </div>
                  <div>
                    <img src="/images/button.svg" alt="" />
                  </div>
                </div>
                <div className=" flex justify-between items-center">
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-1">
                      <div>
                        <img src="/images/account-key 1.svg" alt="" />
                      </div>
                      <div className="text-xs uppercase text-neutral-400">
                        Owner 2
                      </div>
                    </div>
                    <div className="text-base text-gray-300 font-medium tracking-normal">
                      0x242a…6b96
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
                <div>
                  <button className="flex items-center gap-2 py-2 px-4 border-2 border-green-400 rounded-md">
                    <div>
                      <img src="/images/qrcode-scan.svg" alt="" />
                    </div>
                    <div className="text-base font-medium text-white tracking-normal">
                      Sign Now
                    </div>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Transactions;
