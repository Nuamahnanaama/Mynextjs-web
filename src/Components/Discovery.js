import React from "react";
import Image from "next/image";
import Pricels from "./Pricels";
import cup from "../Components/Images/cup.jpeg";
import plate from "../Components/Images/plate.jpeg";
import planter from "../Components/Images/planter.jpeg";
import bowls from "../Components/Images/bowls.jpeg"
import mug from "../Components/Images/mug.jpeg"
import spoon from "../Components/Images/cspoon.jpeg"
const Discovery = () => {
  const Array_Price = [
    { priceImage: cup, priceAmount: "$104.57", priceName: "Ceramic Cup" },
    { priceImage: plate, priceAmount: "$11.90", priceName: "Ceramic Plate" },
    { priceImage: planter, priceAmount: "$150", priceName: "Ceramic Vase" },

    { priceImage: bowls, priceAmount: "$164.57", priceName: "Ceramic Bowl" },
    { priceImage: mug, priceAmount: "$111.90", priceName: "Ceramic Mug" },
    { priceImage: spoon, priceAmount: "$50", priceName: "Ceramic Spoon" },


  ];
  return (
    <div className="mt-28">
      <div className="text-[#025048] pl-8">
        <p>MOST POPULAR</p>
        <h1 className="text-4xl font-semibold py-5">
          Discover the Latest Additions at Your Top
        </h1>
        <h1 className="text-4xl font-semibold">Choice Flower Shop</h1>
      </div>
      <div className="grid grid-cols-3 px-8 py-7 gap-6">
      {Array_Price.map((pricels) => {
        return (
          <Pricels
            priceImage={pricels.priceImage}
            priceAmount={pricels.priceAmount}
            priceName={pricels.priceName}
          />

        );
      })}
      </div>
    </div>
  );
};

export default Discovery;
