import React from "react";
import { BsTruckFlatbed, BsFileEarmarkText } from "react-icons/bs";
import { BiTachometer, BiLayer } from "react-icons/bi";
import { motion } from "framer-motion";
import amazon from "../assets/clients/amazon.webp";
import ebay from "../assets/clients/ebay.webp";
import etsy from "../assets/clients/etsy.svg";
import wix from "../assets/clients/wix.webp";
import shopify from "../assets/clients/shopify.webp";
import pic2 from "../assets/clients/pic2.webp";

const SectionFive = () => {
  return (
    <div className="flex flex-col justify-center  items-center p-5 gap-3 bg-[#F3F5FA]">
      <div>
        <motion.div
          variants={{
            hidden: { y: 75, opacity: 0, scale: 0.7 },
            visible: { y: 0, opacity: 1, scale: 1 },
          }}
          initial={"hidden"}
          animate={"visible"}
          transition={{ duration: 1 }}
          className="text-[28px] uppercase text-[#37517E] font-bold border-b-2  py-3 border-b-[#33333333] relative before:content-[''] before:absolute before:w-[50px]  before:h-[3px] before:bg-[dodgerblue] before:left-[calc(50%-25px)] before:bottom-[-3px] before:z-10"
        >
          OUR INTEGRATIONS{" "}
        </motion.div>
      </div>

      <div className=" my-20 mx-10    items-center max-w-[960px] justify w-full  justify-around  grid gap-10  lg:grid-cols-lg  grid-cols-md sx:grid-cols-1  justify-items-center">
        <motion.img
          src={amazon}
          variants={{
            hidden: { opacity: 0, scale: 0 },
            visible: { opacity: 1, scale: 1 },
          }}
          initial={"hidden"}
          animate={"visible"}
          transition={{ duration: 1 }}
          className="grayscale hover:grayscale-0 transition-all  duration-200"
        />
        <motion.img
          src={wix}
          variants={{
            hidden: { opacity: 0, scale: 0 },
            visible: { opacity: 1, scale: 1 },
          }}
          initial={"hidden"}
          animate={"visible"}
          transition={{ duration: 1 }}
          className="grayscale hover:grayscale-0 transition-all duration-200"
        />

        <motion.img
          src={ebay}
          variants={{
            hidden: { opacity: 0, scale: 0 },
            visible: { opacity: 1, scale: 1 },
          }}
          initial={"hidden"}
          animate={"visible"}
          transition={{ duration: 1 }}
          className="grayscale hover:grayscale-0 transition-all duration-200"
        />
        <motion.img
          src={etsy}
          variants={{
            hidden: { opacity: 0, scale: 0 },
            visible: { opacity: 1, scale: 1 },
          }}
          initial={"hidden"}
          animate={"visible"}
          transition={{ duration: 1 }}
          className="grayscale hover:grayscale-0 transition-all duration-200"
        />

        <motion.img
          src={pic2}
          variants={{
            hidden: { opacity: 0, scale: 0 },
            visible: { opacity: 1, scale: 1 },
          }}
          initial={"hidden"}
          animate={"visible"}
          transition={{ duration: 1 }}
          className="grayscale hover:grayscale-0 transition-all duration-200"
        />
        <motion.img
          src={shopify}
          variants={{
            hidden: { opacity: 0, scale: 0 },
            visible: { opacity: 1, scale: 1 },
          }}
          initial={"hidden"}
          animate={"visible"}
          transition={{ duration: 1 }}
          className="grayscale hover:grayscale-0 transition-all duration-200"
        />
      </div>
    </div>
  );
};

export default SectionFive;
