import React from "react";
import {
  BsTruckFlatbed,
  BsFileEarmarkText,
  BsCardHeading,
  BsChatLeftFill,
  BsTelephoneFill,
  BsTelephoneInboundFill,
} from "react-icons/bs";
import { BiTachometer, BiLayer } from "react-icons/bi";
import { motion } from "framer-motion";
import amazon from "../assets/clients/amazon.webp";
import ebay from "../assets/clients/ebay.webp";
import etsy from "../assets/clients/etsy.svg";
import wix from "../assets/clients/wix.webp";
import shopify from "../assets/clients/shopify.webp";
import pic2 from "../assets/clients/pic2.webp";

const SectionSix = () => {
  return (
    <div className="flex flex-col justify-center items-center text-[#37517E]  p-5 gap-3 bg-[#F3F5FA]">
      <div>
        <motion.div
          variants={{
            hidden: { y: 75, opacity: 0, scale: 0.7 },
            visible: { y: 0, opacity: 1, scale: 1 },
          }}
          initial={"hidden"}
          animate={"visible"}
          transition={{ duration: 1 }}
          className="text-[28px] uppercase  font-bold border-b-2  py-3 border-b-[#33333333] relative before:content-[''] before:absolute before:w-[50px]  before:h-[3px] before:bg-[dodgerblue] before:left-[calc(50%-25px)] before:bottom-[-3px] before:z-10"
        >
          OUR INTEGRATIONS{" "}
        </motion.div>
      </div>

      <div className="flex gap-10 my-20 font-bold text-2xl w-full justify-evenly md:flex-nowrap flex-wrap">
        <motion.div
          variants={{
            hidden: { opacity: 0, scale: 0 },
            visible: { opacity: 1, scale: 1 },
          }}
          // initial={{ opacity: 0, scale: -0 }}
          // animate={{ opacity: 1, scale: 1 }}
          initial={"hidden"}
          animate={"visible"}
          transition={{ duration: 1 }}
          className={`gap-10 w-[200px] flex flex-col justify-center items-center p-5 text-center`}
        >
          <BsCardHeading className="text-8xl " />
          Live Chat
        </motion.div>
        <motion.div
          variants={{
            hidden: { opacity: 0, scale: 0 },
            visible: { opacity: 1, scale: 1 },
          }}
          initial={"hidden"}
          animate={"visible"}
          transition={{ duration: 1 }}
          className={`gap-10 w-[200px] flex flex-col justify-center items-center p-5 text-center`}
        >
          <BsChatLeftFill className="text-8xl " />
          Get Started
        </motion.div>
        <motion.div
          variants={{
            hidden: { opacity: 0, scale: 0 },
            visible: { opacity: 1, scale: 1 },
          }}
          initial={"hidden"}
          animate={"visible"}
          transition={{ duration: 1 }}
          className={`gap-10 w-[200px] flex flex-col justify-center items-center p-5 text-center`}
        >
          <BsTelephoneInboundFill className="text-8xl " />
          Schedule a Phone Call
        </motion.div>
      </div>
    </div>
  );
};

export default SectionSix;
