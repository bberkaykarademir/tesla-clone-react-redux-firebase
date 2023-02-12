import React from "react";
import Header from "../Header";
import Section from "../Section";
import Sidebar from "../Sidebar";
import Interior from "./Interior";

const ModelX = ({ sidebar, setSidebar }) => {
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
          backgroundImg="url('/img/model-X.jpg')"
          title="Model X"
          description="Plaid"
          itemId="modelX"
          range="333"
          speed="2.5"
          top="175"
          hp="1,020"
        />
        <Interior />
        <Sidebar sidebar={sidebar} setSidebar={setSidebar} />
      </div>
    </div>
  );
};

export default ModelX;
