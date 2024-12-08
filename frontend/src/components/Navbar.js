import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { logout } from "../store/slices/authSlice";
import { useDispatch } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { DownOutlined, SmileOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import imglogo from "../assests/img/lotteryLogo.png";
import { resetUser } from "../store/slices/userSlice";

export const Navbar = ({}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const active = location.pathname.split("/")[1];
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const username = useSelector((state) => state.auth.name);
  const role = useSelector((state) => state.auth.role);
  const id = useSelector((state) => state.auth.id);

  const handleLogout = async () => {
    localStorage.clear();
    dispatch(logout());
    dispatch(resetUser());
    navigate("/home");
    // setActive("Home");
  };

  const items = [
    {
      key: "1",
      label: (
        <Link
          to={`/profile/${id}`}
          className={`nav-item nav-link  ${
            location.pathname.split("/")[1] === "profile" ? "active" : ""
          }`}
          // onClick={() => {
          //   role === "user" ? navigate("/profile") : navigate("/dashboard");
          // }}
        >
          My Profile
        </Link>
      ),
    },
    (role === "admin" || role ==="super-admin")  && {
      key: "2",
      label: (
        <Link
          to="/dashboard"
          className={`nav-item nav-link  ${
            location.pathname.split("/")[1] === "dashboard" ? "active" : ""
          }`}
        >
          Dashboard
        </Link>
      ),
    },

    {
      key: "3",
      danger: true,
      label: (
        <Link
          to="/"
          className={`nav-item nav-link  ${
            location.pathname.split("/")[1] === "Logout" ? "active" : ""
          }`}
          onClick={handleLogout}
        >
          Logout
        </Link>
      ),
    },
  ];

  return (
    <div>
      <div className=" p-0 nav-bar">
        <nav className="navbar navbar-expand-lg bg-none navbar-dark py-3">
          <Link to="" className="navbar-brand">
            <img
              src={imglogo}
              alt="logo"
              style={{
                width: "150px",
                marginLeft: "10px",
                // height: "100%",
              }}
            />
          </Link>
          <button
            type="button"
            className="navbar-toggler"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarCollapse"
          >
            <div className="navbar-nav ml-auto p-4 bg-dark">
              <Link
                to="/home"
                className={`nav-item nav-link  ${
                  location.pathname.split("/")[1] === "home" ? "active" : ""
                }`}
              >
                Home
              </Link>

              <Link
                to="/contact"
                className={`nav-item nav-link  ${
                  location.pathname.split("/")[1] === "contact" ? "active" : ""
                }`}
              >
                Contact
              </Link>
              {isLoggedIn ? (
                <>
                  <Link className={`nav-item nav-link text-white `}>
                    <Dropdown
                      menu={{
                        items: items,
                      }}
                    >
                      <Link
                        onClick={(e) => e.preventDefault()}
                        className="text-white"
                      >
                        <Space>
                          {username}
                          <DownOutlined />
                        </Space>
                      </Link>
                    </Dropdown>
                  </Link>
                </>
              ) : (
                <Link
                  to="/login"
                  className={`nav-item nav-link  ${
                    location.pathname.split("/")[1] === "login" ? "active" : ""
                  } `}
                >
                  Login
                </Link>
              )}
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};
