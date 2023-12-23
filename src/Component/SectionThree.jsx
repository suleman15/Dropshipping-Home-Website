import React from "react";
import { useState } from "react";
import { BiCommand } from "react-icons/bi";
import {
  BsBinoculars,
  BsBoxSeam,
  BsBrightnessHighFill,
  BsEasel,
  BsMap,
} from "react-icons/bs";
import OnView from "./OnView";
const ListItem = ({ count, text }) => {
  return (
    <li className=" text-body-color dark:text-dark-6 flex text-sm font-poppins">
      <span className="bg-primary mr-2.5 flex h-[20px] text-sm w-full max-w-[20px] items-center justify-center rounded-full  text-white bg-[#37517E]">
        {count}
      </span>
      {text}
    </li>
  );
};
const SectionThree = () => {
  const [active, setActive] = useState("inventory");

  const data = {
    dashboard: {
      title: "Dashboard",
      content:
        "Get a full overview of your eCommerce business in seconds. Preview all of your important store data all in one place.",
      features: [
        "Full account overview",
        "Inventory status alerts",
        "Sales trends",
      ],
      img: "./img/features-1.svg",
    },
    orders: {
      title: "orders",
      content:
        "Our support team works around the clock to ensure that all of your orders are being processed in real time. Our Librex Go Dashboard supports seamless integrations with unlimited selling channels.",
      img: "./img/features-2.svg",

      features: [
        " Same-day Order Processing",
        "Real-time Order Reporting",
        "Error-free Turn Around.",
      ],
    },
    inventory: {
      title: "Inventory",
      content:
        "Managing inventory can become really frustrating especially when you have multiple selling channels. Our in-house software takes all the stress off of having to keep track of your inventory.",
      features: [
        " Live Inventory Updates.",
        "Manage and Transfer Inventory.",
        "Inventory Lifecycle (Coming soon).",
      ],
      img: "./img/features-3.svg",
    },
    inbound: {
      title: "inbound",
      content:
        "Send us containers, pallets or individual cartons, and our team will turn around all inbound shipments in less than 8 hours so you can simply start shipping your products the day they arrive.",
      features: [
        "Same Day Receiving.",
        "Retail Storage Network keeps your inventory closest to your customers.",
      ],
      img: "./img/features-4.svg",
    },
    fba: {
      title: "fba",
      content:
        "Keeping up with inventory restrictions from Amazon can be tedious. Whether it's an FBA prep or replenishment request, we will take care of it within 1 business day. Simply upload your labels to our software and we will take it from there.",
      features: [
        "Same Day Forwarding.",
        "FBA Prep 2 Day Turnaround.",
        "Custom Work Orders for Bundles and more.",
      ],
      img: "/img/features-5.svg",
    },
    b2b: {
      title: "fba",
      content:
        "Through Eastern, you can seamlessly connect to retailers for EDI-automated wholesale and retail workflows, and print retailer-compliant packing slips. With an expansive set of retailers supported, Eastern provides:",
      img: "./img/features-6.svg",

      features: [
        " Wholesale order fulfillment: inventory shipped to brick-and-mortar stores or distribution hubs.",
        " Retailer dropshipping: orders placed on retailers websites and shipped directly to end consumers.",
      ],
    },
  };

  return (
    <div className="bg-white">
      <OnView css="flex flex-col justify-center p-5 bg-white">
        <div className=" grid lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-1  justify-items-center p-5 gap-4 justify-center ">
          <div
            className={`group w-[150px] text-lg font-semibold h-[150px]  hover:bg-[#37517E] capitalize p-3 text-center hover:text-white flex flex-col justify-center items-center gap-3 ${
              active == "dashboard"
                ? `bg-[#37517E] [&>*:first-child]:text-white text-white`
                : "bg-white"
            }`}
            htmlFor="dashboard"
            onClick={(e) => {
              setActive("dashboard");
            }}
          >
            <BsBinoculars
              className={`group-hover:text-white text-[royalblue] text-3xl`}
            />
            Dashboard
          </div>
          <div
            className={`group w-[150px] text-lg font-semibold h-[150px]  hover:bg-[#37517E] capitalize p-3 text-center hover:text-white flex flex-col justify-center items-center gap-3 ${
              active == "orders"
                ? `bg-[#37517E] [&>*:first-child]:text-white text-white`
                : "bg-white"
            }`}
            htmlFor="order"
            onClick={(e) => {
              setActive("orders");
            }}
          >
            <BsBoxSeam
              className={`group-hover:text-white text-[purple] text-3xl`}
            />
            Orders
          </div>
          <div
            className={`group w-[150px] text-lg font-semibold h-[150px]  hover:bg-[#37517E] capitalize p-3 text-center hover:text-white flex flex-col justify-center items-center gap-3 ${
              active == "inventory"
                ? `bg-[#37517E] [&>*:first-child]:text-white text-white`
                : "bg-white"
            }`}
            htmlFor="inventory"
            onClick={(e) => {
              setActive("inventory");
            }}
          >
            <BsBrightnessHighFill
              className={`group-hover:text-white text-[dodgerblue] text-3xl`}
            />
            inventory
          </div>
          <div
            className={`group w-[150px] text-lg font-semibold h-[150px]  hover:bg-[#37517E] capitalize p-3 text-center hover:text-white flex flex-col justify-center items-center gap-3 ${
              active == "inbound"
                ? `bg-[#37517E] [&>*:first-child]:text-white text-white`
                : "bg-white"
            }`}
            htmlFor="inbound"
            onClick={(e) => {
              setActive("inbound");
            }}
          >
            <BiCommand
              className={`group-hover:text-white text-[red] text-3xl`}
            />
            inbound shipment
          </div>
          <div
            className={`group w-[150px] text-lg font-semibold h-[150px]  hover:bg-[#37517E] capitalize p-3 text-center hover:text-white flex flex-col justify-center items-center gap-3 ${
              active == "fba"
                ? `bg-[#37517E] [&>*:first-child]:text-white text-white`
                : "bg-white"
            }`}
            htmlFor="fba"
            onClick={(e) => {
              setActive("fba");
            }}
          >
            <BsEasel
              className={`group-hover:text-white text-[blue] text-3xl`}
            />
            fBA Request
          </div>
          <div
            className={`group w-[150px] text-lg font-semibold h-[150px]  hover:bg-[#37517E] capitalize p-3 text-center hover:text-white flex flex-col justify-center items-center gap-3 ${
              active == "b2b"
                ? `bg-[#37517E] [&>*:first-child]:text-white text-white`
                : "bg-white"
            }`}
            htmlFor="b2b"
            onClick={(e) => {
              setActive("b2b");
              console.log(e.target.querySelector(""));
            }}
          >
            <BsMap
              className={`group-hover:text-white text-[#aaaa28] text-3xl`}
            />
            B2B Fulfillment
          </div>
        </div>
        <div className="w-full  relative flex lg:flex-row flex-col ">
          <div className="w-full flex flex-col gap-3 px-10">
            <div className="text-sm italic">{data[active].content}</div>
            <ol className="space-y-3">
              <div className="text-lg text-[#37517e]">FEATURES</div>

              {data[active].features.map((item, index) => {
                return <ListItem count={index + 1} text={item} />;
              })}
            </ol>
          </div>
          <img className={"h-[300px]"} src={data[active].img} alt="png" />
        </div>
      </OnView>
    </div>
  );
};

export default SectionThree;
