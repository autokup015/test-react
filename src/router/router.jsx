import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from "../pages/home";
import Selectpayment from "../pages/selectpayment";
import Qrpayment from "../pages/qrpayment";
import Detail from "../pages/detail";

function HandleRouter() {
  return (
    <>
      <Router>
        <div>
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route
              exact
              path="/selectpayment"
              element={<Selectpayment />}
            ></Route>
            <Route exact path="/qrpayment" element={<Qrpayment />}></Route>
            <Route exact path="/detail" element={<Detail />}></Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default HandleRouter;
