import React from "react";
import HandleRouter from "./router/router";
import Header from "./components/Header";
import Footer from "./components/Footer";

import { useSelector } from "react-redux";

function App() {
  const isType = useSelector((state) => state.type.type);

  return (
    <>
      {isType != "qrpayment" && <Header isType={isType} />}

      <div className="g-container">
        <HandleRouter />
      </div>
      {isType != "qrpayment" && <Footer isType={isType} />}
    </>
  );
}

export default App;
