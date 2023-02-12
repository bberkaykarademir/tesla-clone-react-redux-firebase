import React from 'react'
import Header from "../Header";
import Section from "../Section";
import Sidebar from "../Sidebar";
import Interior from "./Interior";

const ModelS = ({ sidebar, setSidebar }) => {
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
          backgroundImg="url('/img/model-S.jpg')"
          title="Model S"
          description="Plaid"
          itemId="modelS"
          range='396'
          speed='1.99'
          top='200'
          hp='1,020'
        />
        <Interior />
        <Sidebar sidebar={sidebar} setSidebar={setSidebar} />
      </div>
    </div>
  )
}

export default ModelS