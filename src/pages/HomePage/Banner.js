import React from "react";
import bannerPhoto1 from "../../assects/banner/free-service-dec-home-banner-982x500.webp";
import bannerPhoto2 from "../../assects/banner/winter-new-home-982x500.webp";

const Banner = () => {
  return (
    <div>
      <div>
        <div>
          <div className="carousel w-full">
            <div id="item1" className="carousel-item w-full">
              <img src={bannerPhoto1} className="w-full" alt="" />
            </div>
            <div id="item2" className="carousel-item w-full">
              <img src={bannerPhoto2} className="w-full" alt="" />
            </div>
          </div>
          <div className="flex justify-center w-full py-2 gap-2">
            <a href="#item1" className="btn btn-xs">
              1
            </a>
            <a href="#item2" className="btn btn-xs">
              2
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
