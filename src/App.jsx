import React from "react";
import HandleRouter from "./router/router";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <div className="g-container">
        <HandleRouter />
      </div>
      <Footer />
    </>
  );
}

export default App;
