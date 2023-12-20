import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/css/selectpayment.scss";

import { Button, Col, Row, Select } from "antd";
import { RightOutlined } from "@ant-design/icons";

function Selectpayment() {
  const navigate = useNavigate();

  // state
  const [channel, setChannel] = useState(2);
  const [bank, setBank] = useState(0);

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
      option: [
        { value: "", label: "- Please Select -", disabled: true },
        { value: "1", label: "3 Mounths / 0.00 %" },
        { value: "2", label: "6 Mounths / 0.00 %" },
        { value: "3", label: "9 Mounths / 0.65 %" },
      ],
    },
    {
      id: 2,
      name: "Siam Commercial Bank",
      img: "https://companieslogo.com/img/orig/SCB.BK-478d8e61.png?t=1684403046",
      option: [
        { value: "", label: "- Please Select -", disabled: true },
        { value: "1", label: "3 Mounths / 0.00 %" },
        { value: "2", label: "6 Mounths / 0.00 %" },
        { value: "3", label: "9 Mounths / 0.65 %" },
      ],
    },
    {
      id: 3,
      name: "Bankkok Bank",
      img: "https://s3-symbol-logo.tradingview.com/bangkok-bank-public-company-limited--600.png",
      option: [
        { value: "", label: "- Please Select -", disabled: true },
        { value: "1", label: "3 Mounths / 0.00 %" },
        { value: "2", label: "6 Mounths / 0.00 %" },
        { value: "3", label: "9 Mounths / 0.65 %" },
      ],
    },
    {
      id: 4,
      name: "Krungsri Bank",
      img: "https://i.pinimg.com/originals/ed/80/c6/ed80c67f6f6b484e3a09c85801a5e3c2.png",
      option: [
        { value: "", label: "- Please Select -", disabled: true },
        { value: "1", label: "3 Mounths / 0.00 %" },
        { value: "2", label: "6 Mounths / 0.00 %" },
        { value: "3", label: "9 Mounths / 0.65 %" },
      ],
    },
    {
      id: 5,
      name: "TMB Thanachart Bank",
      img: "https://upload.wikimedia.org/wikipedia/commons/d/dd/Ttb_bank_logo2.png",
      option: [
        { value: "", label: "- Please Select -", disabled: true },
        { value: "1", label: "3 Mounths / 0.00 %" },
        { value: "2", label: "6 Mounths / 0.00 %" },
        { value: "3", label: "9 Mounths / 0.65 %" },
      ],
    },
  ];

  // function
  const selectChannelPayment = (obj) => {
    setChannel(obj.id);
  };

  const selectBank = (obj) => {
    setBank(obj.id);
  };

  const goHome = () => {
    navigate("/");
  };

  return (
    <div className="container">
      <Row gutter={8}>
        <Col span={8}>
          {listMenu.map((x) => {
            return (
              <BoxMenu
                data={x}
                channel={channel}
                selectChannelPayment={selectChannelPayment}
                key={x.id}
              />
            );
          })}
        </Col>
        <Col span={16}>
          {listPayment.map((x) => {
            return (
              <BoxPayment
                data={x}
                bank={bank}
                selectBank={selectBank}
                key={x.id}
              />
            );
          })}
        </Col>
        <Col span={24}>
          <div className="footer-payment">
            <Button className="btn-payment">
              <h4>Make Payment</h4>
            </Button>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export const BoxMenu = ({ data, channel, selectChannelPayment }) => {
  return (
    <div className="box-menu" onClick={() => selectChannelPayment(data)}>
      <div className={`list-menu ${data.id == channel && "active"}`}>
        <div className="detail-menu">
          <img
            className="icon-menu"
            width={20}
            height={20}
            src="https://cdn-icons-png.flaticon.com/512/62/62780.png"
            alt=""
          />
          <p className="type-menu">{data.type}</p>
        </div>
        <RightOutlined style={{ fontSize: "18px" }} />
      </div>
    </div>
  );
};

export const BoxPayment = ({ data, bank, selectBank }) => {
  const handleChange = (val) => {
    console.log("val :>> ", val);
    console.log("data :>> ", data);
  };

  return (
    <div
      className={`box-payment ${data.id == bank && "active"}`}
      onClick={() => selectBank(data)}
    >
      <div className="detail-payment">
        <div className="name-payment space-payment active-border-right">
          <div className="hexagon-box">
            <div
              className="hexagon-img"
              style={{
                backgroundImage: `url("${data.img}")`,
              }}
            ></div>
          </div>
          <h5 className="text-type">{data.name}</h5>
        </div>

        <div className="chanel-payment space-payment active-border-right">
          <Select
            className="input-select"
            defaultValue=""
            onChange={handleChange}
            options={data.option}
          />
        </div>
        <div className="price-payment space-payment">
          <p>Monthy Pay (THB)</p>
          <p className="price-right">0.00</p>
          <p>Interest Rate</p>
          <p className="price-right">0.00%</p>
        </div>
      </div>
    </div>
  );
};

export default Selectpayment;
