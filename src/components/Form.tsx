import React, { useState } from "react";

import Person from "../assets/contactInfoIcons/people.svg";
import Mail from "../assets/contactInfoIcons/mail.svg";
import Phone from "../assets/contactInfoIcons/phone.svg";

interface Services {
  uiux: boolean;
  webdev: boolean;
  digimarketing: boolean;
  seo: boolean;
}

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [services, setServices] = useState<Services>({
    uiux: true,
    webdev: false,
    digimarketing: false,
    seo: false,
  });

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleServiceChange = (e: any) => {
    const name = e.currentTarget.name;
    setServices({
      ...services,
      [`${name}`]: !services[name as keyof Services],
    });
  };

  const handleFormSubmit = (e: any) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="relative flex flex-col items-start w-full h-full ">
      <form action="" className="w-5/6" onSubmit={handleFormSubmit}>
        <label htmlFor="Your Name" className="font-medium">
          Your name
        </label>
        <div className="relative">
          <i className="absolute top-8 left-1 -translate-y-1/2 p-2 opacity-90">
            <img
              src={Person}
              alt=""
              style={{ width: "25px", height: "18px" }}
            />
          </i>

          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="w-full px-[5px] py-[12px] mt-[10px] rounded focus:outline-none mb-6 text-gray font-normal box-border pl-12 text-sm "
            placeholder="E.g. Jane Doe"
          />
        </div>

        <label htmlFor="Email" className="font-medium">
          Email
        </label>
        <div className="relative">
          <i className="absolute top-8 left-1 -translate-y-1/2 p-2 opacity-90">
            <img src={Mail} alt="" style={{ width: "25px", height: "18px" }} />
          </i>

          <input
            type="text"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full px-[5px] py-[12px] mt-[10px] rounded focus:outline-none mb-6 box-border pl-12 text-sm text-gray font-normal "
            placeholder="E.g. JaneDoe@gmail.com"
          />
        </div>

        <label htmlFor="Phone" className="font-medium">
          Phone
        </label>
        <div className="relative">
          <i className="absolute top-8 left-1 -translate-y-1/2 p-2 opacity-90">
            <img src={Phone} alt="" style={{ width: "25px", height: "18px" }} />
          </i>
          <input
            type="number"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            className="w-full px-[5px] py-[12px] mt-[10px] rounded focus:outline-none mb-6 text-gray font-normal box-border pl-12 text-sm"
            placeholder="E.g 9875643621"
          />
        </div>

        <label className="font-medium">Services</label>

        <div className="flex justify-start gap-8 mb-4 mt-2">
          <button
            type="button"
            name="uiux"
            className={
              services.uiux
                ? "bg-[#475BB9] rounded-[4px] border box-border items-start p-3 text-[#ffffff] text-sm border-blue"
                : "bg-[white] rounded-[4px] box-border  items-start p-3 text-[#000000] text-sm"
            }
            onClick={handleServiceChange}
          >
            UI/UX Design
          </button>
          <button
            type="button"
            name="webdev"
            className={
              services.webdev
                ? "bg-[#475BB9] rounded-[4px] border box-border items-start p-3 text-[#ffffff] text-sm"
                : "bg-[white] rounded-[4px] box-border items-start p-3 text-[#000000] text-sm "
            }
            onClick={handleServiceChange}
          >
            Web Design & Development
          </button>
        </div>

        <div className="flex justify-start gap-8">
          <button
            type="button"
            name="digimarketing"
            className={
              services.digimarketing
                ? "bg-[#475BB9] rounded-[4px] border box-border items-start p-3 text-[#ffffff] text-sm border-blue"
                : "bg-[white] rounded-[4px] box-border items-start p-3 text-[#000000] text-sm"
            }
            onClick={handleServiceChange}
          >
            Digital Marketing
          </button>
          <button
            type="button"
            name="seo"
            className={
              services.seo
                ? "bg-[#475BB9] rounded-[4px] border box-border items-start p-3 text-[#ffffff] text-sm border-blue"
                : "bg-[white] rounded-[4px] box-border items-start p-3 text-[#000000] text-sm"
            }
            onClick={handleServiceChange}
          >
            SEO
          </button>
        </div>

        <div className="flex  items-center gap-8">
          <textarea
            className="block p-3.5 text-sm text-gray-900 bg-gray-50 rounded-lg border border-[#C6C6C6] mt-4 w-4/5 h-32"
            placeholder="Your message"
            style={{ resize: "none" }}
          ></textarea>
          <button
            type="submit"
            className="bg-blue w-24 h-20 text-[#ffffff] rounded-full"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
