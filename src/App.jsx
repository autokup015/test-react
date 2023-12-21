import React from "react";
import HandleRouter from "./router/router";
import Header from "./components/Header";
import Footer from "./components/Footer";

import { useSelector } from "react-redux";

// icon fonawesome
import { library } from "@fortawesome/fontawesome-svg-core";

import { faProductHunt } from "@fortawesome/free-brands-svg-icons";
import { faFaceAngry } from "@fortawesome/free-regular-svg-icons";
import {
  faCashRegister,
  faCreditCard,
  faLandmark,
  faMagnifyingGlass,
  faMobileScreenButton,
  faQrcode,
  faSquareEnvelope,
  faSquarePhoneFlip,
  faWallet,
  faWineGlass,
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faMagnifyingGlass,
  faCreditCard,
  faMobileScreenButton,
  faQrcode,
  faWallet,
  faLandmark,
  faCashRegister,
  faWineGlass,
  faProductHunt,
  faSquarePhoneFlip,
  faSquareEnvelope
);

function App() {
  const isType = useSelector((state) => state.type.type);

  return (
    <>
      {isType != "qrpayment" && <Header isType={isType} />}
      <div className="g-container">
        <HandleRouter />
      </div>
      {isType != "" && <Footer isType={isType} />}
    </>
  );
}

export default App;
