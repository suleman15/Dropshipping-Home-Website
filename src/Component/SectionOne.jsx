import React from "react";
import HeroImage from "../assets/hero-img.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const SectionOne = () => {
  return (
    <div className=" relative min-h-[100vh]  lg:min-h-[80vh]  items-center justify-center flex-col lg:flex-row   text-white bg-bg flex  p-3 lg:px-20 gap-10 lg:gap-0">
      <motion.div
        className="order-2 lg:order-1 w-[100%] lg:p-10 text-center lg:text-left"
        variants={{
          hidden: { y: 75, opacity: 0 },
          visible: { y: 0, opacity: 1 },
        }}
        initial={"hidden"}
        animate={"visible"}
        transition={{ duration: 0.5 }}
      >
        <div className=" font-[700] text-[28px] leading-tight lg:text-[48px]">
          Shop · Prepare · Package · Ship
        </div>
        <h2 className="text-[18px] lg:text-[24px] text-lightgray ">
          Reliable by Global Online Vendors
        </h2>
        <div className="flex gap-6 items-center my-10 justify-center lg:justify-start">
          <Link
            className=" text-white hover:bg-[#158ac0]   font-[500] rounded-full bg-btnBG py-[10px] px-[28px]"
            to={"#about"}
          >
            Get Started
          </Link>
          <Link
            to={"#about"}
            className=" hover:text-[#158ac0] group flex gap-3 items-center "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112Z"
              />
            </svg>
            <span className="group-hover:text-white">Watch Video</span>
          </Link>
        </div>
      </motion.div>
      <motion.div
        className="order-1 lg:order-2 w-[300px]  lg:w-[100%]"
        variants={{
          animate: {
            y: [0, 20, 0], // Example: Move from 0 to 20 pixels on the Y-axis and back to 0
          },
        }}
        animate="animate"
        transition={{ duration: 2, repeat: Infinity }}
      >
        <img className="w-full" src={HeroImage} alt="hero-img.png" />
      </motion.div>
    </div>
  );
};

export default SectionOne;
