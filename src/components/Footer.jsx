import { Divider } from "antd";
import React, { useEffect } from "react";

import "../assets/css/footer.scss";

function Footer({ isType }) {
  return (
    <>
      <div className={`footer ${isType == "qrpayment" && "border-top-none"}`}>
        {/* select payment */}
        {isType == "selectpayment" && (
          <p className="g-text gray text-copyright">
            © 2023 Praln FinTech Co.,Ltd. All rights reserved. |{" "}
            <span className="g-text blue">www.chilpay.co</span>
          </p>
        )}

        {/* qr payment */}
        {isType == "qrpayment" && (
          <p className="g-text gray text-copyright">
            © 2023 ChilPay All right reserved.
            <br />
            <span className="text-mini">Powered by Praln FinTech Co.,Ldt</span>
          </p>
        )}

        {/* detail */}
        {isType == "detail" && (
          <div className="flex-and-right">
            <p className="g-text gray text-copyright">
              © 2023 Praln FinTech Co.,Ltd. All rights reserved. |{" "}
              <span className="g-text blue">www.chilpay.co</span>
            </p>
            <img
              className="icon"
              src="https://chillpay-prod-frontendfiles.s3.ap-southeast-1.amazonaws.com/assets/img/origin-logo.png"
            />
          </div>
        )}
      </div>
    </>
  );
}

export default Footer;
