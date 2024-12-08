import { Route, Routes, Outlet } from "react-router";
import { Navbar } from "./components/Navbar";
import React, { useEffect } from "react";
// import "./assests/css/style.min.css";
import "./assests/lib/flaticon/font/flaticon.css";
import { Home } from "./pages/Home";
import { Contact } from "./pages/Contact";
import { useState } from "react";
import { BackTotop } from "./components/BackTotop";
import Login from "./pages/Login";
import Register from "./pages/Register";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { useLocation } from "react-router-dom";
import { Dashboard } from "./pages/Dashboard";
import { ApiClient } from "./utils/ApiClient";
import jwtDecode from "jwt-decode";
import { useDispatch, useSelector } from "react-redux";
import {
  logout,
  login,
  updateUserDetails,
  getUser,
} from "./store/slices/authSlice";
import { LoadingOutlined } from "@ant-design/icons";
import AdminProtectedRoute from "./routes/AdminProtectedRoute";
import { Profile } from "./pages/Profile";
import { fetchUserDetails } from "./store/slices/userSlice";

function App() {
  const data0 = `
  888888ba           oo dP       dP 
  88     8b             88       88 
  88aaaa8P' dP    dP dP 88 .d888b88 
  88    8b. 88    88 88 88 88    88 
  88    .88 88.  .88 88 88 88.  .88 
  88888888P  88888P  dP dP  88888P8 
 `;

  const data1 = `
 d8888888P                            
     .d8'                            
    .d8'   .d8888b. 88d888b. .d8888b. 
  .d8'     88'   88 88'   88 88ooood8 
 d8'       88.  .88 88    88 88.  ... 
 Y8888888P  88888P' dP    dP  88888P'
 `;

  const data2 = `
           d888888P d888888P 
              88       88    
              88       88    
              88       88    
              88       88    
           d888888P    dP   
 `;

  const massage = `Welcome to BuildZone IT`;

  const conditionalConsoleLog = (message, color) => {
    const shouldShowLogs = true; // Set this flag based on your condition

    if (shouldShowLogs) {
      console.log(`%c${message}`, `color: ${color};`);
    }
  };

  const fetchdata = async () => {
    conditionalConsoleLog(data0, "red");
    conditionalConsoleLog(data1, "green");
    conditionalConsoleLog(data2, "blue");
  };

  useEffect(() => {
    fetchdata();
    console.error = function () {};
    console.warn = function () {};
    console.assert = function () {};
    console.info = function () {};
    console.debug = function () {};
    console.info = function () {};
  }, []);
  const location = useLocation();
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const user = useSelector(getUser);

  useEffect(() => {
    verifyToken();
  }, []);

  const verifyToken = async () => {
    const token = localStorage.getItem("token");
    if (token != null) {
      const decodedJwt = jwtDecode(token);

      const user = {
        isLoggedIn: false,
        accessToken: localStorage.getItem("token"),
        refreshToken: localStorage.getItem("refreshToken"),
        name: decodedJwt.name,
        id: decodedJwt._id,
        email: decodedJwt.email,
        role: decodedJwt.role,
      };

      await ApiClient.post(`/user/verify`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => {
          user.isLoggedIn = true;
          dispatch(updateUserDetails(user));
          dispatch(fetchUserDetails());
          // console.log(res);
        })
        .catch((err) => {
          dispatch(logout());
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  };

  return (
    <>
      {loading ? (
        <div className="d-flex min-vh-100 min-vw-100 justify-content-center align-items-center">
          <LoadingOutlined style={{ fontSize: "64px", color: "#e31c25" }} />
        </div>
      ) : (
        <div>
          <Navbar />
          <div className="">
            <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/" element={<Home />} />
              <Route
                element={
                  <div>
                    <Outlet />
                  </div>
                }
              >
                <Route element={<AdminProtectedRoute />}>
                  <Route
                    path="/dashboard/*"
                    element={
                      <div>
                        <Dashboard />
                      </div>
                    }
                  />
                </Route>
              </Route>
              <Route
                path="/login"
                element={
                  <div>
                    <Login />
                  </div>
                }
              />
              <Route
                path="/register"
                element={
                  <div>
                    <Register />
                  </div>
                }
              />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
          {/* <Footer /> */}
          <BackTotop />
        </div>
      )}
    </>
  );
}

export default App;
