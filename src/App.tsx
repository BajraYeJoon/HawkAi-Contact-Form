import React from "react";
import { easeIn, motion } from "framer-motion";

import Form from "./components/Form";
import Info from "./components/Info";

import CloseIcon from "./assets/contactInfoIcons/closeIcon.svg";

const App = () => {
  const redirectToHome = () => {};
  return (
    <div className=" flex items-center justify-center min-h-screen ">
      <motion.div
        className="relative bg-[#D3D9FE] w-[65rem] h-[45rem]  rounded-lg flex items-center justify-center p-24"
        initial={{ opacity: 0, scale: 0.83 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.5,
          type: "tween",
        }}
      >
        <Info />
        <Form />
        <div
          className="absolute top-10 right-16 cursor-pointer hover:animate-spin-slow
          onClick={redirectToHome}"
        >
          <img src={CloseIcon} alt="Cross Icon" />
        </div>
      </motion.div>
    </div>
  );
};

export default App;
