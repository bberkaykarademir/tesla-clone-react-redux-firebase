import React, { useState, useEffect } from "react";
import Header from "./Header";
import Section from "./Section";
import Sidebar from "./Sidebar";

const Home = ({ sidebar, setSidebar }) => {
  return (
    <div>
      <div className="home">
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
          backgroundImg="url('/img/model-s.jpg')"
          title="Model S"
          description="Schedule a Demo Drive"
          leftBtnText="Custom Order"
          rightBtnText="View Inventory"
          itemId="modelS"
        />
        <Section
          sidebar={sidebar}
          setSidebar={setSidebar}
          backgroundImg="url('/img/model-3.jpg')"
          title="Model 3"
          description="Schedule a Demo Drive"
          leftBtnText="Custom Order"
          rightBtnText="View Inventory"
          itemId="model3"
        />
        <Section
          sidebar={sidebar}
          setSidebar={setSidebar}
          backgroundImg="url('/img/model-x.jpg')"
          title="Model X"
          description="Schedule a Demo Drive"
          leftBtnText="Custom Order"
          rightBtnText="View Inventory"
          itemId="modelX"
        />
        <Section
          sidebar={sidebar}
          setSidebar={setSidebar}
          backgroundImg="url('/img/model-y.jpg')"
          title="Model Y"
          description="Schedule a Demo Drive"
          leftBtnText="Custom Order"
          rightBtnText="View Inventory"
          itemId="modelY"
        />
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
        <Section
          sidebar={sidebar}
          setSidebar={setSidebar}
          backgroundImg="url('/img/accessories.jpg')"
          title="Accessories"
          leftBtnText="Shop Now"
        />
        <Sidebar sidebar={sidebar} setSidebar={setSidebar} />
      </div>
    </div>
  );
};

export default Home;
