import React, { useState } from "react";
import "../assets/css/detail.scss";
import { Checkbox, Col, Input, Row } from "antd";

function Detail() {
  // state
  const listMenu = [
    {
      id: 1,
      type: "Credit & Debit Card",
      img: "",
    },
    {
      id: 2,
      type: "Pay With Points",
      img: "",
    },
    {
      id: 3,
      type: "Mobile Banking",
      img: "",
    },
    {
      id: 4,
      type: "Internet Banking",
      img: "",
    },
    {
      id: 5,
      type: "QR PromptPay",
      img: "",
    },
    {
      id: 6,
      type: "Bill Payment",
      img: "",
    },
    {
      id: 7,
      type: "e-Wallet",
      img: "",
    },
    {
      id: 8,
      type: "Kiosk Machine",
      img: "",
    },
  ];

  const listPayment = [
    {
      id: 1,
      name: "Krungthai Bank",
      img: "https://play-lh.googleusercontent.com/ftHwT3bHgdHHzuxQQW8e_vgjdZvtjPVbbSaBMZf966Ys6NUtyPB_poAjaTkDa1eDF40=w240-h480-rw",
    },
    {
      id: 2,
      name: "Siam Commercial Bank",
      img: "https://companieslogo.com/img/orig/SCB.BK-478d8e61.png?t=1684403046",
    },
    {
      id: 3,
      name: "Bankkok Bank",
      img: "https://s3-symbol-logo.tradingview.com/bangkok-bank-public-company-limited--600.png",
    },
    {
      id: 4,
      name: "Krungsri Bank",
      img: "https://i.pinimg.com/originals/ed/80/c6/ed80c67f6f6b484e3a09c85801a5e3c2.png",
    },
    {
      id: 5,
      name: "TMB Thanachart Bank",
      img: "https://upload.wikimedia.org/wikipedia/commons/d/dd/Ttb_bank_logo2.png",
    },
  ];

  const [channel, setChannel] = useState(4);
  const [bank, setBank] = useState(0);

  // function
  const selectChannelPayment = (obj) => {
    setChannel(obj.id);
  };

  const selectBank = (obj) => {
    setBank(obj.id);
  };

  const onChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };

  return (
    <div className="detail">
      <div className="detail-data">
        <Row gutter={16}>
          <Col className="border-right" span={18}>
            <div className="border-shot">
              <h3 className="g-text">Select Payment Channel</h3>
              <div className="blue"></div>
            </div>
            <Row>
              <Col span={8}>
                {listMenu.map((x) => {
                  return (
                    <div
                      className={`box-menu ${x.id == channel && "active"}`}
                      key={x.id}
                      onClick={() => selectChannelPayment(x)}
                    >
                      <img
                        className="icon-menu"
                        width={20}
                        height={20}
                        src="https://cdn-icons-png.flaticon.com/512/62/62780.png"
                        alt=""
                      />
                      <p
                        className={`g-text type-menu ${x.id == channel && ""}`}
                      >
                        {x.type}
                      </p>
                    </div>
                  );
                })}
              </Col>
              <Col span={16}>
                <Row gutter={[16, 16]}>
                  {listPayment.map((x) => {
                    return (
                      <Col key={x.id} span={12}>
                        <div
                          className={`box-bank ${x.id == bank && "active"}`}
                          onClick={() => selectBank(x)}
                        >
                          <div className="hexagon-box">
                            <div
                              className="hexagon-img"
                              style={{
                                backgroundImage: `url(${x.img})`,
                              }}
                            ></div>
                          </div>
                          <p className="g-text bold overflow type-bank">
                            {x.name}
                          </p>
                        </div>
                      </Col>
                    );
                  })}
                </Row>
              </Col>
            </Row>
          </Col>
          <Col span={6}>
            <div className="border-shot">
              <h3>Fill in Contact Information</h3>
              <div className="blue"></div>
            </div>
            <div className="g-form">
              <Input className="input" placeholder="Name *"></Input>
            </div>
            <div className="g-form">
              <Input className="input" placeholder="Lastname *"></Input>
            </div>
            <div className="g-form">
              <Input
                className="input"
                placeholder="Phone Number *"
                type="number"
              ></Input>
            </div>
            <div className="g-form">
              <Input className="input" placeholder="E-mail *"></Input>
            </div>
          </Col>
        </Row>
      </div>
      <div className="detail-footer">
        <Row gutter={16}>
          <Col className="border-right" span={12}>
            <div className="box-product">
              <div>
                <img
                  className="img-product"
                  src="https://i.pinimg.com/736x/d1/d6/bd/d1d6bddbce28094566ba4cee61b6cfa5.jpg"
                  width={100}
                  height={100}
                />
                <p className="g-text mb-2">Description</p>
                <p className="g-text bold">รองเท้าน่ารัก</p>
              </div>
              <div>
                <p className="g-text mb-2">Product / Services</p>
                <p className="g-text bold">รองเท้า</p>
              </div>
            </div>
          </Col>
          <Col className="box-price" span={12}>
            <Row>
              <Col span={12}>
                <div className="box-total">
                  <div className="h-50">
                    <p className="g-text mb-2">Subtotal</p>
                    <h3>3,333.00 THB</h3>
                  </div>
                  <div className="h-50">
                    <p className="g-text mb-2">Payment Free</p>
                    <h3>0.00 THB</h3>
                  </div>
                </div>
              </Col>
              <Col span={12}>
                <p className="g-text mb-2">Total Amount</p>
                <div className="box-total-amount">
                  <p className="g-text mb-2">1662 DAYS : 09 : 05 : 50</p>
                  <h3>3,333.00 THB</h3>
                </div>
                <p className="g-text red">
                  Please fill your information completely.
                </p>

                <div className="box-checkbox">
                  <Checkbox className="checkbox" onChange={onChange}></Checkbox>
                  <p>
                    I have read and accept the
                    <span className="g-text policy pointer underline">
                      terms & conditions
                    </span>
                    of ChillPay
                  </p>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Detail;
