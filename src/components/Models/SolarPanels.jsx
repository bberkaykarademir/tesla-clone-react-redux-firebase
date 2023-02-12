import React from "react";
import Header from "../Header";
import Section from "../Section";
import Sidebar from "../Sidebar";

const SolarPanels = ({ sidebar, setSidebar }) => {
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
          backgroundImg="url('/img/solar-panel.jpg')"
          title="Solar Panels"
          description="Lowest Cost Solar Panels in America"
          leftBtnText="Order Now"
          rightBtnText="Learn More"
          itemId="panels"
        />
        <Sidebar sidebar={sidebar} setSidebar={setSidebar} />
      </div>
    </div>
  );
};

export default SolarPanels;
