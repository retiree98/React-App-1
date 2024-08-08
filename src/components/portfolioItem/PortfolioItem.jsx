import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
export default function PortfolioItem({ img, showImg }) {
  return (
    <div className="lg:w-1/3 md:w-1/2 w-full p-5">
      <div
        onClick={() => showImg(img)}
        className=" group  cursor-pointer rounded-lg overflow-hidden relative"
      >
        <img src={img} className="rounded-lg w-full" />
        <div className="w-full h-full top-0 bottom-0 left-0 right-0 z-10 transition duration-500 absolute bg-main-color text-white flex opacity-0  group-hover:opacity-100 justify-center items-center">
          <FontAwesomeIcon icon={faPlus} className="text-8xl" />
        </div>
      </div>
    </div>
  );
}
