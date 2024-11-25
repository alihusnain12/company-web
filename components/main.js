"use client";
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const starsData = Array.from({ length: 150 }, () => ({
  width: Math.random() * 3 + 1,
  height: Math.random() * 3 + 1,
  top: `${Math.random() * 100}%`,
  left: `${Math.random() * 100}%`,
}));

const gradients = [
  'from-blue-900 via-black to-black',
  'from-purple-900 via-black to-black',
  'from-teal-900 via-black to-black',
  'from-red-900 via-black to-black',
];

const headingVariants = {
  initial: { opacity: 0, y: -20 },
  animate: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" }},
};

const textVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 1.5, ease: "easeOut" }},
};

const Galaxy = () => {
  const [gradientIndex, setGradientIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setGradientIndex((prevIndex) => (prevIndex + 1) % gradients.length);
    }, 3000); // Change gradient every 3 seconds
    return () => clearInterval(interval);
  }, [gradients.length]);

  return (
    <div className={`relative flex items-center justify-center min-h-screen bg-gradient-to-t ${gradients[gradientIndex]} overflow-hidden transition-all duration-[3000ms] p-5 sm:p-10 md:p-15 lg:p-20`}>
      <div className="absolute inset-0">
        {starsData.map((star, index) => (
          <motion.div 
            key={index}
            className="absolute bg-white rounded-full"
            style={{
              width: star.width,
              height: star.height,
              top: star.top,
              left: star.left,
            }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: Math.random() * 2 + 1, repeat: Infinity, delay: Math.random() * 5 }}
          />
        ))}
      </div>
      <div className="relative z-20 flex flex-col items-center text-center text-white p-5">
        <motion.h1 
          className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold mb-5 drop-shadow-xl pb-5" 
          style={{ 
            background: 'linear-gradient(to right, white, darkgray)', 
            WebkitBackgroundClip: 'text', 
            WebkitTextFillColor: 'transparent' 
          }}
          variants={headingVariants}
          initial="initial"
          animate="animate"
        >
          Transforming complexity<br className="hidden sm:block" /> into elegance
        </motion.h1>
        <motion.div 
          className="text-base sm:text-lg md:text-xl lg:text-2xl mb-10 drop-shadow-xl lg:leading-relaxed"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <p>Specializing in bespoke IT solutions,we tailor our services to match</p>
          <p> the unique requirements of your business, ensuring optimal</p>
          <p> performance and efficiency.</p>
        </motion.div>
        <motion.a 
          href="#" 
          className="px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-full inline-block relative transition-all duration-500 transform hover:scale-110 text-white group"
          style={{
            background: 'linear-gradient(90deg, rgba(255,255,255,0.1), rgba(255,255,255,0.3))',
            boxShadow: '0 0 15px rgba(255, 255, 255, 0.6)',
            padding: '8px 16px',
          }}
          whileHover={{ scale: 1.1 }}
        >
          Get Started
          <span className="inline-block ml-2 transition-transform duration-300 group-hover:-rotate-45">
            <FontAwesomeIcon icon={faArrowRight} />
          </span>
        </motion.a>
      </div>
    </div>
  );
};

export default Galaxy;
