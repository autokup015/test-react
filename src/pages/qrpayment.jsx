import React, { useEffect } from "react";
import "../assets/css/qrpayment.scss";
import { Button } from "antd";

import { useDispatch } from "react-redux";
import { changeType } from "../typeSlice";

function Qrpayment() {
  const dispatch = useDispatch();
  // state
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
    {
      id: 6,
      name: "Aomsin",
      img: "https://i.pinimg.com/originals/fa/4b/4a/fa4b4a6ef2f95136051607a7fba619ba.png",
    },
  ];

  const listPay = [
    {
      id: 1,
      type: "en",
      img: "https://www.gennice.com/image/flag/eng.png",
    },
    {
      id: 2,
      type: "th",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Flag_of_Thailand_%28non-standard_colours%29.svg/320px-Flag_of_Thailand_%28non-standard_colours%29.svg.png",
    },
    {
      id: 3,
      type: "zh",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Flag_of_China.png/1280px-Flag_of_China.png",
    },
  ];

  useEffect(() => {
    dispatch(changeType("qrpayment"));
  }, []);

  return (
    <div className="qr-payment">
      <div className="box-qr">
        <div className="img-header">
          <div className="hexagon-box">
            <div
              className="hexagon-img"
              style={{
                backgroundImage: `url("https://chillpay-prod-frontendfiles.s3.ap-southeast-1.amazonaws.com/assets/img/banner_logo_ChillPay_banner.png")`,
              }}
            ></div>
          </div>
          <h2 className="text-payment">QR PAYMENT</h2>
        </div>

        <div className="timeout-payment">
          <p>Payment Time Left</p>
          <h2 className="text-time">14 : 44</h2>
        </div>
        <div className="box-qr-code">
          <img
            className="qr-code"
            src="https://www.ginifab.com/feeds/qr_code/img/qr_code_scanner.jpg"
          />
          <div className="box-payment-channel">
            {listPayment.map((x) => {
              return (
                // <img className="icon-payment-channel" key={x.id} src={x.img} />
                <div
                  className="icon-payment-channel"
                  style={{ backgroundImage: `url(${x.img})` }}
                  key={x.id}
                ></div>
              );
            })}
          </div>
        </div>
        <h3 className="g-text margin-bt">
          Please scan QR Code with your mobile by useing Mobile Banking
          Application
        </h3>
        <p className="g-text margin-bt center">
          Customers useing the IOS operating system or in-app browsers (such as
          Line or Facebook)
          <br />
          can utilze screen capture as an alternative to useing the save button
        </p>
        <p className="g-text margin-bt gray center">
          TrueMoney Wallet does note support the QR Payment
        </p>

        <div className="box-save-qr">
          <Button className="btn-save-qr">Save Qr</Button>
        </div>

        <div className="how-to-pay">
          <p className="g-text underline">How to pay</p>
          <div className="box-img">
            {listPay.map((x) => {
              return <img className="icon-howtopay" src={x.img} key={x.id} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Qrpayment;
