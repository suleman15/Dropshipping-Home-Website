import React from "react";
import WhyUs from "../assets/why-us.png";
import { motion } from "framer-motion";
import { BsSendCheck, BsShopWindow, BsTruck } from "react-icons/bs";
const SectionTwo = () => {
  return (
    <div className="flex gap-3 lg:p-20 p-3 bg-[#F3F5FA] lg:flex-row flex-col">
      <motion.div
        variants={{
          hidden: { y: 75, opacity: 0 },
          visible: { y: 0, opacity: 1 },
        }}
        initial={"hidden"}
        animate={"visible"}
        transition={{ duration: 1 }}
        className="w-[100%] flex flex-col gap-3 lg:order-1 order-2"
      >
        <div className="text-[34px] text-[#37517E]">
          How it <b>Works</b>
        </div>
        <div className="text-[#bdbdbd]">
          Eastern isn't your typical third-party logistics (3PL) partner. We
          work hard to make the fulfillment process simple to comprehend and
          painless. There are never any unexpected expenses thanks to our
          dependable customer support and flat rate delivery charges.
          <div className="font-bold ">
            Your inventory is handled by us in three simple steps:{" "}
          </div>
        </div>
        <div className="flex flex-col gap-3 font-poppins text-lg">
          <div className="bg-[#FFFFFF] p-4 rounded-lg   flex items-center gap-3 text-[#333333] group  ">
            <div className="text-[dodgerblue] font-bold">01</div>

            <div className="w-full group-hover:text-[dodgerblue] font-semibold">
              Send & Connect
            </div>
            <div>
              <BsSendCheck className="text-[20px] fill-[#37517E]" />
            </div>
          </div>
          <div className="bg-[#FFFFFF] p-4 rounded-lg   flex items-center gap-3 text-[#333333] group  ">
            <div className="text-[dodgerblue] font-bold">02</div>
            <div className="group-hover:text-[dodgerblue] font-semibold  w-full">
              Store
            </div>
            <div>
              <BsShopWindow className="text-[20px] fill-[#37517E]" />
            </div>
          </div>
          <div className="bg-[#FFFFFF] p-4 rounded-lg  flex items-center gap-3 text-[#333333] group  ">
            <div className="text-[dodgerblue] font-bold">03</div>
            <div className="group-hover:text-[dodgerblue] w-full font-semibold ">
              Ship
            </div>
            <div>
              <BsTruck className="text-[20px] fill-[#37517E]" />
            </div>
          </div>
        </div>
      </motion.div>
      <motion.div
        variants={{
          hidden: { scale: 0, opacity: 0 },
          visible: { scale: 1, opacity: 1 },
        }}
        initial={"hidden"}
        animate={"visible"}
        transition={{ duration: 0.5 }}
        className="lg:order-2 order-1  lg:w-[100%]  mx-auto"
      >
        <img src={WhyUs} alt="" className="lg:w-[100%] w-[500px]" />
      </motion.div>
    </div>
  );
};

export default SectionTwo;
