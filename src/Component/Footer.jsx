import React from "react";
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
import { FaAngleRight } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-white">
      <div className="grid lg:grid-cols-4 gap-3 p-10 w-full text-[gray] grid-cols-1">
        <div className="flex flex-col gap-3 text-sm ">
          <div className="text-[#37517E] text-2xl  font-semibold">EASTERN</div>
          <div className="text-xs ">
            Sukkur IBA UNIVERSITY KNOWLEDGE CENTER INCUBETOR 3 DevsHat
          </div>
          <div>
            <b>Phone:</b> +92313-8194805{" "}
          </div>
          <div>
            <b>Email:</b> sulemanahmed2704@gmail.com
          </div>
        </div>
        <div className="text-sm">
          <div className="text-[#37517E] text-xl  font-semibold">
            Quick Links
          </div>
          <div className="flex flex-col gap-3 py-3">
            <div className="hover:text-[dodgerblue] flex gap-2 items-center">
              <FaAngleRight className="text-[dodgerblue]" />
              Home
            </div>
            <div className="hover:text-[dodgerblue] flex gap-2 items-center">
              <FaAngleRight className="text-[dodgerblue]" />
              Fulfilment
            </div>
            <div className="hover:text-[dodgerblue] flex gap-2 items-center">
              <FaAngleRight className="text-[dodgerblue]" />
              FBA
            </div>
            <div className="hover:text-[dodgerblue] flex gap-2 items-center">
              <FaAngleRight className="text-[dodgerblue]" />
              Prep
            </div>
            <div className="hover:text-[dodgerblue] flex gap-2 items-center">
              <FaAngleRight className="text-[dodgerblue]" />
              Software
            </div>
            <div className="hover:text-[dodgerblue] flex gap-2 items-center">
              <FaAngleRight className="text-[dodgerblue]" />
              About
            </div>
            <div className="hover:text-[dodgerblue] flex gap-2 items-center">
              <FaAngleRight className="text-[dodgerblue]" />
              Get Started
            </div>
            <div className="hover:text-[dodgerblue] flex gap-2 items-center">
              <FaAngleRight className="text-[dodgerblue]" />
              Librex
            </div>
            <div className="hover:text-[dodgerblue] flex gap-2 items-center">
              <FaAngleRight className="text-[dodgerblue]" />
              Go Terms Of Services{" "}
            </div>
          </div>
        </div>
        <div className="text-sm">
          <div className="text-[#37517E] text-xl  font-semibold">
            Quick Links
          </div>
          <div className="flex flex-col gap-3 py-3">
            <div className="hover:text-[dodgerblue] flex gap-2 items-center">
              <FaAngleRight className="text-[dodgerblue]" />
              Support
            </div>
            <div className="hover:text-[dodgerblue] flex gap-2 items-center">
              <FaAngleRight className="text-[dodgerblue]" />
              Live Chat Shedule a Phone Call
            </div>
            <div className="hover:text-[dodgerblue] flex gap-2 items-center">
              <FaAngleRight className="text-[dodgerblue]" />
              Contact Us
            </div>
            <div className="hover:text-[dodgerblue] flex gap-2 items-center">
              <FaAngleRight className="text-[dodgerblue]" />
              FAQ
            </div>
          </div>
        </div>
        <div className="text-sm">
          <div className="text-[#37517E] text-xl  font-semibold">
            Our Social Networks
          </div>
          <div className="flex flex-col gap-3 py-3">
            Cras fermentum odio eu feugiat lide par naso tierra videa magna
            derita valies
          </div>
          <div className="flex gap-3 text-lg">
            <div className="p-2 bg-blue-100 rounded-full hover:bg-blue-300    ">
              <BsTwitter className="text-[#37517E]  hover:bg-blue-300  " />
            </div>
            <div className="p-2 bg-blue-100 rounded-full hover:bg-blue-300 ">
              <BsFacebook className="text-[#37517E]    " />
            </div>
            <div className="p-2 bg-blue-100 rounded-full hover:bg-blue-300 ">
              <BsInstagram className="text-[#37517E]    " />
            </div>
            <div className="p-2 bg-blue-100 rounded-full hover:bg-blue-300 ">
              <BsLinkedin className="text-[#37517E]    " />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
