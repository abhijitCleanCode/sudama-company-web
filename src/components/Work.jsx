import React from "react";
import Button from "./Button";
import Section from "./Section";
import Heading from "./Heading";
import Arrow from "../assets/svg/Arrow";
import ClipPath from "../assets/svg/ClipPath";
import { work } from "../constants";

const Work = () => {
  return (
    <Section crosses>
      <div className="container">
        <Heading className="md:max-w-4xl" title="Sudama's Work" />

        <div className="flex flex-wrap gap-10 mb-10">
          {work.map((item) => (
            <div
              key={item.id}
              className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]"
            >
              <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none">
                <h5 className="h5 mb-5">{item.title}</h5>
                <p className="body-2 mb-6 text-n-3">{item.text}</p>
                <div className="flex items-center mt-auto">
                  {/* <img
                    src={item.iconUrl}
                    alt={item.title}
                    width={48}
                    height={48}
                  /> */}
                  <p className="ml-auto font-code font-bold text-xs text-n-1 tracking-wider">
                    Explore More
                  </p>
                  <Arrow />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Work;
