import React from "react";
import { TiLocation } from "react-icons/ti";
import { FiPhone } from "react-icons/fi";
import { MdMailOutline } from "react-icons/md";

const CompanyInfo = [
  {
    id: 1,
    type: "Our Location",
    value: "Anamnagar, Kathmandu",
    icon: <TiLocation style={{ fill: "white" }} />,
  },
  {
    id: 2,
    type: "Call Us",
    value: "9786543213",
    icon: <FiPhone style={{ color: "white" }} />,
  },
  {
    id: 3,
    type: "Contact us",
    value: "hawkai.online.com",
    icon: <MdMailOutline style={{ fill: "white" }} />,
  },
];

const details = CompanyInfo.map((data) => (
  <div key={data.id} className="flex flex-row gap-4 mb-8 items-center">
    <div className=" w-11 h-11 rounded-full bg-gradient-to-r from-blue to-lightblue .... shadow-icon-shadow">
      <span className="flex justify-center items-center w-full h-full">
        {data.icon}
      </span>
    </div>
    <div>
      <h3 className="text-xs font-medium mb-1">{data.type}</h3>
      <p className="text-base font-medium text-blue leading-6">{data.value}</p>
    </div>
  </div>
));

const Info = () => {
  return (
    <div className="flex flex-col items-center w-5/6 h-full">
      <div className="flex flex-col w-full items-center  mb-16">
        <h3 className="w-[230px] h-[45px] text-4xl text-blue font-medium">
          Get in touch
        </h3>
        <p className="w-[229px] h-[29px] text-lg leading-7 text-gray font-normal">
          Love to hear from you
        </p>
      </div>
      <div className="">
        <span>{details}</span>
      </div>
    </div>
  );
};

export default Info;
