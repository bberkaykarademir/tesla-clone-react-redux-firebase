import React, { useState, useEffect } from "react";
import { Routes, Route, Link, Navigate } from "react-router-dom";
import Home from "./components/Home";
import Model3 from "./components/Models/Model-3";
import ModelS from "./components/Models/Model-S";
import ModelX from "./components/Models/Model-X";
import ModelY from "./components/Models/Model-Y";
import SolarPanels from "./components/Models/SolarPanels";
import SolarRoof from "./components/Models/SolarRoof";
import CreateAcc from "./components/Acc/CreateAcc";
import SignIn from "./components/Acc/SignIn";
import Account from "./components/Acc/Account";
import { useSelector } from "react-redux";


const App = () => {
  const [sidebar, setSidebar] = useState(false);
  const {user}= useSelector(state=>state.auth)
  useEffect(() => {
    isOpen();
  }, [sidebar]);
  const isOpen = () => {
    if (sidebar) {
      document.body.classList.add("sidebaropen");
    } else {
      document.body.classList.remove("sidebaropen");
    }
  };
  return (
    <Routes>
      <Route
        path="/"
        element={<Home sidebar={sidebar} setSidebar={setSidebar} />}
      />
      <Route
        path="/Models"
        element={<ModelS sidebar={sidebar} setSidebar={setSidebar} />}
      />
      <Route
        path="/Model3"
        element={<Model3 sidebar={sidebar} setSidebar={setSidebar} />}
      />
      <Route
        path="/Modelx"
        element={<ModelX sidebar={sidebar} setSidebar={setSidebar} />}
      />
      <Route
        path="/Modely"
        element={<ModelY sidebar={sidebar} setSidebar={setSidebar} />}
      />
      <Route
        path="/Solarroof"
        element={<SolarRoof sidebar={sidebar} setSidebar={setSidebar} />}
      />
      <Route
        path="/Solarpanels"
        element={<SolarPanels sidebar={sidebar} setSidebar={setSidebar} />}
      />
      <Route path="/CreateAcc" element={<CreateAcc />} />
      <Route
        path="/Account"
        element={
          <>
            {user ? (
              <Account user={user} sidebar={sidebar} setSidebar={setSidebar} />
            ) : (
              <Navigate to="/SignIn" />
            )}
          </>
        }
      />
      <Route
        path="/SignIn"
        element={<>{user ? <Navigate to="/Account" /> : <SignIn />}</>}
      />
    </Routes>
  );
};

export default App;
