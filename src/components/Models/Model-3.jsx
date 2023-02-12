import React from "react";
import Header from "../Header";
import Section from "../Section";
import Sidebar from "../Sidebar";
import Interior from "./Interior";

const Model3 = ({ sidebar, setSidebar }) => {
  return (
    <div>
      <div>
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
          backgroundImg="url('/img/model3_2.jpeg')"
          title="Model 3"
          description="Plaid"
          itemId="model3"
          range="358"
          speed="3.1"
          top="162"
        />
        <Interior />
        <Sidebar sidebar={sidebar} setSidebar={setSidebar} />
      </div>
    </div>
  );
};

export default Model3;
