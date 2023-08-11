import React from "react";
import "../../../../assets/css/homepage.css";
import Navbar from "./Navbar";
import CarouselDefault from "./CarouselDefault";
import Cards from "./Cards";

export default function Header() {
  return (
    <div className="Header">
      <Navbar />
      <CarouselDefault />
      <Cards />
    </div>
  );
}
