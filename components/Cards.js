import React, { useEffect, useState } from "react";
import { BsThreeDots } from "react-icons/bs";

function Cards({id, disc, status}) {
  const [first, setfirst] = useState(false);

  const handleEdit = (e) => {
    e.stopPropagation(); // Prevent window click from closing the dropdown immediately
    setfirst((prev) => !prev);
  };

  useEffect(() => {
    if (first) {
      const handleClickOutside = () => {
        setfirst(false);
      };

      // Attach the window click listener
      window.addEventListener("click", handleClickOutside);

      // Cleanup listener
      return () => {
        window.removeEventListener("click", handleClickOutside);
      };
    }
  }, [first]);
  return (
    <div className="card lg:h-full min-[320px]:h-24 min-[320px]:overflow-y-scroll md:overflow-hidden md:h-[15%] md:mb-4 lg:mb-0 md:my-0 min-[320px]:my-2 xl:py-4 lg:py-2 px-3 lg:w-1/5 md:w-full rounded-xl bg-[#f1f0f0d3] flex-shrink-0">
      <div className="flex justify-between items-center w-full relative">
        <h2 className=" font-semibold text-sm">{id}</h2>
        <span className="text-lg cursor-pointer" onClick={handleEdit}>
          <BsThreeDots />
        </span>
        {first && <button className="backdrop-blur-md font-semibold absolute p-2 rounded-xl right-0 top-7 bg-[#e0dcdcb9]">{status}</button>}
      </div>
      <p className="xl:text-base min-[1300px]:text-xl lg:text-base min-[320px]:text-xs font-bold mt-2">
        {disc}
      </p>
    </div>
  );
}

export default Cards;
