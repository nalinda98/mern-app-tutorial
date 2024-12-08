import React from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBInput,
} from "mdb-react-ui-kit";
import { useState } from "react";
import { Link } from "react-router-dom";
import { login } from "../store/slices/authSlice";

import { useDispatch } from "react-redux";
// import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import { useNavigate } from "react-router-dom";
import { setLoading } from "../store/slices/loadingSlice";
import { ApiClient } from "../utils/ApiClient";
import toast from "react-hot-toast";
import { Button } from "antd";
import { useGoogleLogin } from "@react-oauth/google";
import { useEffect } from "react";
import googlepng from "../assests/img/google.png";
import { fetchUserDetails } from "../store/slices/userSlice";
import axios from "axios";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = () => {
    ApiClient.post("/user/login", form)
      .then((res) => {
        //console.log(res);
        dispatch(login(res.data));
        localStorage.setItem("token", res.data.accessToken);
        localStorage.setItem("refreshToken", res.data.refreshToken);
        dispatch(setLoading(false));
        navigate("/");
        dispatch(fetchUserDetails());
        toast.success(`Welcome ${res.data.name}`);
      })
      .catch((err) => {
        //console.log(err);
        toast.error("Invalid Credentials");
      });
  };

  const [userInfo, setUserInfo] = useState([]);

  useEffect(() => {
    userInfo && fetchGRegister();
  }, [userInfo]);

  const fetchGRegister = async () => {
    await axios
      .get(
        `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${userInfo.access_token}`,
        {
          headers: {
            Authorization: `Bearer ${userInfo.access_token}`,
            Accept: "application/json",
          },
        }
      )
      .then(async (response) => {
        try {
          await ApiClient.post(`/user/googleRegister`, {
            email: response.data.email,
            password: response.data.id,
            name: response.data.name,
          })
            .then((response) => {
              dispatch(login(response.data));
              toast.success("User Login Successfully");
              localStorage.setItem("token", response.data.accessToken);
              dispatch(fetchUserDetails());
              navigate("/");
            })
            .catch((error) => {
              // console.log(error.response.data.message);
              toast.error(`${error.response?.data?.message}`);
            });
        } catch (error) {
          //console.log(error);
        }
      })
      .catch(
        (error) => {}
        //console.log(error)
      );
  };

  const handleGRegister = useGoogleLogin({
    onSuccess: (response) => setUserInfo(response),
    onError: (error) => {},
    // console.log(`Login Failed: ${error}`),
  });

  const [form, setForm] = useState([]);
  return (
    <MDBContainer className="my-5 w-25">
      <MDBCard>
        <MDBRow className="g-0">
          

          <MDBCol md="12">
            <MDBCardBody className="d-flex flex-column justify-content-center">
              

              <h5
                className="fw-normal my-4 pb-3 align-self-center"
                style={{ letterSpacing: "1px" }}
              >
                Sign into your account
              </h5>
              <div className="d-flex justify-content-center">
                <button
                  className="border-0 bg-transparent"
                  style={{
                    width: "auto",
                  }}
                >
                  <img
                    src={googlepng}
                    alt="google"
                    onClick={handleGRegister}
                    style={{ width: "auto", height: "50px" }}
                  />
                </button>
              </div>
              <br />
              <div className="d-flex justify-content-center">
                <span>
                  <b>OR</b>
                </span>
              </div>
              <br />
              <MDBInput
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                wrapperClass="mb-4"
                label="Email address"
                id="formControlLg"
                type="email"
                size="lg"
              />
              <MDBInput
                onChange={(e) => setForm({ ...form, password: e.target.value })}
                wrapperClass="mb-4"
                label="Password"
                id="formControlLg"
                type="password"
                size="lg"
              />

              <Button
                className="mb-4 px-5"
                color="dark"
                size="large"
                type="primary"
                onClick={() => handleLogin()}
                disabled={!form.email || !form.password}
              >
                Login
              </Button>
              {/* <a className="small text-muted" href="#!">
                Forgot password?
              </a> */}
              <p className="mb-5 pb-lg-2" style={{ color: "#393f81" }}>
                Don't have an account?{" "}
                <Button type="primary" className=" btn-primary text-white font-weight-bold" onClick={()=>{navigate("/register")}}>
                  Register
                  {/* <Link to="/register" style={{ color: "#393f81" }}>
                    Register here
                  </Link> */}
                </Button>
              </p>
            </MDBCardBody>
          </MDBCol>
        </MDBRow>
      </MDBCard>
    </MDBContainer>
  );
}

export default Login;
