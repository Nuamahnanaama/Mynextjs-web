import React from 'react'
import Firstpg from "../Components/Firstpg"
import About from "..//Components/About"
import Category from '@/Components/Category'
import Discovery from '@/Components/Discovery'
import Explore from '@/Components/Explore'
import Trending from '@/Components/Trending'
import Testimonial from '@/Components/Testimonial'
import Footer from '@/Components/Footer'
import CopyRight from '@/Components/CopyRight'
const page = () => {
  return (
    <div>
    <Firstpg />
    <About />
    <Category />
    <Discovery />
    <Explore />
    <Trending />
    <Testimonial />
    <Footer />
    <CopyRight />
    </div>
  )
}

export default page