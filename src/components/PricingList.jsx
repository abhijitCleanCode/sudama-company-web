import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { Brainwave, check } from "../assets";
import { pricing } from "../constants";
import Button from "./Button";

const AgileDevelopmentCard = ({ agile }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={agile.date}
      iconStyle={{ background: agile.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={Brainwave}
            alt="Sudama"
            className="w-full h-full object-contain rounded-full"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-white text-[24px] font-bold">{agile.title}</h3>
        <p
          className="text-secondary text-[16px] font-semibold"
          style={{ margin: 0 }}
        >
          {agile.company_name}
        </p>
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {agile.points.map((point, index) => (
          <li
            key={`agile-point-${index}`}
            className="text-white-100 text-[14px] pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const PricingList = () => {
  return (
    <>
      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {pricing.map((agile, index) => (
            <AgileDevelopmentCard key={`experience-${index}`} agile={agile} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default PricingList;
