import { BiDownArrow, BiMenu } from "react-icons/bi";

const Header = () => {
  return (
    <header className="flex  lg:flex-row flex-col    justify-evenly items-center px-10 fixed group z-10 w-full p-3 left-0 top-0 max-h-screen  bg-[#37517ec0] text-white">
      <div className="text-3xl flex justify-between w-full lg:w-auto  ">
        <a href="/" className="logo">
          EASTERN
        </a>
        <div
          className="lg:hidden block"
          onClick={(e) => {
            let a = document.querySelector(".navmenu");
            let condition = a.classList.contains("block");
            if (condition) {
              a.classList.remove("block");
              a.classList.add("hidden");
            } else {
              a.classList.remove("hidden");
              a.classList.add("block");
            }
          }}
        >
          <BiMenu />
        </div>
      </div>
      <div className=" navmenu lg:flex hidden  lg:w-auto w-full">
        <ul className="flex gap-2 capitalize text-sm flex-col   lg:flex-row ">
          <li className=" py-2 px-3 hover:bg-gray-400">Home</li>
          <li className=" py-2 px-3 hover:bg-gray-400">Fulfillment</li>
          <li className=" py-2 px-3 hover:bg-gray-400">FBA Prep</li>
          <li className=" py-2 px-3 hover:bg-gray-400">Software</li>
          <li className=" py-2 px-3 hover:bg-gray-400">Abouts</li>
          <li className="   relative [&>*:nth-child(2)]:hover:flex  ">
            <div className="hover:bg-gray-400 py-2 px-3 justify-between  w-full flex gap-3 items-center ">
              Dashboard <BiDownArrow />
            </div>
            <ul className="hidden md:relative lg:absolute bg-white p-3 top-[100%]     flex-col gap-1  text-black  md:w-full lg:w-[250px] rounded-lg">
              <li className=" p-3 hover:bg-gray-400 hover:text-white">Home</li>
              <li className=" p-3 hover:bg-gray-400 hover:text-white">Home</li>
              <li className=" p-3 hover:bg-gray-400 hover:text-white">Home</li>
              <li className=" hover:bg-gray-400 hover:text-white   relative [&>*:nth-child(2)]:hover:flex ">
                {" "}
                <div className="hover:bg-gray-400 py-2 px-3 flex justify-between    w-full ">
                  Dashboard <BiDownArrow />
                </div>
                <ul className="hidden md:relative lg:absolute bg-white p-3 top-[0%]     flex-col gap-1  text-black  md:w-full lg:w-[250px] rounded-lg lg:left-[-250px] left-0 ">
                  <li className=" p-3 hover:bg-gray-400 hover:text-white">
                    Home
                  </li>
                  <li className=" p-3 hover:bg-gray-400 hover:text-white">
                    Home
                  </li>
                  <li className=" p-3 hover:bg-gray-400 hover:text-white">
                    Home
                  </li>
                  <li className=" p-3 hover:bg-gray-400 hover:text-white">
                    Ruf
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li className=" py-2 px-3 hover:bg-gray-400">contact</li>
          <li className=" py-2  hover:bg-[dodgerblue] hover:text-white rounded-full  border-[dodgerblue]  px-5 border-2">
            {" "}
            Get Started
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
