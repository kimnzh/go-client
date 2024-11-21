"use client";
import React from "react";
import Image from "next/image";

// Components untuk Scroll Gallery
const ScrollGallery = () => {
  // Sample images - replace with your actual images
  const images = [
    ["/raja_ampat.png", "Slide 1"],
    ["/komodo_island.png", "Slide 2"],
    ["/mount_bromo.png", "Slide 3"],
  ];

  return (
    <div className="w-full mx-auto">
      {/* Main container with custom scrollbar styling */}
      <div
        className="
          relative 
          overflow-x-auto 
          rounded-lg
          [&::-webkit-scrollbar]:h-4
          [&::-webkit-scrollbar-track]:rounded-full
          [&::-webkit-scrollbar-track]:bg-gray-100
          [&::-webkit-scrollbar-thumb]:rounded-full
          [&::-webkit-scrollbar-thumb]:bg-[#44553D]/70
          hover:[&::-webkit-scrollbar-thumb]:bg-[#44553D]
          transition-colors
        "
      >
        {/* Images container */}
        <div className="flex gap-12 pb-4">
          {images.map((image, index) => (
            <div key={index} className="flex-shrink-0 first:ml-0 last:mr-0">
              <Image
                height={1800}
                width={1200}
                src={image[0]}
                alt={image[1]}
                className="rounded-lg object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

function Destinations() {
  return (
    <>
      <div id="destination" className="px-10 min-h-screen">
        <h1 className="flex justify-center text-[100px] font-bold py-10">
          Destinations
        </h1>
        <div className="flex flex-col items-center">
          <ScrollGallery />
          <button className="my-16 flex w-96 h-28 bg-[#2B3826]">
            <h1 className="m-auto text-4xl text-white font-semibold">
              Search Trips
            </h1>
          </button>
        </div>
      </div>
    </>
  );
}

export default Destinations;
