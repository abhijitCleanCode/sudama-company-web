import React from "react";

import Section from "./Section";
import Heading from "./Heading";
import { benefits } from "../constants";
import Arrow from "../assets/svg/Arrow";
// import ClipPath from "../assets/svg/ClipPath";
import { GradientLight } from "./design/Benefits";

const ClipPath = () => {
  return (
    <svg className="block" width={0} height={0}>
      <clipPath id="benefits" clipPathUnits="objectBoundingBox">
        <path d="M0.079,0 h0.756 a0.079,0.083,0,0,1,0.058,0.026 l0.086,0.096 A0.079,0.083,0,0,1,1,0.179 V0.917 c0,0.046,-0.035,0.083,-0.079,0.083 H0.079 c-0.044,0,-0.079,-0.037,-0.079,-0.083 V0.083 C0,0.037,0.035,0,0.079,0" />
      </clipPath>
    </svg>
  );
};

const Benefits = () => {
  return (
    <Section id="pricing">
      <div className="container relative z-2">
        <Heading
          className="md:max-w-4xl"
          title="Sudama - Place Where Your Business Meets Tomorrow's Tech"
        />

        <div className="flex flex-wrap gap-10 mb-10">
          {benefits?.map((item) => (
            <div
              key={item.id}
              className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]"
              style={{
                backgroundImage: `url(${item.backgroundUrl})`,
              }}
            >
              <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none">
                <h5 className="h5 mb-5">{item.title}</h5>
                <p className="body-2 mb-6 text-n-3">{item.purpose}</p>
                {/* <p className="body-2 mb-6 text-n-3">{item.text}</p> */}
                <ul className="list-disc pl-5 space-y-2 text-n-3 [&>li::marker]:text-[#8B5DFF] mb-6">
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
              {item.light && <GradientLight />}

              {/* image appear behind the card on each hover */}
              <div
                className="absolute inset-0.5 bg-n-8"
                style={{ clipPath: "url(#benefits)" }}
              >
                {/* show it only on hover */}
                <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10">
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
              <ClipPath />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Benefits;
