import React from "react";
import heroImg from "../../assets/imgs/avataaars.svg";
import homecss from "./home.module.css";
import TitleStar from "../../components/titleStar/TitleStar";

export default function Home() {
  return (
    <section
      className={`${homecss.home} flex justify-center items-center text-center text-white`}
    >
      <div>
        <div>
          <div className="w-64 mb-4 mx-auto">
            <img className="w-full" src={heroImg} alt=" person" />
          </div>

          <TitleStar
            title="start Framework"
            titleStyle=" text-white"
            starStyle="bg-white"
          />
          <p>Graphic Artist - Web Designer - Illustrator</p>
        </div>
      </div>
    </section>
  );
}
