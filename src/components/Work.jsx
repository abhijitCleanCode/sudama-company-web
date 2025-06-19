import React from "react";
import Button from "./Button";
import Section from "./Section";
import Heading from "./Heading";
import Arrow from "../assets/svg/Arrow";
import ClipPath from "../assets/svg/ClipPath";
import { work } from "../constants";
import { book_my_doct } from "../assets";
import { Link } from "react-router-dom";
import { AiFillEye, AiFillGithub } from "react-icons/ai";

const Work = () => {
  return (
    <Section crosses>
      <div className="container">
        <Heading className="md:max-w-4xl" title="Sudama's Work" />

        <div className="flex flex-wrap justify-center items-center gap-10 mb-10">
          {work.map((item) => (
            <div
              key={item.id}
              className="work-content flex flex-col justify-center items-center m-[2rem] p-[1rem] rounded-[0.5rem] cursor-pointer transition-all delay-150 ease hover:shadow-md w-full md:w-[470px] md:p-[1.25rem] md:rounded-[0.75rem]"
            >
              <Link to={item.url} target="_blank" rel="noreferrer">
                <div className="flex justify-center items-center w-full h-[230px] md:h-[350px] relative">
                  {item.projectImg ? (
                    <img
                      src={item.projectImg}
                      alt="in progress, coming soon"
                      className="w-full h-full rounded-[0.5rem] object-cover"
                    />
                  ) : (
                    <p className="grid-subtext">In progress, coming soon</p>
                  )}
                </div>

                <div className="p-[0.5rem] w-full relative flex flex-col justify-center items-center mt-4">
                  <h3 className="grid-headtext">{item.title}</h3>
                  <p className="grid-subtext">{item.text}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Work;
