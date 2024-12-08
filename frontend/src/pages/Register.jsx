import React, { useEffect, useState } from "react";
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
import { Link } from "react-router-dom";
import { Value } from "sass";
import { login } from "../store/slices/authSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setLoading } from "../store/slices/loadingSlice";
import toast from "react-hot-toast";
import { Button } from "antd";
import { useGoogleLogin } from "@react-oauth/google";
import googlepng from "../assests/img/google.png";
import { fetchUserDetails } from "../store/slices/userSlice";
import axios from "axios";
import { ApiClient } from "../utils/ApiClient";

function Register() {
  const [userInfo, setUserInfo] = useState([]);
  const [form, setForm] = useState({
    email: "",
    password: "",
    Fname: "",
    Lname: "",
    rpassword: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
          await axios
            .post(`${process.env.REACT_APP_BACKEND_URL}/user/googleRegister`, {
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
      .catch((error) => {}
        // console.log(error)
    );
  };

  const handleGRegister = useGoogleLogin({
    onSuccess: (response) => setUserInfo(response),
    onError: (error) => {}
      // console.log(`Login Failed: ${error}`),
  });

  const handleRegister = () => {
    dispatch(setLoading(true));
    ApiClient
      .post("/user/register", {
        email: form.email,
        password: form.password,
        name: form.Fname + " " + form.Lname,
      })
      .then(async (res) => {
        if (res.status === 201) {
          ApiClient
            .post("/user/login", form)
            .then((res) => {
              dispatch(login(res.data));
              localStorage.setItem("token", res.data.accessToken);
              localStorage.setItem("refreshToken", res.data.refreshToken);
              dispatch(setLoading(false));
              navigate("/");
              dispatch(fetchUserDetails());
              toast.success(`Welcome ${res.data.name}`);
              setForm({
                email: "",
                password: "",
                Fname: "",
                Lname: "",
                rpassword: "",
              });
            })
            .catch((err) => {
              //console.log(err);
              toast.error(`Error: ${err.response.data.message}`);
            });
        }
      })
      .catch((err) => {
        dispatch(setLoading(false));
        navigate("/register");
        toast.error(`Error: ${err.response.data.message}`);
      });
  };

  return (
    <MDBContainer className="my-5 w-25">
      <MDBCard>
        <MDBRow className="g-0">
          

          <MDBCol md="12">
            <MDBCardBody className="d-flex flex-column">
          

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
              <div className="row">
                <div className="col-6">
                  <MDBInput
                    onChange={(e) => {
                      setForm({ ...form, Fname: e.target.value });
                    }}
                    wrapperClass="mb-4"
                    label="First Name"
                    id="formControlLg"
                    type="name"
                    size="lg"
                    name="name"
                  />
                </div>
                <div className="col-6">
                  <MDBInput
                    wrapperClass="mb-4"
                    label="Second Name"
                    id="formControlLg"
                    type="name"
                    size="lg"
                    name="name"
                    onChange={(e) => {
                      setForm({ ...form, Lname: e.target.value });
                    }}
                  />
                </div>
              </div>

              <MDBInput
                wrapperClass="mb-4"
                label="Email address"
                id="formControlLg"
                type="email"
                size="lg"
                name="email"
                onChange={(e) => {
                  setForm({ ...form, email: e.target.value });
                }}
              />
              <MDBInput
                wrapperClass="mb-4"
                label="Password"
                id="formControlLg"
                type="password"
                size="lg"
                name="password"
                onChange={(e) => {
                  setForm({ ...form, password: e.target.value });
                }}
              />
              <MDBInput
                wrapperClass="mb-4"
                label="Re Enter Password"
                id="formControlLg"
                type="password"
                size="lg"
                name="password"
                onChange={(e) => {
                  setForm({ ...form, rpassword: e.target.value });
                }}
              />

              <Button
                onClick={handleRegister}
                className="mb-4 px-5"
                color="dark"
                size="large"
                type="primary"
                disabled={
                  form.email === "" ||
                  form.password === "" ||
                  form.Fname === "" ||
                  form.Lname === "" ||
                  form.rpassword === "" ||
                  form.password !== form.rpassword
                }
              >
                Register
              </Button>

              {/* <a className="small text-muted" href="#!">
                Forgot password?
              </a> */}
              <p className="mb-5 pb-lg-2" style={{ color: "#393f81" }}>
                Already have an account?{" "}
                <Button type="primary" className=" btn-primary text-white font-weight-bold" onClick={()=>{navigate("/login")}}>
                  Login
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

export default Register;
