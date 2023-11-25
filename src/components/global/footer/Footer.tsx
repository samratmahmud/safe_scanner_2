/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import {features} from "process";
import React from "react";

const serviceLink = [
  {
    title: "Resources",
    items: [
      {
        name: "Documentation",
        url: "/",
      },
      {
        name: "Help Center",
        url: "/",
      },
    ],
  },
  {
    title: "COmmunity",
    items: [
      {
        name: "Leave Feedback",
        url: "/",
      },
      {
        name: "Twitter",
        url: "/",
      },
      {
        name: "Github",
        url: "/",
      },
    ],
  },
  {
    title: "Legal",
    items: [
      {
        name: "Terms & Conditions",
        url: "/",
      },
      {
        name: "Privacy Policy",
        url: "/",
      },
      {
        name: "Cookie Policy",
        url: "/",
      },
    ],
  },
];

function Footer() {
  return (
    <section className="container">
      <hr className="border-neutral-400 mb-8" />
      <div className="mb-8">
        <div className="mb-3">
          <Link href="/" className="inline-block -m-3 p-3">
            <img src="images/Group 48.svg" alt="" />
          </Link>
        </div>
        <div className="text-md text-slate-300">
          Super User-friendly Transaction Explorer for the Safe Eco-system
        </div>
      </div>
      <div className="grid md:grid-cols-3 gap-8 mb-8">
        {serviceLink.map((item, index) => (
          <div key={index} className="flex md:flex-row flex-col gap-8 group">
            <hr className="w-full md:w-[1px] h-[1px] md:h-full bg-neutral-400 hidden md:block group-last:block" />
            <div>
              <div className="text-xs font-medium text-neutral-400 uppercase mb-4">
                {item.title}
              </div>
              <div className="flex flex-col">
                {item.items.map((feature, index) => (
                  <div key={index}>
                    <Link
                      href={feature.url}
                      className="text-base font-medium text-slate-300 py-2 inline-block hover:underline"
                    >
                      {feature.name}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-md text-neutral-400 uppercase pb-12">
        ©2023 Safescanner.xyz
      </div>
    </section>
  );
}

export default Footer;
