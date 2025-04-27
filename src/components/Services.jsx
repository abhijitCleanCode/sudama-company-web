import React from "react";

import Section from "./Section";
import Heading from "./Heading";
import Generating from "./Generating";
import { check, service1, service2, service3 } from "../assets";
import { BrainwaveServices, BrainwaveServicesIcons } from "../constants";
import {
  PhotoChatMessage,
  Gradient,
  VideoBar,
  VideoChatMessage,
} from "./design/Services";

const Services = () => {
  return (
    <Section id="how-to-use">
      <div className="container">
        <Heading
          title="AI-Powered Development: Smarter, Faster, Better"
          text="At Sudama, we supercharge your software with intelligent AI integration to make it more dynamic, efficient, and future-ready."
        />

        <div className="relative">
          <div className="relative z-1 flex items-center h-[39rem] mb-5 p-8 border border-n-1/10 rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem]">
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none md:w-3/5 xl:w-auto">
              <img
                src={service1}
                alt="smartest-AI"
                className="w-full h-full object-cover md:object-right"
                width={800}
                height={730}
              />
            </div>

            <div className="relative z-1 max-w-[17rem] ml-auto">
              {/* text hierarchy */}
              <h4 className="h4 mb-4">Sudama Super Devs</h4>
              <p className="body-2 mb-[3rem] text-n-3">
                You don’t need a PhD to explain your vision—just passion and a
                rough sketch. Our Super Devs bring:
              </p>
              <ul className="body-2">
                {BrainwaveServices.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start py-4 border-t border-n-6"
                  >
                    <img src={check} />
                    <p className="ml-4">{item}</p>
                  </li>
                ))}
              </ul>
            </div>

            <Generating
              text="Sudama Super Devs: Where Genius Speaks Your Language"
              className="absolute left-4 right-4 border border-n-1/10 lg:left-1/2 lg-right-auto lg:bottom-8 lg:-translate-x-1/2"
            />
          </div>

          <div className="relative z-1 grid gap-5 lg:grid-cols-2">
            <div className="relative min-h-[39rem] border border-n-1/10 rounded-3xl overflow-hidden">
              <div className="absolute inset-0">
                <img
                  src={service2}
                  alt="robot"
                  width={360}
                  height={750}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-b from-n-8/0 to-n-8/90 lg:p-15">
                {/* text hierarchy */}
                <h4 className="h4 mb-4">Super Dev</h4>
                <p className="body-2 mb-[3rem] text-n-3">
                  No worry about the code. Our Super Devs got your back.
                </p>
              </div>

              <PhotoChatMessage />
            </div>

            <div className="p-4 bg-n-7 rounded-3xl overflow-hidden lg:min-h-[46rem]">
              <div className="py-12 px-4 xl:px-8">
                <h4 className="h4 mb-4">Video Editing</h4>
                <p className="body-2 mb-[2rem] text-n-3">
                  Oh, and did we mention? 🎬✨ Our editors have superpowers
                  too!. What will you create?
                </p>

                <ul className="flex items-center justify-between">
                  {BrainwaveServicesIcons.map((item, index) => (
                    <li
                      key={index}
                      className={`rounded-2xl flex items-center justify-center ${
                        index === 2
                          ? "w-[3rem] h-[3rem] p-0.25 bg-conic-gradient md:w-[4.5rem] md:h-[4.5rem]"
                          : "flex w-10 h-10 bg-n-6 md:w-15 md:h-15"
                      }`}
                    >
                      <div
                        className={
                          index === 2
                            ? "flex items-center justify-center w-full h-full bg-n-7 rounded-[1rem]"
                            : ""
                        }
                      >
                        <img src={item} width={24} height={24} alt={item} />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Services;
