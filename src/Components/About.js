import React from "react";
import Image from "next/image";
import about from "../Components/Images/about.jpeg";
import side from "../Components/Images/side.jpeg";
const About = () => {
  return (
    <div>
      <p className="text-green-900 mt-36 pl-8">ABOUT CERAMIC SHOP</p>
      <h1 className="font-bold text-3xl text-green-950 pl-8">
        The versatility of ceramics is what makes them{" "}
      </h1>
      <h1 className="font-bold text-3xl text-green-950 pl-8">
        truly remarkable, with their presence in various{" "}
      </h1>
      <h1 className="font-bold text-3xl text-green-950 pl-8">
        {" "}
        forms such as stoneware and porcelain.
      </h1>
      <div className="grid grid-cols-10">
        <div className="col-span-5">
          <Image src={about} alt="abt img" className="pl-8 py-8" />
        </div>
        <div className="col-span-5">
          <Image src={side} alt="no side" className="px-10 py-9" />
          <div className="pl-6 font-semibold text-2xl">
            <p className="text-[#025048]">
              Welcome to Ceramic Shop, where passion meets{" "}
            </p>
            <p className="text-[#025048]">
              craftsmanship to bring you a world of timeless{" "}
            </p>
            <p className="text-[#025048]">beauty and creativity.</p>
          </div>
          <div className="text-green-800 pl-7 py-8">
            <p>
              Our journey is steeped in the art of ceramics, where each piece
              tells a
            </p>
            <p>
              unique story. Get to know the heart and soul behind our store.
            </p>
          </div>
          <button
            className="border border-green-950 hover:bg-green-950 hover:text-green-300 text-green mt-5 py-2 px-4 pl-8">
            READ MORE
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
