import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Countdown = () => {
  const calculateTimeLeft = () => {
    const targetDate = new Date('2025-03-16T00:00:00');
    const currentDate = new Date();
    const difference = targetDate - currentDate;

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="z-[100] absolute bottom-5 flex flex-col items-center justify-center text-white">
      
      <div className="text-xl sm:text-2xl">
        {timeLeft.days !== undefined ? (
          <div className="flex space-x-4 font-thin">
            <div className="flex flex-col items-center">
              <span className="text-4xl font-thin">{timeLeft.days}</span>
              <span>Días</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-4xl font-thin">{timeLeft.hours}</span>
              <span>Horas</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-4xl font-thin">{timeLeft.minutes}</span>
              <span>Minutos</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-4xl font-thin">{timeLeft.seconds}</span>
              <span>Segundos</span>
            </div>
          </div>
        ) : (
          <motion.div
            className=" text-[5rem] font-signature font-semibold"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 1, repeat: Infinity, repeatType: 'reverse' }}
          >
            <label className="text-white absolute">¡Es Hoy!</label>
            <label className="text-black ml-1">¡Es Hoy!</label>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Countdown;
