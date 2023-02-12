import React from "react";
import Header from "../Header";
import Section from "../Section";
import Sidebar from "../Sidebar";

const SolarRoof = ({ sidebar, setSidebar }) => {
  return (
    <div>
      <div className="app">
        <div
          id="overlay"
          className={!sidebar ? "back" : null}
          onClick={() => {
            setSidebar(false);
          }}
        ></div>
        <Header sidebar={sidebar} setSidebar={setSidebar} />
        <Section
          sidebar={sidebar}
          setSidebar={setSidebar}
          backgroundImg="url('/img/solar-roof.jpg')"
          title="Solar Roof"
          description="Produce Clean Energy From Your Roof"
          leftBtnText="Order Now"
          rightBtnText="Learn More"
          itemId="roof"
        />
        <Sidebar sidebar={sidebar} setSidebar={setSidebar} />
      </div>
    </div>
  );
};

export default SolarRoof;
