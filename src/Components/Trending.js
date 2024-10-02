import React from 'react'
import Pricels from './Pricels'
import pots from "../Components/Images/pots.jpeg"
import cup from "../Components/Images/cup.jpeg"
import mug from "../Components/Images/mug.jpeg"


const Trending = () => {
    const Array_Price = [
        { priceImage: pots, priceAmount: "$298.57", priceName: "Ceramic Bottles" },
        { priceImage: cup, priceAmount: "$11.90", priceName: "Ceramic Cup" },
        { priceImage: mug, priceAmount: "$150", priceName: "Ceramic Mug" },
     ];
  return (
    <div>
      <p className='text-green-900 font-light text-xl mt-10 pl-8'>TRENDING NOW</p>
      <h1 className='text-green-950 text-4xl pl-8 py-5'>Minimalist Ceramic Designs</h1>

      <div className='grid grid-cols-3 px-8 py-7 gap-10'>
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
  )
}

export default Trending