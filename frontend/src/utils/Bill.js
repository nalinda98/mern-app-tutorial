import React, { useEffect } from "react";
import boostLogo from "../assests/img/blacklogo.png";
import ReactToPrint from "react-to-print";
import { useSelector } from "react-redux";
import Barcode from "react-barcode";
import { Radio, Input, Form } from "antd";
import generatePDF from "react-to-pdf";

export const Bill = ({
  tempItem,
  total,
  subTotal,
  serviceCharge,
  discount,
  barcode,
  customer,
  targetRef,
  setDiscountValue,
  discountValue,
  fine = 0,
}) => {

  console.log("tempItem", tempItem);
  console.log("total", total);
  console.log("subTotal", subTotal);
  // console.log("serviceCharge", serviceCharge);
  console.log("discount", discount);
  console.log("barcode", barcode);
  console.log("customer", customer);
  // console.log("targetRef", targetRef);
  // console.log("setDiscountValue", setDiscountValue);
  console.log("discountValue", discountValue);
  console.log("fine", fine);

  const user = useSelector((state) => state.auth.name);

  const [discountV, setDiscountV] = React.useState(0);
  useEffect(() => {
    setDiscountValue(discount + Number(discountV));
  }, [discountV]);

  useEffect(() => {
    setDiscountV(0);
  }, [barcode]);

  return (
    <div>
      <div className="w-100 d-flex justify-content-center row">
        <div
          ref={targetRef}
          className="d-flex justify-content-center"
          style={{ width: "420px" }}
        >
          <div id="invoice-POS">
            <center id="top">
              <div className="logo"></div>
              <div className="info">
                {/* <h2>BOOST</h2> */}
                <img src={boostLogo} style={{ width: "150px" }} alt="boost" />
              </div>
            </center>

            <div id="mid" className="d-flex justify-content-center">
              <div className="info ">
                <p className="d-flex justify-content-center">
                  <b> Sports Complex</b>
                </p>
                <p
                  className="d-flex justify-content-center"
                  style={{ marginTop: "-20px" }}
                >
                  <b>73, Barns Rathwaththa Mawatha, Balangoda.</b>
                </p>
                <p
                  className="d-flex justify-content-center"
                  style={{ marginTop: "-20px" }}
                >
                  <b>+94 77 899 8588 | boostsports5@gmail.com</b>
                </p>
              </div>
            </div>
            <div
              className="w-100"
              style={{ borderStyle: "dotted", marginTop: "-10px" }}
            ></div>
            <div className="row">
              <div className="col-6">
                <h6>Customer : {customer?.split(" ")[0]}</h6>
              </div>
              <div className="col-6 d-flex justify-content-end">
                <h6>Invoice No: {barcode?.slice(-8)}</h6>
              </div>
            </div>
            <div className="row">
              <div className="col-6">
                <h6>
                  Date :{" "}
                  {`${new Date().toISOString().split("T")[0]} | ${
                    new Date().toTimeString()?.split(" ")[0]?.split(":")[0]
                  }:${new Date().toTimeString()?.split(" ")[0]?.split(":")[1]}
              `}
                </h6>
              </div>
              <div className="col-6 d-flex justify-content-end">
                <h6>Cashier: {`${user?.split(" ")[0]}`}</h6>
              </div>
            </div>
            <div
              className="w-100"
              style={{ borderStyle: "dotted", marginTop: "" }}
            ></div>
            <div>
              <div id="bot">
                <div className="row">
                  <div className="col-6">
                    <h5>Item</h5>
                  </div>
                  <div className="col-6 d-flex justify-content-end">
                    <h5>Sub Total</h5>
                  </div>
                </div>

                {tempItem?.map((item) => {
                  return (
                    <div className="row">
                      <div className="col-6">
                        <h6>{item.name}</h6>
                        <h6 style={{ marginTop: "-8px" }}>
                          {`Rs.${item.price} X ${item.count}` +
                            (item?.noOfHours === undefined
                              ? ""
                              : ` X ${item?.noOfHours}`)}
                        </h6>
                      </div>
                      <div className="col-6 d-flex flex-column align-items-end">
                        <h6>
                          <br></br>
                        </h6>
                        <h6 style={{ marginTop: "-8px" }}>
                          Rs.
                          {item.price *
                            item.count *
                            (item?.noOfHours === undefined
                              ? 1
                              : item?.noOfHours)}
                          .00
                        </h6>
                      </div>
                    </div>
                  );
                })}
                <div
                  className="w-100"
                  style={{ borderStyle: "dotted", marginTop: "" }}
                ></div>
                {tempItem.length > 1 && (
                  <div className="row">
                    <div className="col-6">
                      <h6> Total </h6>
                    </div>
                    <div className="col-6 d-flex justify-content-end">
                      <h6> {`Rs.${total}.00`}</h6>
                    </div>
                  </div>
                )}
                {serviceCharge > 0 && (
                  <div className="row">
                    <div className="col-6">
                      <h6> Service Charge </h6>
                    </div>
                    <div className="col-6 d-flex justify-content-end">
                      <h6> {`Rs.${serviceCharge}.00`}</h6>
                    </div>
                  </div>
                )}
                {discountValue > 0 && (
                  <div className="row">
                    <div className="col-6">
                      <h6> Discount </h6>
                    </div>
                    <div className="col-6 d-flex justify-content-end">
                      <h6> {`Rs.${Number(discountValue)}.00`}</h6>
                    </div>
                  </div>
                )}
                {fine > 0 && (
                  <div className="row">
                    <div className="col-6">
                      <h6> Additional time </h6>
                    </div>
                    <div className="col-6 d-flex justify-content-end">
                      <h6> {`Rs.${fine}.00`}</h6>
                    </div>
                  </div>
                )}
                <div className="row">
                  <div className="col-6">
                    <h4> Net Total : </h4>
                  </div>
                  <div className="col-6 d-flex justify-content-end">
                    <h4> {`Rs.${subTotal - discountValue + fine}.00`}</h4>
                  </div>
                </div>
                <div
                  className="w-100"
                  style={{ borderStyle: "dotted", marginTop: "" }}
                ></div>

                <div id="legalcopy">
                  <p className="legal d-flex justify-content-center">
                    <strong>
                      <b>Have a Nice Day! Thanks for Your Kind Visit!</b>
                    </strong>
                  </p>
                </div>
              </div>
            </div>

            <div
              className="d-flex justify-content-center"
              style={{ marginTop: "-20px" }}
            >
              <Barcode value={barcode} />
            </div>
            <div
              className="w-100"
              style={{ borderStyle: "dotted", marginTop: "" }}
            ></div>
            <div id="legalcopy">
              <p className="legal d-flex justify-content-center">
                <>
                  <>System by BuildZone IT Solutions. Tel : 076 222 5001</>
                </>
              </p>
            </div>
          </div>
        </div>
        {/* <br /> */}
        <br />
        <div className="w-100 d-flex justify-content-center row">
          <Form.Item label="Discount Price">
            <Input
              type="number"
              size="large"
              value={discountV}
              placeholder="Discount Amount"
              onChange={(e) => setDiscountV(e.target.value)}
            />
          </Form.Item>
        </div>
      </div>
    </div>
  );
};
