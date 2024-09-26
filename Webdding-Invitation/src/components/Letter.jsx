import { useState } from 'react';
import { motion } from 'framer-motion';
import { lettertop, lettermiddle, letterbottom, stamp, flowers } from '../assets';

const stampVariants = {
  initial: {
    y: 0,
  },
  animate: {
    y: '20%',
    transition: {
      repeat: Infinity,
      repeatType: 'mirror',
      duration: 2,
    },
  },
};

const Letter = ({ onClick }) => {
  const [isOpened, setIsOpened] = useState(false);

  const handleLetterClick = () => {
    setIsOpened(true);
    setTimeout(onClick, 700);
  };

  return (
    <section id="letter" className="w-full h-full bg-white-gradient p-0 overflow-y-hidden" onClick={handleLetterClick}>
      <motion.img
        className="fixed z-[5] top-0 left-0 w-[50vh] rotate-180"
        src={flowers}
        alt="letter-top"
        initial={{ opacity: 1, x: -200 }}
        // animate={{ y: isOpened ? 1000 : 0 }} 
        animate={!isOpened ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
        
        transition={{ duration: 0.5 }}
      />
      <motion.img
        className="fixed z-[5] bottom-0 right-0 w-[50vh] rotate-480"
        src={flowers}
        alt="letter-top"
        initial={{ opacity: 1, x: 200 }}
        animate={!isOpened ? { opacity: 1, x: 0 } : { opacity: 0, x: 200 }}
        transition={{ duration: 0.5 }}
      />
      <div className="w-full h-full overflow-hidden">
        <motion.img
          className="absolute z-[3] top-0 w-[500%] sm:w-full h-[500px] sm:h-[800px]"
          src={lettertop}
          alt="letter-top"
          initial={{ opacity: 1, y: -200 }}
          animate={{ y: isOpened ? -1000 : 0 }} 
          transition={{ duration: 0.5 }}
        />
        <motion.img
          className="absolute z-[1] h-[100vh] w-[500%] sm:w-full"
          src={lettermiddle}
          alt="letter-middle"
          initial={{ opacity: 0 }}
          animate={{ opacity: isOpened ? 0 : 1 }} 
          transition={{ duration: 1.5 }}
        />
        <motion.img
          className="absolute z-[2] bottom-0 w-[500%] sm:w-full h-[500px] sm:h-[800px]"
          src={letterbottom}
          alt="letter-bottom"
          initial={{ opacity: 1, y: 200 }}
          animate={{ y: isOpened ? 1000 : 0 }} 
          transition={{ duration: 0.5 }}
        />
        <motion.div className="fixed z-[4] w-full h-full flex items-center justify-center cursor-pointer"
        initial={{y: -1000}}
        animate={{ y: isOpened ? -1000 :  0}} 
        transition={{ duration: 0.5 }}>
          <p className="text-xl sm:text-3xl text-center font-wedding">
            <i className="text-[40px] md:text-[80px] xs:text-[50px]">¡Te tenemos una sorpresa!</i>
          </p>
          <motion.img
            className="fixed z-[4] w-[150px] h-[150px] flex items-center justify-center mt-[200px]"
            src={stamp}
            alt="letter-bottom"
            variants={stampVariants}
            initial="initial"
            animate="animate"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Letter;
