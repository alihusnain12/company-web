"use client";

import Image from "next/image";
import img1 from "@/app/public/assets/bugs.png"; // Update this path as needed

const Bugs = () => {
  return (
    <section className="py-8 md:py-12 lg:py-16 bg-[#170057]">
      <div className="flex justify-center items-center">
        <div className="border-t border-gray-700 mb-20" style={{ width: "90%" }}></div>
      </div>
      <div className="container mx-auto flex flex-col md:flex-row items-center text-center md:text-left px-4">
        <div className="md:w-1/2 flex items-center justify-center mt-8 md:mt-0">
          <div className="relative w-full h-[150px] sm:h-[200px] md:h-[400px] lg:h-[500px] overflow-hidden">
            <Image src={img1} alt="Feature image" layout="fill" objectFit="contain" />
          </div>
        </div>
        <div className="md:w-1/2 mb-8 md:mb-0 px-4">
          <div className="space-y-6">
            <div className="text-container">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-4 font-sans">
                Bug Free Code
              </h2>
              <p className="text-base md:text-lg lg:text-xl text-gray-400 mb-6 font-serif">
                Delivering Reliable Solutions with Impeccable Code Quality to Drive Business Success and Customer Satisfaction.
              </p>
            </div>
            <div className="text-container">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-4 font-sans">
                Premier Support
              </h2>
              <p className="text-base md:text-lg lg:text-xl text-gray-400 mb-6 font-serif">
                Comprehensive Assistance Tailored to Your Needs: Elevating Your Experience with Premier Support Services.
              </p>
            </div>
            <div className="text-container">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-4 font-sans">
                Cutting-edge Solutions for Modern Challenges
              </h2>
              <p className="text-base md:text-lg lg:text-xl text-gray-400 mb-6 font-serif">
                Harnessing the latest technologies and innovative approaches, we provide cutting-edge solutions designed to address the complexities of modern business challenges, ensuring sustainable growth and success.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bugs;