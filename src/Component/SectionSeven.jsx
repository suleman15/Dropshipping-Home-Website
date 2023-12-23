import React from "react";
import { motion } from "framer-motion";
import {
  BsFacebook,
  BsInstagram,
  BsLinkedin,
  BsTwitch,
  BsTwitter,
} from "react-icons/bs";
import UpwardAnimate from "./UpwardAnimate";
import OnView from "./OnView";

const SectionSeven = () => {
  return (
    <div className="bg-[#F3F5FA]">
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
            className="text-[28px] uppercase  font-bold border-b-2  py-3 border-b-[#33333333] relative before:content-[''] before:absolute before:w-[50px]  before:h-[3px] before:bg-[dodgerblue] before:left-[calc(50%-25px)] before:bottom-[-3px] before:z-10"
          >
            REVIEWS
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
            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
            aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
            quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
            fugiat sit in iste officiis commodi quidem hic quas.
          </motion.div>
        </div>
        <div className=" grid grid-cols-1 lg:grid-cols-2 grid-rows-2  gap-7">
          <UpwardAnimate
            css={
              "shadow-md  w-full   flex items-center gap-3 bg-white rounded-lg p-6 w-full  max-w-[650px]"
            }
          >
            <img
              src="./team/team-1.jpg"
              className="w-[150px] h-[150px] rounded-full"
            />
            <div className="text-gray-400 ">
              <div className="text-[25px] font-bold text-[#37517E]">
                Walter White
              </div>
              <div className="">Chief Executive Officer</div>
              <div className="bg-gray-300 h-[2px] w-[50px] my-3"></div>
              <div className="text-sm my-3">
                Explicabo voluptatem mollitia et repellat qui dolorum quasi
              </div>
              <div className="flex gap-3">
                <div className="p-2 bg-blue-100 rounded-full  ">
                  <BsTwitter className="text-[#37517E]  " />
                </div>
                <div className="p-2 bg-blue-100 rounded-full  ">
                  <BsFacebook className="text-[#37517E]  " />
                </div>
                <div className="p-2 bg-blue-100 rounded-full  ">
                  <BsInstagram className="text-[#37517E]  " />
                </div>
                <div className="p-2 bg-blue-100 rounded-full  ">
                  <BsLinkedin className="text-[#37517E]  " />
                </div>
              </div>
            </div>
          </UpwardAnimate>
          <UpwardAnimate
            css={
              "shadow-md  w-full   flex items-center max-w-[550px] gap-3 bg-white rounded-lg p-6 w-full  max-w-[650px]"
            }
          >
            <img
              src="./team/team-2.jpg"
              className="w-[150px] h-[150px] rounded-full"
            />

            <div className="text-gray-400 ">
              <div className="text-[25px] font-bold text-[#37517E]">
                Sarah Jhonson
              </div>
              <div>Product Manager</div>
              <div className="bg-gray-300 h-[2px] w-[50px] my-3"></div>
              <div className="text-sm my-3">
                Aut maiores voluptates amet et quis praesentium qui senda para
              </div>
              <div className="flex gap-3">
                <div className="p-2 bg-blue-100 rounded-full  ">
                  <BsTwitter className="text-[#37517E]  " />
                </div>
                <div className="p-2 bg-blue-100 rounded-full  ">
                  <BsFacebook className="text-[#37517E]  " />
                </div>
                <div className="p-2 bg-blue-100 rounded-full  ">
                  <BsInstagram className="text-[#37517E]  " />
                </div>
                <div className="p-2 bg-blue-100 rounded-full  ">
                  <BsLinkedin className="text-[#37517E]  " />
                </div>
              </div>
            </div>
          </UpwardAnimate>
          <UpwardAnimate
            css={
              "shadow-md  w-full   flex items-center max-w-[550px] gap-3 bg-white rounded-lg p-6 w-full  max-w-[650px]"
            }
          >
            <img
              src="./team/team-3.jpg"
              className="w-[150px] h-[150px] rounded-full"
            />

            <div className="text-gray-400 ">
              <div className="text-[25px] font-bold text-[#37517E]">
                William Anderson
              </div>
              <div>CTO</div>
              <div className="bg-gray-300 h-[2px] w-[50px] my-3"></div>
              <div className="text-sm my-3">
                Quisquam facilis cum velit laborum corrupti fuga rerum quia
              </div>
              <div className="flex gap-3">
                <div className="p-2 bg-blue-100 rounded-full  ">
                  <BsTwitter className="text-[#37517E]  " />
                </div>
                <div className="p-2 bg-blue-100 rounded-full  ">
                  <BsFacebook className="text-[#37517E]  " />
                </div>
                <div className="p-2 bg-blue-100 rounded-full  ">
                  <BsInstagram className="text-[#37517E]  " />
                </div>
                <div className="p-2 bg-blue-100 rounded-full  ">
                  <BsLinkedin className="text-[#37517E]  " />
                </div>
              </div>
            </div>
          </UpwardAnimate>
          <UpwardAnimate
            css={
              " shadow-m d w-ful l flex gap-3  max-w-[550px] bg-white rounded-lg p-6 w-full h-fit  max-w-[650px]"
            }
          >
            <img
              src="./team/team-4.jpg"
              className="w-[150px] h-[150px] rounded-full"
            />

            <div className="text-gray-400 ">
              <div className="text-[25px] font-bold text-[#37517E]">
                Amanda Jepson
              </div>
              <div>Accountant</div>
              <div className="bg-gray-300 h-[2px] w-[50px] my-3"></div>
              <div className="text-sm my-3">
                Dolorum tempora officiis odit laborum officiis et et accusamus
              </div>
              <div className="flex gap-3">
                <div className="p-2 bg-blue-100 rounded-full  ">
                  <BsTwitter className="text-[#37517E]  " />
                </div>
                <div className="p-2 bg-blue-100 rounded-full  ">
                  <BsFacebook className="text-[#37517E]  " />
                </div>
                <div className="p-2 bg-blue-100 rounded-full  ">
                  <BsInstagram className="text-[#37517E]  " />
                </div>
                <div className="p-2 bg-blue-100 rounded-full  ">
                  <BsLinkedin className="text-[#37517E]  " />
                </div>
              </div>
            </div>
          </UpwardAnimate>
        </div>
      </OnView>
    </div>
  );
};

export default SectionSeven;
