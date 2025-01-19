import React from "react";
import { BsThreeDots } from "react-icons/bs";

function Cards({id, disc}) {
  return (
    <div className="card lg:h-full min-[320px]:h-24 min-[320px]:overflow-y-scroll md:overflow-hidden md:h-[15%] md:mb-4 lg:mb-0 md:my-0 min-[320px]:my-2 xl:py-4 lg:py-2 px-3 lg:w-1/5 md:w-full rounded-xl bg-[#f1f0f0d3] flex-shrink-0">
      <div className="flex justify-between items-end w-full">
        <h2 className="md:text-xl font-semibold min-[320px]:text-base">{id}</h2>
        <span className="text-lg cursor-pointer">
          <BsThreeDots />
        </span>
      </div>
      <p className="xl:text-base min-[1300px]:text-xl lg:text-base min-[320px]:text-xs font-bold mt-2">
        {disc}
      </p>
    </div>
  );
}

export default Cards;
