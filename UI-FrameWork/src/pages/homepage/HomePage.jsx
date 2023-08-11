import React from "react";
import Header from "./components/header/Header.jsx";
import Footer from "./footer/Footer.jsx";

export default function HomePage() {
  return (
    <div>
      <div className="mb-30"> 
        <Header />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
