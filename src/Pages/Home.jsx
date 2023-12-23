import React from "react";
import SectionOne from "../Component/SectionOne";
import { motion } from "framer-motion";
import SectionTwo from "../Component/SectionTwo";
import SectionThree from "../Component/SectionThree";
import SectionFour from "../Component/SectionFour";
import SectionFive from "../Component/SectionFive";
import SectionSix from "../Component/SectionSix";
import SectionSeven from "../Component/SectionSeven";
import SectionEight from "../Component/SectionEight";
import SectionNine from "../Component/SectionNine";
import SectionTen from "../Component/SectionTen";
import Footer from "../Component/Footer";
import Header from "../Component/Header";
import SectionFiveTwo from "../Component/SectionFiveTwo";

const Home = () => {
  return (
    <div
      className=" max-w-[1680px] m-auto  bg-fixed"
      style={{ backgroundImage: "url('./public/img/cta-bg.jpg')" }}
    >
      <Header />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <SectionSix />
      <SectionFiveTwo />
      <SectionSeven />
      <SectionEight />
      <SectionNine />
      <SectionTen />
      <Footer />
    </div>
  );
};

export default Home;
