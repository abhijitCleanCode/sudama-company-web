import React from "react";

import Section from "./Section";
import Heading from "./Heading";
import { benefits } from "../constants";
import Arrow from "../assets/svg/Arrow";
import ClipPath from "../assets/svg/ClipPath";
import { GradientLight } from "./design/Benefits";
import ServiceCard from "./benefits/ServiceCard";

const Benefits = () => {
  return (
    <Section id="pricing">
      <div className="">
        <Heading
          className="md:max-w-4xl"
          title="Sudama - Place Where Your Business Meets Tomorrow's Tech"
        />

        <div className="flex flex-wrap justify-center p-4 gap-4">
          {/* {benefits?.map((item) => (
            <div
              key={item.id}
              className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]"
              style={{
                backgroundImage: "url(./src/assets/benefits/card-1.svg)",
              }}
            >
              <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none">
                <h5 className="h5 mb-5">{item.title}</h5>
                <p className="body-2 mb-6 text-n-3">{item.purpose}</p>
                {/* <p className="body-2 mb-6 text-n-3">{item.text}</p> */}
          {/* <ul className="list-disc pl-5 space-y-2 text-n-3 [&>li::marker]:text-[#8B5DFF] mb-6">
                  {item?.text?.map((value, index) => (
                    <li key={index}>{value}</li>
                  ))}
                </ul>
                <div className="flex items-center mt-auto">
                  <p>Starting at ₹29,999</p>
                  <Arrow />
                </div>
              </div>

              {/* visual effect */}
          {/* {item.light && <GradientLight />} */}

          {/* image appear behind the card on each hover */}
          {/*<div
                className="absolute inset-0.5 bg-n-8"
                style={{ clipPath: "url(#benefits)" }}
              >
                {/* show it only on hover */}
          {/*<div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    width={380}
                    height={362}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* allow us to see full rectangle of card */}
          {/*<ClipPath />
            </div>
          ))} */}

          {benefits.map((item) => (
            <ServiceCard key={item.id} {...item} className="md:max-w-[24rem]" />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Benefits;
