"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import img1 from "@/app/public/assets/about.svg"; // Check these paths

const BusinessFeatures = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const items = [
    "Exceptional Quality Assurance",
    "Lifetime Support Guaranteed",
    "Comprehensive Documentation",
    "Elite Performance Standards",
    "Top-tier Quality Assurance",
    "Developer Friendly",
  ];

  const textVariants = {
    hidden: { opacity: 1, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.5,
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 1, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="py-8 md:py-12 lg:py-16 bg-[#170057]">
      <div className="container mx-auto flex flex-col md:flex-row text-center md:text-left">
        <div className="md:w-1/2 mb-8 md:mb-0 px-4">
          <motion.h2
            className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 md:mb-4"
            initial="hidden"
            animate={controls}
            variants={textVariants}
          >
            Tailored for Emerging Ventures and Established Enterprises
          </motion.h2>
          <motion.p
            className="hidden md:block text-base md:text-lg lg:text-xl text-gray-500 mb-6"
            initial="hidden"
            animate={controls}
            variants={textVariants}
          >
            Our primary focus is to equip visitors with the knowledge to fortify highly sensitive business applications through engaging panel discussions and collaborative roundtables.
          </motion.p>
          <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
            {items.map((item, index) => (
              <div
                key={index}
                className="p-4 bg-blue-950 rounded-lg shadow-lg flex items-center"
              >
                <span className="text-green-500 mr-3">✔</span>
                <h3 className="text-sm md:text-lg lg:text-xl font-semibold text-gray-200">{item}</h3>
              </div>
            ))}
          </div>
        </div>
        <div className="md:w-1/2 flex items-center justify-center mt-8 md:mt-0">
          <motion.div
            ref={ref}
            variants={imageVariants}
            initial="hidden"
            animate={controls}
            className="relative w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px]"
          >
            <Image src={img1} alt="Feature image 1" layout="fill" objectFit="contain" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BusinessFeatures;