import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import Person from "../assets/contactInfoIcons/people.svg";
import Mail from "../assets/contactInfoIcons/mail.svg";
import Phone from "../assets/contactInfoIcons/phone.svg";

import emailjs from "@emailjs/browser";

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

  const servicesToString = (services: Services) => {
    console.log("how===>", services);
    const selectedServices = Object.keys(services)
      .filter((key) => (services as any)[key])
      .join(",");

    console.log("*******", selectedServices);

    return selectedServices;
  };

  useEffect(() => {
    const buttons = document.querySelectorAll("button");
    buttons.forEach((button) => {
      const serviceName = button.getAttribute("name") as keyof Services;
      button.setAttribute(
        "aria-pressed",
        services[serviceName] ? "true" : "false"
      );
    });
  }, [services]);
  console.log("services:", services);

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const phone = e.target.phone.value;
    const message = e.target.message.value;

    const selectedServices = servicesToString(services);
    console.log("selectedServices:", selectedServices);

    const templateParams = {
      name: name,
      email: email,
      phone: phone,
      message: message,
      services: selectedServices,
    };

    emailjs
      .send(
        "service_5s7ju9h",
        "template_7ijz5wc",
        templateParams,
        "-YWS73aB9KQYLBmGu"
      )
      .then((result) => {
        console.log(result.status, result.text);
        console.log(services);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="relative flex flex-col items-start w-full h-full ">
      <form action="" className="w-5/6" onSubmit={handleSubmit}>
        <label htmlFor="Your Name" className="font-medium">
          Your name
        </label>
        <div className="relative">
          <i className="form-icons">
            <motion.img
              src={Person}
              alt=""
              style={{ width: "25px", height: "18px" }}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 1,

                ease: [0, 0.3, 0.3, 1.08],
              }}
              whileHover={{
                rotateZ: -10,
                scale: 1.3,
              }}
            />
          </i>

          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="form-input-fields"
            placeholder="E.g. Jane Doe"
            aria-required
            required
          />
        </div>

        <label htmlFor="Email" className="font-medium">
          Email
        </label>
        <div className="relative">
          <i className="form-icons">
            <motion.img
              src={Mail}
              alt=""
              style={{ width: "25px", height: "18px" }}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 1,

                ease: [0, 0.3, 0.3, 1.08],
              }}
              whileHover={{
                rotateZ: -10,
                scale: 1.3,
              }}
            />
          </i>

          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="form-input-fields"
            placeholder="E.g. JaneDoe@gmail.com"
            aria-required
            required
          />
        </div>

        <label htmlFor="Phone" className="font-medium">
          Phone
        </label>
        <div className="relative">
          <i className="form-icons">
            <motion.img
              src={Phone}
              alt=""
              style={{ width: "25px", height: "18px" }}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 1,

                ease: [0, 0.3, 0.3, 1.08],
              }}
              whileHover={{
                rotateZ: -10,
                scale: 1.3,
              }}
            />
          </i>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            className="form-input-fields"
            placeholder="E.g 9875643621"
            aria-required
            required
          />
        </div>

        <label className="font-medium">Services</label>

        <div className="flex justify-start gap-8 mb-4 mt-2">
          <button
            type="button"
            name="uiux"
            aria-pressed={services.seo}
            className={
              services.uiux ? "checked-services" : "default-unchecked-services"
            }
            onClick={handleServiceChange}
          >
            UI/UX Design
          </button>
          <button
            type="button"
            name="webdev"
            aria-pressed={services.webdev}
            className={
              services.webdev
                ? "checked-services"
                : "default-unchecked-services"
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
            aria-pressed={services.digimarketing}
            className={
              services.digimarketing
                ? "checked-services"
                : "default-unchecked-services"
            }
            onClick={handleServiceChange}
          >
            Digital Marketing
          </button>
          <button
            type="button"
            name="seo"
            aria-pressed={services.seo}
            className={
              services.seo ? "checked-services" : "default-unchecked-services"
            }
            onClick={handleServiceChange}
          >
            SEO
          </button>
        </div>

        <div className="flex  items-center gap-8">
          <textarea
            className="block p-3.5 text-sm text-gray-900 bg-gray-50 rounded-lg border border-[#C6C6C6] mt-4 w-4/5 h-32 focus:outline-none"
            placeholder="Your message"
            name="message"
            style={{ resize: "none" }}
          ></textarea>
          <motion.button
            type="submit"
            className="bg-blue w-24 h-20 text-[#ffffff] rounded-full"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{
              scale: 1,
              transition: { duration: 0.2, ease: "easeOut" },
            }}
            whileTap={{
              scale: 0.5,
              transition: { duration: 0.2 },
            }}
            transition={{ duration: 1, delay: 0.2, ease: [0, 0.3, 0.3, 1.08] }}
          >
            Submit
          </motion.button>
        </div>
      </form>
    </div>
  );
};

export default Form;
