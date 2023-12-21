import { useNavigate } from "react-router-dom";
import { Button, Col, Row } from "antd";
import React, { useEffect } from "react";

import { useDispatch } from "react-redux";
import { changeType } from "../typeSlice";

function Home() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(changeType(""));
  }, []);

  const handleRouter = (path) => {
    navigate(`/${path}`);
  };

  return (
    <>
      <Button onClick={() => handleRouter("detail")}>Go detail</Button>
      <Button onClick={() => handleRouter("selectpayment")}>
        Go selectpayment
      </Button>
      <Button onClick={() => handleRouter("qrpayment")}>Go qrpayment</Button>
    </>
  );
}

export default Home;
