import React from "react";
import Form from "./components/Form";
import Info from "./components/Info";

import CloseIcon from "./assets/contactInfoIcons/closeIcon.svg";

const App = () => {
  const redirectToHome = () => {};
  return (
    <div className=" flex items-center justify-center min-h-screen ">
      <div className="relative bg-[#D3D9FE] w-[65rem] h-[45rem]  rounded-lg flex items-center justify-center p-24">
        <Info />
        <Form />
        <div
          className="absolute top-10 right-16 cursor-pointer hover:animate-spin-slow
          onClick={redirectToHome}"
        >
          <img src={CloseIcon} alt="Cross Icon" />
        </div>
      </div>
    </div>
  );
};

export default App;
