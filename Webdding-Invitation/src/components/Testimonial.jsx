import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AcknowledgmentsData } from './index';

const testimonials = new AcknowledgmentsData();

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.godparents.length);
    }, 5000); // Aumenté el tiempo para permitir una lectura cómoda
    return () => clearInterval(interval);
  }, []);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.godparents.length) % testimonials.godparents.length);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.godparents.length);
  };

  return (
    <section id='testimonial' className="w-full h-[50vh] md:h-[60vh] flex flex-col justify-center items-center p-4 relative overflow-hidden ">
      <p className="absolute z-10 top-10 md:top-16 font-signature text-4xl sm:text-6xl lg:text-7xl text-gold">
        Agradecimientos
      </p>
      <div className="relative w-full flex justify-center items-center mt-16 md:mt-20">
        <AnimatePresence>
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="absolute p-4 md:p-6 rounded-lg text-center w-full flex items-center justify-center flex-col space-y-4 bg-white"
          >
            <h2 className="text-gold font-signature text-7xl sm:text-6xl md:text-5xl lg:text-6xl">
              {testimonials.godparents[currentIndex].title}
            </h2>
            <p className="font-weddingtwo text-gray-700 text-base sm:text-lg md:text-xl lg:text-2xl">
              {testimonials.godparents[currentIndex].name}
            </p>
          </motion.div>
        </AnimatePresence>
        <div
          onClick={handlePrevious}
          className="absolute left-4 md:left-8 bg-transparent text-gold p-2 rounded-full text-2xl cursor-pointer hover:bg-gray-200"
          style={{ top: '50%', transform: 'translateY(-50%)' }}
        >
          {'<'}
        </div>
        <div
          onClick={handleNext}
          className="absolute right-4 md:right-8 bg-transparent text-gold p-2 rounded-full text-2xl cursor-pointer hover:bg-gray-200"
          style={{ top: '50%', transform: 'translateY(-50%)' }}
        >
          {'>'}
        </div>
      </div>
      
    </section>
  );
};

export default Testimonial;
