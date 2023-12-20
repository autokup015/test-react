import { useNavigate } from "react-router-dom";
import { Button, Col, Row } from "antd";
import React from "react";

function Home() {
  const navigate = useNavigate();

  const handleRouter = (path) => {
    navigate(path);
  };

  return (
    <>
      <Button onClick={() => handleRouter("/detail")}>Go detail</Button>
      <Button onClick={() => handleRouter("/selectpayment")}>
        Go selectpayment
      </Button>
      <Button onClick={() => handleRouter("/qrpayment")}>Go qrpayment</Button>
    </>
  );
}

export default Home;
