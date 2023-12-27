import React from "react";
import { motion } from "framer-motion";
import { FaAngleRight, FaEnvelope, FaLocationDot } from "react-icons/fa6";
import { IoPhonePortraitOutline } from "react-icons/io5";
import "./ruf.scss";
import OnView from "./OnView";
import { BsArrowRight, BsArrowRightShort } from "react-icons/bs";
export default () => {
  return (
    <div className="bg-white">
      <OnView css="flex flex-col justify-center items-center  text-[#37517E]  p-5 gap-3 ">
        <div className="flex justify-center flex-col items-center p-5 gap-5 text-center">
          <motion.div
            variants={{
              hidden: { y: 75, opacity: 0, scale: 0.7 },
              visible: { y: 0, opacity: 1, scale: 1 },
            }}
            initial={"hidden"}
            animate={"visible"}
            transition={{ duration: 1 }}
            className="text-[28px] uppercase  font-bold   py-3  relative after:content-[''] after:absolute after:w-[100px]  after:h-[3px] after:bg-[#33333333] after:left-[calc(50%-50px)] after:bottom-[-3px] after:z-8 before:content-[''] before:absolute before:w-[50px]  before:h-[3px] before:bg-[dodgerblue] before:left-[calc(50%-25px)] before:bottom-[-3px] before:z-10"
          >
            Join Our Newsletter
          </motion.div>
          <motion.div
            variants={{
              hidden: { y: 75, opacity: 0, scale: 0.7 },
              visible: { y: 0, opacity: 1, scale: 1 },
            }}
            initial={"hidden"}
            animate={"visible"}
            transition={{ duration: 1 }}
            className="text-[#444444]"
          >
            Tamen quem nulla quae legam multos aute sint culpa legam noster
            magna
          </motion.div>
        </div>
        <div>
          <form className="flex justify-center border-2 lg:flex-row flex-col md:rounded-none hover:border-[dodgerblue] text-white font-poppins overflow-hidden w-fit lg:rounded-full  mx-auto ">
            <input
              className="w-full lg:w-[500px] p-3 focus:outline-none text-black"
              type="text"
              name="text"
              id="text"
            />
            <button className="p-3 bg-[dodgerblue] rounded-none lg:rounded-full  px-10 ">
              Subscribe
            </button>
          </form>
        </div>
      </OnView>
    </div>
  );
};
