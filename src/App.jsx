import React from "react";
import CalenderPage from "./pages/CalenderPage";

import CustomSlider from "./components/CustomSlider";

const App = () => {
  return (
    <div className="max-w-screen-sm xl:max-w-screen-xl lg:max-w-screen-lg md:max-w-screen-md h-screen mx-auto  ">
      <CalenderPage></CalenderPage>
      <div className="   absolute left-10 lg:left-10 top-0  flex justify-center items-center  h-full">
          <CustomSlider></CustomSlider>
        </div>
    </div>
  );
};

export default App;
