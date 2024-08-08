import React, { useState } from "react";

export default function FormInput({ name, type }) {
  const [isVisiable, setIsVisible] = useState(false);
  function handelLabel(e) {
    e.target.value == "" ? setIsVisible(false) : setIsVisible(true);
  }

  return (
    <>
      <label
        className={`${
          isVisiable ? "top-0" : "top-10"
        } relative z-0  mb-2 text-main-color transition-all duration-500`}
        htmlFor={name}
      >
        {name} :
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={name}
        className="relative z-10 py-4 border-b border-b[#dee2e6] w-full outline-none px-3 font-normal bg-white mb-2"
        onInput={handelLabel}
      />
    </>
  );
}
