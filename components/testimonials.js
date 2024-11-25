"use client";

import Image from "next/image";
import ceoImage from "@/app/public/assets/pic.png"; 
import directorImage from "@/app/public/assets/pic1.png";

const Testimonials = () => {
  return (
    <section className="py-8 md:py-12 lg:py-16 bg-[#170057]">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white text-center mb-12">
          Testimonials
        </h2>
        <div className="flex flex-wrap justify-center items-center space-y-16 md:space-y-0 md:space-x-8">
          <div className="relative bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg p-6 rounded-lg shadow-lg text-white max-w-xs w-full mx-auto lg:mx-0">
            <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
              <Image src={ceoImage} alt="CEO" width={80} height={80} className="rounded-full shadow-md border-4 border-white"/>
            </div>
            <div className="mt-12 text-center">
              <h3 className="text-xl font-bold">Jabbar Ahmed</h3>
              <p className="text-sm text-gray-300">CEO</p>
              <p className="text-gray-300 italic mt-4">
                Our company has seen remarkable improvements in efficiency and productivity since adopting their solutions. Highly recommended!
              </p>
            </div>
          </div>
          <div className="relative bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg p-6 rounded-lg shadow-lg text-white max-w-xs w-full mx-auto lg:mx-0">
            <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
              <Image src={directorImage} alt="Director" width={80} height={80} className="rounded-full shadow-md border-4 border-white"/>
            </div>
            <div className="mt-12 text-center">
              <h3 className="text-xl font-bold">Jabbar Ahmed</h3>
              <p className="text-sm text-gray-300">Director</p>
              <p className="text-gray-300 italic mt-4">
                Their exceptional support and innovative solutions have been instrumental in our business success. A truly valuable partnership.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
