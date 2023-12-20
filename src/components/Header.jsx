import React from "react";
import "../assets/css/header.scss";
import { Col, Divider, Row } from "antd";

import Th from "../assets/img/th.png";
import En from "../assets/img/en.png";

function Header() {
  // state

  const listLanguage = [
    {
      id: 1,
      type: "en",
      img: En,
    },
    {
      id: 2,
      type: "th",
      img: Th,
    },
  ];

  // function

  const selectLang = (lang) => {
    console.log("lang :>> ", lang);
  };

  return (
    <div className="header">
      <div className="detail">
        <Row>
          <Col span={12}>
            <h4>Select Payment Channel</h4>
          </Col>
          <Col span={12}>
            <div className="box-language">
              {listLanguage.map((x) => {
                return (
                  <div key={x.id}>
                    <img
                      className={`icon-img ${x.id == 1 && "active"}`}
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
      <Divider className="divider"/>
    </div>
  );
}

export default Header;
