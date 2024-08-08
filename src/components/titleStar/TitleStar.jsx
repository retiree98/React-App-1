import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export default function Star(props) {
  let { title, titleStyle, starStyle } = props;
  return (
    <>
      <h2
        className={`${titleStyle} mt-6 text-center mb-4 md:text-5xl text-3xl font-bold uppercase`}
      >
        {title}
      </h2>
      <div className="flex gap-4 justify-center items-center mb-4">
        <div className={`${starStyle} h-1 w-20`}></div>
        <FontAwesomeIcon className={titleStyle} icon={faStar} />
        <div className={`${starStyle} h-1 w-20`}></div>
      </div>
    </>
  );
}
