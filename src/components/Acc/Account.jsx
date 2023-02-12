import React from "react";
import Header from "../Header";
import { useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { logout as logoutHandler } from "../store/auth";
import { TiHome } from "react-icons/ti";
import { BsPerson, BsLightningChargeFill } from "react-icons/bs";
import { MdPayment, MdAllInbox, MdHistory, MdLogout } from "react-icons/md";
import Sidebar from "../Sidebar";

const Account = ({ setSidebar, sidebar, user }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const signOut = () => {
    dispatch(logoutHandler(user));
    navigate("/");
  };
  return (
    <div className="acc">
      <div
        id="overlay"
        className={!sidebar ? "back" : null}
        onClick={() => {
          setSidebar(false);
        }}
      ></div>
      <Header sidebar={sidebar} setSidebar={setSidebar} />
      <Sidebar sidebar={sidebar} setSidebar={setSidebar} />
      <div className={sidebar ? "main blur" : "main"}>
        <div className="navbar">
          <a href="#">
            <TiHome />
            <p className="navbar-text">Dashboard</p>
          </a>
          <a href="#">
            <BsPerson />
            <p className="navbar-text">Profile Settings</p>
          </a>
          <a href="#">
            <MdPayment />
            <p className="navbar-text">Payment Method</p>
          </a>
          <a href="#">
            <BsLightningChargeFill />
            <p className="navbar-text">Charging</p>
          </a>
          <a href="#">
            <MdAllInbox />
            <p className="navbar-text">Loot Box</p>
          </a>
          <a href="#">
            <MdHistory />
            <p className="navbar-text">Order History</p>
          </a>

          <Link to={"/"} onClick={signOut}>
            <MdLogout />
            <p className="navbar-text">Sign Out</p>
          </Link>
        </div>
        <div className="dashboard">
          <h1>{user.displayName + "'s " + "Dashboard"}</h1>
          <div className="box-container">
            <div className="box box1">
              <div className="desc">
                <p>Order Tesla Solar</p>
                <p>Produce energy to power your Tesla life</p>
                <a href="#">View Solar</a>
              </div>
            </div>
            <div className="box box2">
              <div className="desc">
                <p>Reserve a Car</p>
                <p>Browse our models</p>
                <a href="#">Shop Now</a>
              </div>
            </div>
            <div className="box box3">
              <div className="desc">
                <p>Purchased a car from a third party?</p>
                <a href="#">Add</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
