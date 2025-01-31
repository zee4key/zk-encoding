"use client";

import { Marquee } from "@devnomic/marquee";
import "@devnomic/marquee/dist/index.css";
import { FaMicrosoft, FaGoogle } from "react-icons/fa";

interface sponsorsProps {
  logo: JSX.Element;
  name: string;
}

const sponsors: sponsorsProps[] = [
  {
    logo: <FaMicrosoft size={32} />,
    name: "Microsoft",
  },
  {
    logo: <FaGoogle size={32} />,
    name: "Google",
  },

  {
    logo: <FaMicrosoft size={32} />,
    name: "Microsoft Cloud",
  },
  {
    logo: <FaGoogle size={32} />,
    name: "Google Cloud",
  },

  {
    logo: <FaMicrosoft size={32} />,
    name: "Microsoft Azure",
  },
];

export const SponsorsSection = () => {
  return (
    <section id="sponsors" className="max-w-[75%] mx-auto pb-24 sm:pb-32">
      <h2 className="text-lg md:text-xl text-center mb-6">
        Our Platinum Sponsors
      </h2>

      <div className="mx-auto">
        <Marquee
          className="gap-[3rem]"
          fade
          innerClassName="gap-[3rem]"
          pauseOnHover
        >
          {sponsors.map(({ logo, name }) => (
            <div
              key={name}
              className="flex items-center text-xl md:text-2xl font-medium"
            >
              {logo}
              <span className="ml-2">{name}</span>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};
