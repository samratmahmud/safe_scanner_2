import Link from "next/link";
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
    <section>
      <div className="container pb-12">
        <div className="mb-3">
          <img src="images/Group 48.svg" alt="" />
        </div>
        <div className="text-md text-slate-300 tracking-normal mb-8">
          Super User-friendly Transaction Explorer for the Safe Eco-system
        </div>
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {serviceLink.map(({items, title}, index) => (
            <div key={index}>
              <div className="text-xs font-medium text-neutral-400 uppercase mb-4">
                {title}
              </div>
              <div className="flex flex-col gap-4">
                {items.map(({name, url}, index) => (
                  <div key={index}>
                    <Link
                      href={url}
                      className="text-base font-medium text-slate-300"
                    >
                      {name}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="text-md tracking-normal text-neutral-400 uppercase">
          ©2023 Safescanner.xyz
        </div>
      </div>
    </section>
  );
}

export default Footer;
