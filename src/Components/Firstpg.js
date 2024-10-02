"use client"
import React from "react";
import Image from "next/image";
import Images from "../Components/Images/background.jpeg"
import Overlay from "../Components/Images/foreground.jpeg"
import { useRouter } from "next/navigation";
const Firstpg = () => {
    const router =useRouter();
    const Shop =() => {
        router.push ("/");
    };
   
  return (
    <div className="bg-[#025048]  h-svh">
      <div className="flex">
        <div className="text-white text-3xl font-medium py-9 pl-8">
          <p>CeramicShop</p>
        </div>

        <div className="flex place-items-center space-x-6 text-white pl-60 ">
          <p className="cursor-pointer" >HOME</p>
          <p className="cursor-pointer" >ABOUT</p>
          <p className="cursor-pointer">SHOP</p>
          <p className="cursor-pointer">CONTACT</p>
          <div className="pl-96">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
              />
            </svg>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-10"> 
        <div className=" col-span-5">
            <div className="py-32 pl-8">
            <p className="text-white capitalize">Welcome to CeramicShop</p>
            <div className="py-4 text-4xl text-white font-bold">
            <h1 className=" text-6xl"> Elevate Your</h1>
            <h1 className=" text-6xl">Space With</h1>
            <h1 className=" text-6xl">Ceramic Elegance.</h1>
             </div>
             <p className="text-white text-xl font-bold"> Starting From Just $149,990</p>
             <button onClick={Shop} className="border border-white hover:bg-white hover:text-green-300 text-white mt-5 py-2 px-4">SHOP NOW</button>
            </div>
        </div>
        <div className="col-span-5">
       <div className="relative w-full py-20 pl-36"> <Image src={Images} alt="no img" className="h-[400]" fit="cover" /> </div>
        <Image id="overlay" src={Overlay} alt="overlay img" className="absolute top-52 w-56 "  />
        </div>
      </div>
    </div>
  );
};

export default Firstpg;
