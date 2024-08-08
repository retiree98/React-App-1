import React, { useState } from "react";
import port1 from "../../assets/imgs/port1.png";
import port2 from "../../assets/imgs/port2.png";
import port3 from "../../assets/imgs/port3.png";
import TitleStar from "../../components/titleStar/TitleStar";

import PortfolioItem from "../../components/portfolioItem/PortfolioItem";

export default function Portfolio() {
  const [isVisible, setIsVisible] = useState(false);
  const [img, setImg] = useState(port1);
  function showImg(img) {
    setIsVisible(true);
    setImg(img);
  }
  function hideImg() {
    setIsVisible(false);
    setImg(null);
  }
  const imgs = [
    { id: 1, img: port1 },
    { id: 2, img: port2 },
    { id: 3, img: port3 },
    { id: 4, img: port1 },
    { id: 5, img: port2 },
    { id: 6, img: port3 },
  ];
  return (
    <section className={`py-7 w-11/12 mx-auto`}>
      <TitleStar
        title="portfolio component"
        titleStyle="text-navy-blue"
        starStyle="bg-navy-blue"
      />
      <div className="flex flex-wrap">
        {imgs.map((item) => {
          return (
            <PortfolioItem showImg={showImg} img={item.img} key={item.id} />
          );
        })}
      </div>

      {isVisible && (
        <div
          onClick={hideImg}
          className="fixed z-40 top-0 left-0 bottom-0 right-0 bg-primary bg-opacity-25 flex justify-center items-center"
        >
          <img
            onClick={(e) => e.stopPropagation()}
            src={img}
            className="lg:w-1/2 md:w-3/4 w-11/12"
          />
        </div>
      )}
    </section>
  );
}
