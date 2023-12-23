import React from "react";

const SectionFiveTwo = () => {
  return (
    <div className="flex justify-center text-white bg-[#000000a1] items-center p-[100px] gap-3 ">
      <div className="flex flex-col gap-3">
        <h1 className="text-3xl text-white font-bold"> Call To Action</h1>
        <div>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum.
        </div>
      </div>
      <div className="px-5">
        <button className="w-max font-bold px-5 py-3 border-2 hover:bg-[dodgerblue]  border-[dodgerblue] rounded-full">
          Call To Action
        </button>
      </div>
    </div>
  );
};

export default SectionFiveTwo;
