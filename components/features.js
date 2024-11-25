"use client";
import { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faPalette, faMobileAlt, faChartLine, faCogs, faCloud, faRocket } from '@fortawesome/free-solid-svg-icons';
import { useInView } from 'react-intersection-observer';

const Features = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.1 });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
  };

  const headingVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } }
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-blue-950 overflow-hidden p-5 sm:p-10 md:p-15 lg:p-20">
      <div className="relative z-20 flex flex-col items-center text-center text-white p-5">
        <motion.div 
          className="mb-10"
          initial="hidden"
          animate="visible"
          variants={headingVariants}
        >
          <h2 className="text-5xl font-extrabold mb-4">Main Features</h2>
          <p className="text-xl lg:text-2xl">Discover the core functionalities tailored to elevate your business<br/> presence and streamline operations</p>
        </motion.div>
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 text-left">
          <motion.div className="p-5 rounded-lg hover:bg-blue-800 transition-colors duration-500" whileHover={{ scale: 1.1 }} initial="hidden" animate={controls} variants={cardVariants} transition={{ delay: 0.3 }}>
            <FontAwesomeIcon icon={faRocket} size="3x" className="text-blue-500 mb-3" />
            <h3 className="text-3xl font-bold mb-2">Web Development</h3>
            <p>We provide an extensive array of solutions tailored to meet diverse client needs, meticulously customized to align with project specifications and objectives.</p>
          </motion.div>
          <motion.div className="p-5 rounded-lg hover:bg-blue-800 transition-colors duration-500" whileHover={{ scale: 1.1 }} initial="hidden" animate={controls} variants={cardVariants} transition={{ delay: 0.5 }}>
            <FontAwesomeIcon icon={faPalette} size="3x" className="text-blue-500 mb-3" />
            <h3 className="text-3xl font-bold mb-2">High-quality Design</h3>
            <p>We expertly blend colors, images, graphics, Adobe Photoshop, typography, and UI/UX design principles to bring your vision to life with precision and creativity.</p>
          </motion.div>
          <motion.div className="p-5 rounded-lg hover:bg-blue-800 transition-colors duration-500" whileHover={{ scale: 1.1 }} initial="hidden" animate={controls} variants={cardVariants} transition={{ delay: 0.7 }}>
            <FontAwesomeIcon icon={faMobileAlt} size="3x" className="text-blue-500 mb-3" />
            <h3 className="text-3xl font-bold mb-2">App Development</h3>
            <p>Coding with innovation, creativity, and precision, we craft robust and intuitive mobile applications that redefine user experiences and drive business success.</p>
          </motion.div>
          <motion.div className="p-5 rounded-lg hover:bg-blue-800 transition-colors duration-500" whileHover={{ scale: 1.1 }} initial="hidden" animate={controls} variants={cardVariants} transition={{ delay: 0.9 }}>
            <FontAwesomeIcon icon={faChartLine} size="3x" className="text-blue-500 mb-3" />
            <h3 className="text-3xl font-bold mb-2">Digital Marketing Strategy</h3>
            <p>Harness the power of data-driven marketing strategies, encompassing SEO, social media engagement, and targeted content creation, to amplify your brands reach.</p>
          </motion.div>
          <motion.div className="p-5 rounded-lg hover:bg-blue-800 transition-colors duration-500" whileHover={{ scale: 1.1 }} initial="hidden" animate={controls} variants={cardVariants} transition={{ delay: 1.1 }}>
            <FontAwesomeIcon icon={faCogs} size="3x" className="text-blue-500 mb-3" />
            <h3 className="text-3xl font-bold mb-2">Product Designer</h3>
            <p>Unlock the power of our diverse marketing strategies, encompassing search engine marketing, social media marketing, and more, to elevate your brand.</p>
          </motion.div>
          
        </div>
      </div>
    </div>
  );
};

export default Features;
