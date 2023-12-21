import React, { useState } from "react";
import "../assets/css/header.scss";
import { Col, Divider, Row } from "antd";

import Th from "../assets/img/th.png";
import En from "../assets/img/en.png";

function Header({ isType }) {
  // state
  const [isLang, setIsLang] = useState(2);

  const listLanguage = [
    {
      id: 1,
      type: "th",
      img: Th,
    },
    {
      id: 2,
      type: "en",
      img: En,
    },
  ];

  // function

  const selectLang = (lang) => {
    setIsLang(lang.id);
  };

  return (
    <div className="header">
      <div className="detail">
        <Row>
          <Col span={12}>
            {isType == "" && (
              <div className="box-detail">
                <h2>Welcome</h2>
              </div>
            )}
            {isType == "selectpayment" && (
              <div className="box-detail">
                <h2>Select Payment Channel</h2>
              </div>
            )}
            {isType == "detail" && (
              <div className="box-detail">
                <img
                  className="icon-detail"
                  src="https://chillpay-prod-frontendfiles.s3.ap-southeast-1.amazonaws.com/assets/img/logo.png"
                />
                <div>
                  <h3>Praln Fintech</h3>
                  <div className="contact">
                    <div className="phone">
                      <p className="icon">icon</p>
                      <p>021077788-1</p>
                    </div>
                    <div className="phone">
                      <p className="icon">icon</p>
                      <p>021077788-1</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </Col>
          <Col span={12}>
            <div className="box-language">
              {isType != "" &&
                listLanguage.map((x) => {
                  return (
                    <div key={x.id}>
                      <img
                        className={`icon-img ${x.id == isLang && "active"}`}
                        src={x.img}
                        alt={x.type}
                        onClick={() => selectLang(x)}
                      />
                    </div>
                  );
                })}
            </div>
          </Col>
        </Row>
      </div>
      <Divider className="divider" />
    </div>
  );
}

export default Header;
