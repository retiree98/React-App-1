import React, { useState } from "react";
import TitleStar from "../../components/titleStar/TitleStar";
import FormInput from "../../components/formInput/FormInput";

export default function Contact() {
  // const [isVisiable setIsVisible]=useState()
  return (
    <section className="py-7">
      <TitleStar
        title="conatct section"
        titleStyle="text-navy-blue"
        starStyle="bg-navy-blue"
      />
      <form className="w-1/2 mx-auto p-4 mt-12">
        <FormInput name="userName" type="text" />
        <FormInput name="userAge" type="number" />
        <FormInput name="userEmail" type="email" />
        <FormInput name="userPassword" type="password" />
        <input
          className="text-white bg-main-color mt-6 px-3 py-[.375rem] rounded-md  cursor-pointer transition-all duration-300 "
          type="submit"
          value="send message"
          onClick={(e) => e.preventDefault()}
        />
      </form>
    </section>
  );
}
