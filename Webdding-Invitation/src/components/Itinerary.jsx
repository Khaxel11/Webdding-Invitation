import React from 'react';
import { motion } from 'framer-motion';
import { ring, dinner, stars, moon, watch } from '../assets/index';

const itineraryItems = [
  { time: '04:30 PM', event: 'Ceremonia', icon: ring },
  { time: '06:00 PM', event: 'Cena', icon: dinner },
  { time: '09:30 PM', event: 'Primer Baile', icon: stars },
  { time: '09:50 PM', event: 'Fiesta', icon: moon },
];

const Itinerary = () => {
  return (
    <section className="relative overflow-y-hidden h-auto mt-10">
       <div className='mt-1 w-full h-[3px] bg-gold' />
       <div className='mt-1 w-full h-[3px] bg-gold' />

      <div className="w-full h-auto flex justify-center items-center flex-col p-10 over">
        <div className="w-full text-gold text-center font-signature text-4xl md:text-6xl lg:text-8xl mt-2">
          Itinerario
        </div>
        <img className="w-12 h-12 md:w-10 md:h-10 rounded-full mt-4" src={watch} alt="inti" />
      </div>
      
      <div className="relative mt-8 md:mt-16">
        <div className=" absolute left-1/2 transform -translate-x-1/2 bg-gray-300 w-1 md:w-2 h-full rounded-full"></div>

        <motion.div
          className=" absolute left-1/2 transform -translate-x-1/2 bg-gray-500 w-1 md:w-2 rounded-full"
          initial={{ height: 0 }}
          whileInView={{ height: '100%' }}
          transition={{ duration: 2 }}
        />

        <div className="relative flex flex-col items-center space-y-8 md:space-y-12">
          {itineraryItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 1, y: 50 }}
              whileInView={{ opacity: 1, y: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`sm:bg-transparent bg-white rounded-xl flex flex-col md:flex-row items-center w-full ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}
            >
              <div className="flex-1 px-4 md:px-6 text-center md:text-left bg-white">
                <p className={`text-lg md:text-xl font-semibold font-mandala ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>{item.event}</p>
                <p className={`text-gray-500 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>{item.time}</p>
              </div>
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gray-200 flex items-center justify-center mx-2 md:mx-4">
                <img src={item.icon} alt={item.event} className="w-5 h-5 md:w-6 md:h-6" />
              </div>
              <div className="flex-1 px-4 md:px-6 hidden md:block"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Itinerary;
 