import React from "react";
import Image from "next/image";
import foot from "../Components/Images/footer.jpeg";
const Footer = () => {
  return (
    <div className="grid grid-cols-10">
      <div className="col-span-5">
        <Image src={foot} alt="no f " />
      </div>
      <div className="col-span-5 bg-[#025048]">
        <div className=" pl-14 py-16 text-white text-5xl">
          <p>Uncover the World</p>
          <p>Of Ceramic</p>
          <p>Artistry Of Your</p>
          <p>Journey Here</p>
          <button className="  text-white mt-4 py-4 px-5 text-sm bg-[#025048] hover:bg-white hover:text-[#025048] border border-white">
            SHOP NOW
          </button>
        </div>
      </div>

      <div className="flex">
        <div className="text-[#417B74] text-xl font-medium py-9 pl-8">
          <p>CeramicShop</p>
        </div>

        <div className="flex place-items-center space-x-6 text-[#417B74] pl-60 ">
          <p className="cursor-pointer">HOME</p>
          <p className="cursor-pointer">ABOUT</p>
          <p className="cursor-pointer">SHOP</p>
          <p className="cursor-pointer">CONTACT</p>
          <div className="pl-96 flex space-x-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
             className="size 20"
              viewBox="0 0 24 24"
            >
              <path d="M12,2C6.477,2,2,6.477,2,12c0,5.013,3.693,9.153,8.505,9.876V14.65H8.031v-2.629h2.474v-1.749 c0-2.896,1.411-4.167,3.818-4.167c1.153,0,1.762,0.085,2.051,0.124v2.294h-1.642c-1.022,0-1.379,0.969-1.379,2.061v1.437h2.995 l-0.406,2.629h-2.588v7.247C18.235,21.236,22,17.062,22,12C22,6.477,17.523,2,12,2z"></path>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              className="size 20"
              viewBox="0 0 24 24"
            >
              <path d="M 8 3 C 5.239 3 3 5.239 3 8 L 3 16 C 3 18.761 5.239 21 8 21 L 16 21 C 18.761 21 21 18.761 21 16 L 21 8 C 21 5.239 18.761 3 16 3 L 8 3 z M 18 5 C 18.552 5 19 5.448 19 6 C 19 6.552 18.552 7 18 7 C 17.448 7 17 6.552 17 6 C 17 5.448 17.448 5 18 5 z M 12 7 C 14.761 7 17 9.239 17 12 C 17 14.761 14.761 17 12 17 C 9.239 17 7 14.761 7 12 C 7 9.239 9.239 7 12 7 z M 12 9 A 3 3 0 0 0 9 12 A 3 3 0 0 0 12 15 A 3 3 0 0 0 15 12 A 3 3 0 0 0 12 9 z"></path>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              className="size 20"
              viewBox="0 0 24 24"
            >
              <path d="M22,3.999c-0.78,0.463-2.345,1.094-3.265,1.276c-0.027,0.007-0.049,0.016-0.075,0.023c-0.813-0.802-1.927-1.299-3.16-1.299 c-2.485,0-4.5,2.015-4.5,4.5c0,0.131-0.011,0.372,0,0.5c-3.353,0-5.905-1.756-7.735-4c-0.199,0.5-0.286,1.29-0.286,2.032 c0,1.401,1.095,2.777,2.8,3.63c-0.314,0.081-0.66,0.139-1.02,0.139c-0.581,0-1.196-0.153-1.759-0.617c0,0.017,0,0.033,0,0.051 c0,1.958,2.078,3.291,3.926,3.662c-0.375,0.221-1.131,0.243-1.5,0.243c-0.26,0-1.18-0.119-1.426-0.165 c0.514,1.605,2.368,2.507,4.135,2.539c-1.382,1.084-2.341,1.486-5.171,1.486H2C3.788,19.145,6.065,20,8.347,20 C15.777,20,20,14.337,20,8.999c0-0.086-0.002-0.266-0.005-0.447C19.995,8.534,20,8.517,20,8.499c0-0.027-0.008-0.053-0.008-0.08 c-0.003-0.136-0.006-0.263-0.009-0.329c0.79-0.57,1.475-1.281,2.017-2.091c-0.725,0.322-1.503,0.538-2.32,0.636 C20.514,6.135,21.699,4.943,22,3.999z"></path>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
             className="size-20"
              viewBox="0 0 24 24"
            >
              <path d="M12,2C6,2,6,8,6,8v1c0,0-0.023-0.001-0.063-0.001C5.597,8.999,4,9.069,4,10.395C4,11.94,5.697,12,5.965,12 C5.988,12,6,12,6,12c0,1-1.652,2.171-2.736,2.442c-1.01,0.392-1.251,1.061-1.264,1.568c-0.008,0.303,0.066,0.548,0.106,0.643 c0.377,0.885,1.497,1.342,2.594,1.342C4.738,19.434,5.776,20,6.471,20c0.794,0,1.634-0.388,1.634-0.388C8.146,19.646,9.425,21,12,21 s3.854-1.354,3.896-1.388c0,0,0.839,0.388,1.634,0.388c0.695,0,1.732-0.566,1.77-2.005c1.097,0,2.217-0.457,2.594-1.342 c0.04-0.095,0.114-0.34,0.106-0.643c-0.013-0.507-0.254-1.176-1.264-1.568C19.652,14.171,18,13,18,12c0,0,0.012,0,0.035,0 C18.303,12,20,11.94,20,10.395c0-1.326-1.597-1.396-1.937-1.396C18.023,8.999,18,9,18,9V8C18,8,18,2,12,2L12,2z"></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
