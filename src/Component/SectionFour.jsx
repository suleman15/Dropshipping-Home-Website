import React from "react";
import { BsTruckFlatbed, BsFileEarmarkText } from "react-icons/bs";
import { BiTachometer, BiLayer } from "react-icons/bi";
import { motion } from "framer-motion";

const SectionFour = () => {
  return (
    <div className="flex flex-col justify-center items-center p-5 gap-3 bg-[#F3F5FA]">
      <motion.div
        variants={{
          hidden: { y: 75, opacity: 0, scale: 0.7 },
          visible: { y: 0, opacity: 1, scale: 1 },
        }}
        initial={"hidden"}
        animate={"visible"}
        transition={{ duration: 0.5 }}
        className="text-[28px] uppercase text-[#37517E] font-bold border-b-2  py-3 border-b-[#33333333] relative before:content-[''] before:absolute before:w-[50px]  before:h-[3px] before:bg-[dodgerblue] before:left-[calc(50%-25px)] before:bottom-[-3px] before:z-10"
      >
        Services
      </motion.div>
      <motion.div
        variants={{
          hidden: { y: 75, opacity: 0, scale: 0.7 },
          visible: { y: 0, opacity: 1, scale: 1 },
        }}
        initial={"hidden"}
        animate={"visible"}
        transition={{ duration: 0.5 }}
        className="text-[#444444]"
      >
        We make it simple, and take care of the tough parts for you with:
      </motion.div>
      <div className="grid gap-10 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1">
        <motion.div
          variants={{
            hidden: { opacity: 0, scale: 0 },
            visible: { opacity: 1, scale: 1 },
          }}
          initial={"hidden"}
          animate={"visible"}
          transition={{ duration: 0.2 }}
          className="  bg-white rounded-lg hover:text-[dodgerblue] gap-3 p-3 w-[225px] h-[225px] text-[#333333] text-lg transition-transform duration-300 ease-in-out transform hover:translate-y-[-10px] my-6   flex flex-col justify-center items-center text-center"
        >
          <BsTruckFlatbed className="text-3xl text-[dodgerblue]" />
          Same Day Shipping
        </motion.div>
        <motion.div
          variants={{
            hidden: { opacity: 0, scale: 0 },
            visible: { opacity: 1, scale: 1 },
          }}
          initial={"hidden"}
          animate={"visible"}
          transition={{ duration: 0.2 }}
          className=" bg-white rounded-lg hover:text-[dodgerblue] gap-3 p-3  w-[225px] h-[225px] text-[#333333] text-lg transition-transform duration-300 ease-in-out transform hover:translate-y-[-60px] my-6   flex flex-col justify-center items-center text-center"
        >
          <BsFileEarmarkText className="text-3xl text-[dodgerblue]" />
          World Class Customer Services
        </motion.div>
        <motion.div
          variants={{
            hidden: { opacity: 0, scale: 0 },
            visible: { opacity: 1, scale: 1 },
          }}
          initial={"hidden"}
          animate={"visible"}
          transition={{ duration: 0.2 }}
          className=" bg-white rounded-lg hover:text-[dodgerblue] gap-3 p-3  w-[225px] h-[225px] text-[#333333] text-lg transition-transform duration-300 ease-in-out transform hover:translate-y-[-10px] my-6   flex flex-col justify-center items-center text-center"
        >
          <BiTachometer className="text-3xl text-[dodgerblue]" />
          NO____Minimums
        </motion.div>
        <motion.div
          variants={{
            hidden: { opacity: 0, scale: 0 },
            visible: { opacity: 1, scale: 1 },
          }}
          initial={"hidden"}
          animate={"visible"}
          transition={{ duration: 0.2 }}
          className=" bg-white rounded-lg  hover:text-[dodgerblue] gap-3 p-3 w-[225px] h-[225px] text-[#333333] text-lg transition-transform duration-300 ease-in-out transform hover:translate-y-[-10px] my-6   flex flex-col justify-center items-center text-center"
        >
          <BiLayer className="text-3xl text-[dodgerblue]" />
          Flat Rate Shipping
        </motion.div>
      </div>
    </div>
  );
};

export default SectionFour;
