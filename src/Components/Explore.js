import React from "react";
import Image from "next/image";
import nude from "../Components/Images/nude.jpg";

const Explore = () => {
  return (
    <div>
      <div className="relative w-full h-[600px]">
        {/* Image with proper layout and styling */}
        <Image
          src={nude}
          alt="no img"
          layout="fill"
          quality={100}
          priority
          objectFit="cover"
          className="absolute inset-0"
        />

        {/* Overlay text */}
        <div
          id="overlayText"
          className="absolute inset-0 flex flex-col items-center justify-center text-[#025048] z-10"
        >
          <div className="bg-white py-20 px-20">
            <p className="text-4xl mb-4 ">Begin Your Ceramic Journey Explore</p>
            <p className="text-4xl px-20"> Our Stunning Collections</p>
            <p className="text-2xl px-28 py-4 ">Starting from just $149.00</p>
            <div className=" grid place-content-center">
              {" "}
              <button className="text-green-950 border border-green-950 hover:bg-green-900 hover:text-white px-4 py-3">
                SHOP NOW
              </button>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore;
