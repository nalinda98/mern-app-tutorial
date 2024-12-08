import { Button, Card } from "antd";
import React, { useEffect, useState } from "react";
import { Avatar } from "antd";
import {
  DeleteOutlined,
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import image from "../assests/img/profile/user_profile.jpg";
import adminImage from "../assests/img/profile/admin_profile.jpg";
import {
  fetchUserDetails,
  getStatus,
  getUser,
  resetUser,
} from "../store/slices/userSlice.js";
import { Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { Col, Row } from "antd";
import dayjs from "dayjs";
import { useNavigate, useParams, useRevalidator } from "react-router-dom";
import { ApiClient } from "../utils/ApiClient.jsx";
import toast from "react-hot-toast";
import { render } from "@testing-library/react";
import StatusTag from "../components/Dashboard/StatusTag.js";
import Title from "antd/es/skeleton/Title.js";

const { Meta } = Card;

export const Profile = () => {
  const userProfileId = useParams().id;
  const user = useSelector(getUser);
  const userDetailsStatus = useSelector(getStatus);
  const [gymSubscription, setGymSubscription] = useState(null);
  const [poolSubscription, setPoolSubscription] = useState(null);
  const [poolEvents, setPoolEvents] = useState(null);
  const [badmintonEvents, setBadmintonEvents] = useState(null);
  const [cricketEvents, setCricketEvents] = useState(null);
  const [userDetails, setUserDetails] = useState(null);

  const dispatch = useDispatch();

  useEffect(() => {
    if (userProfileId !== user?._id && user?.role == "admin") {
      getOtherUserDetails();
    } else {
      dispatch(fetchUserDetails());
    }
  }, [userProfileId]);

  useEffect(() => {
    if (userProfileId == user?._id) {
      setUserDetails(user);
    }
  }, [user]);

  const getOtherUserDetails = async () => {
    try {
      await ApiClient.get(`/user/getUser/${userProfileId}`)
        .then((response) => {
          setUserDetails(response.data);
        })
        .catch((error) => {
          toast.error("Failed to fetch user details");
        });
    } catch (error) {
      //console.log(error);
    }
  };

  useEffect(() => {
    console.log(userDetails);
  }, [userDetails]);

  const formattedTime = (time) => {
    return dayjs(time).format("HH:mm");
  };

  const formattedDate = (date) => {
    return dayjs(date).format(" YYYY MMM DD");
  };

  useEffect(() => {
    if (userDetails) {
      setGymSubscription(userDetails.gymSubscription);
      setPoolSubscription(userDetails.poolSubscription);
      setPoolEvents(userDetails.poolEvents);
      setBadmintonEvents(prepareEventTableData(userDetails.badmintonEvents));
      setCricketEvents(prepareEventTableData(userDetails.cricketEvents));
      setPoolEvents(preparePoolEventTableData(userDetails.poolEvents));
      //console.log(user);
    }
  }, [userDetails]);

  const deleteGymSubscription = async () => {
    try {
      await ApiClient.delete(`/gymSubscription/${gymSubscription._id}`)
        .then((response) => {
          toast.success("Gym Subscription Deleted Successfully");
          // dispatch(resetUser())
          dispatch(fetchUserDetails());
        })
        .catch((error) => {
          toast.error("Error Deleting Gym Subscription");
        });
    } catch (error) {
      //console.log(error);
    }
  };

  const prepareEventTableData = (data) => {
    //console.log(data);
    return data
      ?.filter((item) => item.active)
      ?.map((item) => ({
        ...item,
        date: formattedDate(item.startTime),
        checkIn: formattedTime(item.startTime),
        checkOut: formattedTime(item.endTime),
      }));
  };

  const preparePoolEventTableData = (data) => {
    //console.log(data);
    return data.map((item) => ({
      ...item,
      date: formattedDate(item.startTime),
      checkIn: formattedTime(item.startTime),
      checkOut: formattedTime(item.endTime),
    }));
  };

  const badmintonEventsColumns = [
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Check-In",
      dataIndex: "checkIn",
      key: "checkIn",
    },
    {
      title: "Check-Out",
      dataIndex: "checkOut",
      key: "checkOut",
    },
    {
      title: "Usage Status",
      dataIndex: "usageStatus",
      key: "usageStatus",
      render: (text) => (
        <>
          <StatusTag status={text} />
        </>
      ),
    },
    {
      title: "Payment Status",
      dataIndex: "paymentStatus",
      key: "paymentStatus",
      render: (text) => (
        <>
          <StatusTag status={text} />
        </>
      ),
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => {
        return record.usageStatus === "Pending" &&
          record.paymentStatus === "Pending" ? (
          <Button
            className="d-flex align-content-center h-100"
            onClick={() => deleteBadmintonEvent(record._id)}
          >
            <DeleteOutlined />
          </Button>
        ) : null;
      },
    },
  ];

  const cricketEventsColumns = [
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Check-In",
      dataIndex: "checkIn",
      key: "checkIn",
    },
    {
      title: "Check-Out",
      dataIndex: "checkOut",
      key: "checkOut",
    },
    {
      title: "Usage Status",
      dataIndex: "usageStatus",
      key: "usageStatus",
      render: (text) => (
        <>
          <StatusTag status={text} />
        </>
      ),
    },
    {
      title: "Payment Status",
      dataIndex: "paymentStatus",
      key: "paymentStatus",
      render: (text) => (
        <>
          <StatusTag status={text} />
        </>
      ),
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => {
        return record.usageStatus === "Pending" &&
          record.paymentStatus === "Pending" ? (
          <Button
            className="d-flex align-content-center h-100"
            onClick={() => deleteCricketEvent(record._id)}
          >
            <DeleteOutlined />
          </Button>
        ) : null;
      },
    },
  ];

  const poolReservationsColumns = [
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Check-In",
      dataIndex: "checkIn",
      key: "checkIn",
    },
    {
      title: "Check-Out",
      dataIndex: "checkOut",
      key: "checkOut",
    },
    {
      title: "# of Children",
      dataIndex: "noOfChild",
      key: "noOfChild",
    },
    {
      title: "# of Adult",
      dataIndex: "noOfAdult",
      key: "noOfAdult",
    },
    {
      title: "Usage Status",
      dataIndex: "usageStatus",
      key: "usageStatus",
      render: (text) => (
        <>
          <StatusTag status={text} />
        </>
      ),
    },
    {
      title: "Payment Status",
      dataIndex: "paymentStatus",
      key: "paymentStatus",
      render: (text) => (
        <>
          <StatusTag status={text} />
        </>
      ),
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => {
        return record.usageStatus === "Pending" &&
          record.paymentStatus === "Pending" ? (
          <Button
            className="d-flex align-content-center h-100"
            onClick={() => deletePoolEvent(record._id)}
          >
            <DeleteOutlined />
          </Button>
        ) : null;
      },
    },
  ];

  const deletePoolSubscription = async () => {
    try {
      await ApiClient.delete(`/poolSubscription/${poolSubscription._id}`)
        .then((response) => {
          toast.success("Pool Subscription Deleted Successfully");
          dispatch(fetchUserDetails());
        })
        .catch((error) => {
          toast.error("Error Deleting Pool Subscription");
        });
    } catch (error) {
      //console.log(error);
    }
  };

  const deleteBadmintonEvent = async (id) => {
    try {
      await ApiClient.delete(`/badminton-event/delete/${id}`)
        .then((response) => {
          toast.success("Badminton Event Deleted Successfully");
          dispatch(fetchUserDetails());
        })
        .catch((error) => {
          toast.error("Error Deleting Badminton Event", error);
        });
    } catch (error) {
      //console.log(error);
    }
  };

  const deleteCricketEvent = async (id) => {
    try {
      await ApiClient.delete(`/cricket-event/delete/${id}`)
        .then((response) => {
          toast.success("Cricket Event Deleted Successfully");
          dispatch(fetchUserDetails());
        })
        .catch((error) => {
          toast.error("Error Deleting Cricket Event", error);
        });
    } catch (error) {
      //console.log(error);
    }
  };

  const deletePoolEvent = async (id) => {
    try {
      await ApiClient.delete(`/pool-event/${id}`)
        .then((response) => {
          toast.success("Pool Event Deleted Successfully");
          dispatch(fetchUserDetails());
        })
        .catch((error) => {
          toast.error("Error Deleting Pool Event", error);
        });
    } catch (error) {
      //console.log(error);
    }
  };

  return (
    <div className="w-100 container">
      {userDetailsStatus != "succeeded" ? (
        <div className="d-flex justify-content-center align-items-center w-100 h-100">
          <div className="spinner-border text-primary" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      ) : (
        <div className="row  d-flex justify-content-center align-content-center">
          <div className="col-md-3">
            <div>
              <Card
                style={{
                  width: "100%",
                }}
                cover={
                  <img
                    alt="profilePic "
                    src={userDetails?.role == "user" ? image : adminImage}
                    className="p-4 d-flex flex-column justify-content-center"
                    style={{ width: "50%", height: "50%" }}
                  />
                }
                actions={[<EditOutlined key="edit" />]}
              >
                <Meta
                  className=" d-flex flex-column justify-content-center"
                  title={userDetails?.name}
                  description={`${userDetails?.role}`}
                />
                <p>{userDetails?.email}</p>
                {userDetails?.membershipNumber && (
                  <p>Membership Number : {userDetails?.membershipNumber}</p>
                )}
              </Card>
            </div>
          </div>
          <div className="col-md-9">
            <Row gutter={24} className="my-4">
              <Col span={24}>
                <Card title="Gym Subscription" bordered={false}>
                  {gymSubscription ? (
                    <>
                      <Card
                        style={{
                          width: "100%",
                        }}
                        actions={[
                          <div>
                            <h6>Subscription</h6>
                            <button
                              className="btn text-white font-weight-bold"
                              style={{
                                "background-color":
                                  gymSubscription.subscriptionStatus ==
                                  "Pending"
                                    ? "#808080"
                                    : gymSubscription.subscriptionStatus ==
                                      "Active"
                                    ? "#00FF00"
                                    : gymSubscription.subscriptionStatus ==
                                      "Inactive"
                                    ? "#dc3545"
                                    : "#000000",
                              }}
                            >
                              {/* "Pending","Active","Inactive","Closed" */}
                              {gymSubscription.subscriptionStatus}
                            </button>
                          </div>,
                          <div>
                            <h6>Payment</h6>
                            <button
                              className="btn text-white font-weight-bold"
                              style={{
                                "background-color":
                                  gymSubscription.paymentStatus == "Pending"
                                    ? "#808080"
                                    : gymSubscription.paymentStatus == "Paid"
                                    ? "#00FF00"
                                    : "#dc3545",
                              }}
                            >
                              {gymSubscription.paymentStatus}
                            </button>
                          </div>,
                          gymSubscription.paymentStatus == "Pending" &&
                            gymSubscription.subscriptionStatus == "Pending" && (
                              <button
                                className="btn text-white font-weight-bold"
                                style={{
                                  "background-color": "#FF0000",
                                }}
                                onClick={() => deleteGymSubscription()}
                              >
                                <DeleteOutlined />
                              </button>
                            ),
                        ]}
                      >
                        <Meta
                          title={gymSubscription.gymPackage?.displayName}
                          description={`This package is for ${
                            gymSubscription.gymPackage?.pax
                          } ${
                            gymSubscription.gymPackage?.pax == 1
                              ? "member"
                              : "members"
                          }. Subscription will be activated once you do the payment and it will stay active for ${
                            gymSubscription.gymPackage?.duration
                          } ${
                            gymSubscription.gymPackage?.duration == 1
                              ? "month"
                              : "months"
                          }.${
                            gymSubscription.gymPackage?.isThreadMill
                              ? " Threadmill is included."
                              : "Threadmill is not included"
                          }`}
                        />
                        <div>
                          <div className="w-100 d-flex justify-content-end mt-4 row">
                            <div className="col-6">
                              <h6>
                                Start:{" "}
                                {dayjs(gymSubscription.startDate).format(
                                  "DD : MMM : YYYY"
                                )}{" "}
                              </h6>
                              <h6>
                                End:{" "}
                                {dayjs(gymSubscription.endDate).format(
                                  "DD : MMM : YYYY"
                                )}{" "}
                              </h6>
                            </div>
                            <div className="col-6 justify-content-end">
                              <h5>{gymSubscription.amount} LKR</h5>
                            </div>
                          </div>
                        </div>
                      </Card>
                    </>
                  ) : (
                    "You are not subscribed to Gym"
                  )}
                </Card>
              </Col>
            </Row>
            <Row gutter={24} className="my-4">
              <Col span={24}>
                <Card title="Pool Subscription" bordered={false}>
                  {poolSubscription ? (
                    <>
                      <Card
                        style={{
                          width: "100%",
                        }}
                        actions={[
                          <div>
                            <h6>Subscription</h6>
                            <button
                              className="btn text-white font-weight-bold"
                              style={{
                                "background-color":
                                  poolSubscription.subscriptionStatus ==
                                  "Pending"
                                    ? "#808080"
                                    : poolSubscription.subscriptionStatus ==
                                      "Active"
                                    ? "#00FF00"
                                    : poolSubscription.subscriptionStatus ==
                                      "Inactive"
                                    ? "#dc3545"
                                    : "#000000",
                              }}
                            >
                              {/* "Pending","Active","Inactive","Closed" */}
                              {poolSubscription.subscriptionStatus}
                            </button>
                          </div>,
                          <div>
                            <h6>Payment</h6>
                            <button
                              className="btn text-white font-weight-bold"
                              style={{
                                "background-color":
                                  poolSubscription.paymentStatus == "Pending"
                                    ? "#808080"
                                    : poolSubscription.paymentStatus == "Paid"
                                    ? "#00FF00"
                                    : "#dc3545",
                              }}
                            >
                              {poolSubscription.paymentStatus}
                            </button>
                          </div>,

                          poolSubscription.paymentStatus == "Pending" &&
                          poolSubscription.subscriptionStatus == "Pending" ? (
                            <button
                              className="btn text-white font-weight-bold"
                              style={{
                                "background-color": "#FF0000",
                              }}
                              onClick={() => deletePoolSubscription()}
                            >
                              <DeleteOutlined />
                            </button>
                          ) : null,
                        ]}
                      >
                        <Meta
                          title={poolSubscription.poolPackage.displayName}
                          description={`This package is for ${
                            poolSubscription.poolPackage.pax
                          } ${
                            poolSubscription.poolPackage.pax == 1
                              ? "member"
                              : "members"
                          }. Subscription will be activated once you do the payment and it will stay active for ${
                            poolSubscription.poolPackage.duration
                          } ${
                            poolSubscription.poolPackage.duration == 1
                              ? "month"
                              : "months"
                          }.${
                            poolSubscription.poolPackage.isThreadMill
                              ? " Threadmill is included."
                              : "Threadmill is not included"
                          }`}
                        />
                        <div>
                          <div className="w-100 d-flex justify-content-end mt-4 row">
                            <div className="col-6">
                              <h6>
                                Start:{" "}
                                {dayjs(poolSubscription.startDate).format(
                                  "DD : MMM : YYYY"
                                )}{" "}
                              </h6>
                              <h6>
                                End:{" "}
                                {dayjs(poolSubscription.endDate).format(
                                  "DD : MMM : YYYY"
                                )}{" "}
                              </h6>
                            </div>
                            <div className="col-6 justify-content-end">
                              <h5>{poolSubscription.amount} LKR</h5>
                            </div>
                          </div>
                        </div>
                      </Card>
                    </>
                  ) : (
                    "You are not subscribed to Pool"
                  )}
                </Card>
              </Col>
            </Row>
            <Row gutter={24} className="my-4">
              <Col span={24}>
                <Card title="Pool Reservations" bordered={false}>
                  {userDetails?.poolEvents ? (
                    <>
                      <Table
                        columns={poolReservationsColumns}
                        dataSource={poolEvents}
                        scroll={{ y: 400, x: 720 }}
                      />
                    </>
                  ) : (
                    "You don't have any Pool reservations"
                  )}
                </Card>
              </Col>
            </Row>
            <Row gutter={24} className="my-4">
              <Col span={24}>
                <Card title="Badminton Court Reservations" bordered={false}>
                  {userDetails?.badmintonEvents ? (
                    <>
                      <Table
                        dataSource={badmintonEvents}
                        columns={badmintonEventsColumns}
                        scroll={{ y: 400, x: 720 }}
                      />
                    </>
                  ) : (
                    "You don't have any Badminton Court reservations"
                  )}
                </Card>
              </Col>
            </Row>
            <Row gutter={24} className="my-4">
              <Col span={24}>
                <Card title="Cricket Court Reservations" bordered={false}>
                  {userDetails?.cricketEvents ? (
                    <>
                      <Table
                        dataSource={cricketEvents}
                        columns={cricketEventsColumns}
                        scroll={{ y: 400, x: 720 }}
                      />
                    </>
                  ) : (
                    "You don't have any Cricket Court reservations"
                  )}
                </Card>
              </Col>
            </Row>
          </div>
        </div>
      )}
    </div>
  );
};
