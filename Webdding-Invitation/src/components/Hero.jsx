import { hero } from '../assets';
import Countdown from './Countdown';
import { motion } from 'framer-motion';
import AudioPlayer from './AudioPlayer';

const Hero = () => (
  <section id="hero" className='flex flex-col justify-center items-center w-full h-screen '>
    <AudioPlayer />
    <motion.img 
      src={hero} 
      alt="hero-image" 
      className='absolute w-full h-screen object-cover z-1'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    />
    <motion.div 
      className='absolute backdrop-blur-[2px] bg-black/30 w-full h-screen z-3'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5, delay: 0.5 }}
    ></motion.div>
    <motion.div 
      className='absolute flex justify-center align-middle z-7 sm:mt-[5rem] mt-[15rem] lg:mt-[15rem] md:mt-[30vh] xl:mt-[10rem]'
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, delay: 1 }}
    >
      <p className='absolute font-signature text-center text-white text-[4rem] sm:text-[4rem] md:text-[6rem] lg:text-[5rem]'>
        ¡Nos Casamos el 16 de Marzo!
      </p>
      <p className='font-signature text-center mr-2 text-[4rem] sm:text-[4rem] md:text-[6rem] lg:text-[5rem]'>
        ¡Nos Casamos el 16 de Marzo!
      </p>
    </motion.div>
    <motion.div 
      className='flex justify-center align-middle z-4 md:mb-[50vh] lg:mb-[30vh] mb-[50vh] xl:mb-[20vh] '
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, delay: 1.5 }}
    >
      <p className='absolute text-[4rem] sm:text-[4rem] md:text-[6rem] lg:text-[7rem] tracking-wide text-center font-weddingtwo text-white z-[6]'>
        Luz <br className='sm:hidden block' /> y <br className='sm:hidden block' /> Arturo
      </p>
      <p className='text-[4rem] sm:text-[4rem] md:text-[6rem] lg:text-[7rem] tracking-wide text-center font-weddingtwo mr-2 z-[5]'>
        Luz <br className='sm:hidden block' /> y <br className='sm:hidden block' /> Arturo
      </p>
    </motion.div>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 2 }}
      className='z-20 text-center w-full p-0 flex items-center justify-center'
    >
      <Countdown />
    </motion.div>
    <motion.div 
      className="absolute z-[19] w-[100%] h-[35%] bottom-0 black__gradient"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 2.5 }}
    />
  </section>
);

export default Hero;
