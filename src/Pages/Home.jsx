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

const Home = () => {
  return (
    <div className=" max-w-[1680px] m-auto">
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <SectionSix />
      <SectionSeven />
      <SectionEight />
      <SectionNine />
    </div>
  );
};

export default Home;
