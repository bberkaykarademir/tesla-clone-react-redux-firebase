import React from "react";
import Header from "../Header";
import Section from "../Section";
import Sidebar from "../Sidebar";
import Interior from "./Interior";

const ModelY = ({ sidebar, setSidebar }) => {
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
          backgroundImg="url('/img/model_y_1.jpeg')"
          title="Model Y"
          description="Plaid"
          itemId="modelY"
          range="330"
          speed="3.5"
          top="155"
        />
        <Interior />
        <Sidebar sidebar={sidebar} setSidebar={setSidebar} />
      </div>
    </div>
  );
};

export default ModelY;
