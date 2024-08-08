import React from "react";
import aboutcss from "./about.module.css";
import TitleStar from "../../components/titleStar/TitleStar";
import Paragraph from "../../components/paragraph/Paragraph";

export default function About() {
  return (
    <section
      className={`${aboutcss.about}  flex justify-center items-center  text-white h-full`}
    >
      <div>
        <TitleStar
          title="about component"
          titleStyle=" text-white"
          starStyle="bg-white"
        />

        <div className="flex flex-wrap w-4/5 mx-auto">
          <Paragraph />
          <Paragraph />
        </div>
      </div>
    </section>
  );
}
