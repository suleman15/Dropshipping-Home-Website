import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaLocationDot } from "react-icons/fa6";
import { IoPhonePortraitOutline } from "react-icons/io5";
import "./ruf.scss";
import OnView from "./OnView";
export default () => {
  let ruf = (
    <div className="flex  flex-col gap-5 lg:w-1/3 w-full    border-t-4 border-b-4  py-10 border-[dodgerblue]   overflow-hidden">
      <div className="flex   items-center gap-3 group">
        <div className="p-3 text-[dodgerblue] bg-[#1e8fff48] group-hover:bg-[dodgerblue] group-hover:text-white  rounded-full">
          <FaLocationDot className="text-xl" />
        </div>
        <div>
          <h4 className="text-[20px] font-bold">Location:</h4>
          <p>A108 Adam Street, New York, NY 535022</p>
        </div>
      </div>

      <div className="flex   items-center gap-3 group">
        <div className="p-3 text-[dodgerblue] bg-[#1e8fff48] group-hover:bg-[dodgerblue] group-hover:text-white  rounded-full">
          <FaEnvelope className="text-xl" />
        </div>
        <div>
          <h4 className="text-[20px] font-bold">Email:</h4>
          <p>info@example.com</p>
        </div>
      </div>

      <div className="flex   items-center gap-3 group">
        <div className="p-3 text-[dodgerblue] bg-[#1e8fff48] group-hover:bg-[dodgerblue] group-hover:text-white rounded-full">
          <IoPhonePortraitOutline className="text-xl" />
        </div>
        <div>
          <h4 className="text-[20px] font-bold">Call:</h4>
          <p>+1 5589 55488 55s</p>
        </div>
      </div>
      <div>
        <iframe
          className="w-full "
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113023.68930447951!2d68.75125226511955!3d27.71758605246506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3935d4e60abe0af7%3A0xcd579d655a1c3ad4!2sSukkur%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1703277406510!5m2!1sen!2s"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture full"
        ></iframe>
      </div>
    </div>
  );

  let form = (
    <form
      action="forms/contact.php"
      method="post"
      role="form"
      className="font-poppins max-w-[700px] border-t-4 border-b-4  py-10 border-[dodgerblue]   overflow-hidden flex flex-col gap-3 lg:w-2/3 w-full"
    >
      <div className=" flex gap-4">
        <div className="w-full flex flex-col gap-2">
          <label for="name">Your Name</label>
          <input
            type="text"
            name="name"
            className="border-[3px] border-[lightgray] p-3  outline-none  focus:border-[dodgerblue] w-full"
            id="name"
            required=""
          />
        </div>
        <div className="w-full flex flex-col gap-2">
          <label for="name">Your Email</label>
          <input
            type="email"
            className="border-[3px] border-[lightgray] p-3 outline-none  focus:border-[dodgerblue] w-full"
            name="email"
            id="email"
            required=""
          />
        </div>
      </div>
      <div className="w-full flex flex-col gap-2">
        <label for="name">Subject</label>
        <input
          type="text"
          className="border-[3px] border-[lightgray] p-3 outline-none  focus:border-[dodgerblue] w-full"
          name="subject"
          id="subject"
          required=""
        />
      </div>
      <div className="w-full flex flex-col gap-2">
        <label for="name">Message</label>
        <textarea
          className="border-[3px] border-[lightgray] p-3 outline-none  focus:border-[dodgerblue] w-full"
          name="message"
          rows="10"
          required=""
        ></textarea>
      </div>

      <button type="submit" className="bg-[dodgerblue] p-3 text-white">
        Send Message
      </button>
    </form>
  );

  return (
    <div className="bg-white">
      <OnView className="flex flex-col justify-center items-center  text-[#37517E]  p-5 gap-3 ">
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
            FREQUENTLY ASKED QUESTIONS
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
        <div className="flex gap-3 p-10 w-full lg:flex-row flex-col justify-center items-cen ">
          {ruf}
          {form}
        </div>
      </OnView>
    </div>
  );
};
