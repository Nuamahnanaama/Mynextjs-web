import React from 'react'
import Image from 'next/image'
import wood from "../Components/Images/drywood.jpg"
import vase from "../Components/Images/vase.jpg"
import human from "../Components/Images/Hshaped.jpg"

const Category = () => {
  return (
    <div className='grid grid-cols-10 bg-[#F1F4F1] py-16'>
      <div className='col-span-5'>
        <p className='text-[#0C574F] font-normal text-sm pl-8 mt-9'>THE BEST OR CERMAICS</p>
        <div className='text-[#424B4A] text-5xl py-8 pl-8'>
            <h1>
            Our Products Category​
            </h1>
            <div className='py-6 text-sm'>
            <p>Explore our exquisite collection of ceramic treasures that elevate your </p>
            <p>spaces and celebrate the artistry of craftsmanship. From dinnerware</p>
            <p>to decor, each piece in our product range is a testament to quality, </p>
            <p>style, and the timeless beauty of ceramics.</p>
            </div>
        </div>
         <div>
        <div className='relative w-full '> 
            <Image src={wood} quality={100} alt='no w' priority objectFit='cover'  className='pl-8 absolute inset-0'/>
            <div id='overlayText' className='flex flex-col items-center bg-white px-9  pl-8 z-10 absolute inset-y-10' >
            <h1 className='text-[#969B9B] text-xl'>Stylish Ceramic Home Decor</h1>
            <h1 className='text-[#969B9B]'>Starting from just $99.00</h1>
            </div>
         </div>
           </div>
      </div>
      <div className='col-span-5'>
        <Image src={vase} alt='no vase' className=' px-7'/>
        <div className='py-20 px-8'>
            <Image src={human} alt='no img' />
        </div>
      </div>
    </div>
  )
}

export default Category