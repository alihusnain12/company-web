"use client";

import Image from "next/image";
import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import ModalVideo from "react-modal-video";
import 'react-modal-video/css/modal-video.min.css';
import img from "../app/public/assets/shape.svg";
import videoImg from "../app/public/assets/video.png";

const typingContainer = {
  hidden: { opacity: 1 },
  visible: { 
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const typingVariant = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const Video = () => {
  const [isOpen, setOpen] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { triggerOnce: false, threshold: 0.1 });

  return (
    <section className="relative z-10 py-16 md:py-20 lg:py-28 bg-[#170057]">
      <div className="absolute inset-0 bottom-0">
        <Image src={img} alt="Background shape" layout="fill" objectFit="contain" className="opacity-50"/>
      </div>
      <div className="container relative z-20 mb-36">
        <div className="text-center mb-16">
          <motion.div
            className="inline-block text-5xl md:text-6xl font-extrabold text-white mb-4"
            variants={typingContainer}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {"We are ready to help".split("").map((char, index) => (
              <motion.span key={index} variants={typingVariant}>
                {char}
              </motion.span>
            ))}
          </motion.div>
          <motion.p
            className="text-lg text-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: inView ? 1 : 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            Find the resources and assistance you need to make the most of our services
          </motion.p>
        </div>
        <div className="flex justify-center">
          <motion.div 
            ref={ref}
            className="wow fadeInUp mx-auto w-[800px] h-[400px] overflow-hidden rounded-md shadow-lg relative z-20"
            data-wow-delay=".15s"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.8 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="relative w-full h-full flex items-center justify-center">
              <Image src={videoImg} alt="Play video" layout="fill" objectFit="cover" className="rounded-md" />
              <button
                onClick={() => setOpen(true)}
                className="absolute flex items-center justify-center rounded-full bg-white bg-opacity-75 transition hover:bg-opacity-100 h-14 w-14 shadow-lg"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="text-blue-500"
                >
                  <path d="M3 22V2l18 10-18 10z" />
                </svg>
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="L61p2uyiMSo"
        onClose={() => setOpen(false)}
      />
    </section>
  );
};

export default Video;
