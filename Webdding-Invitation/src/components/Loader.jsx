// components/Loader.js

import { motion } from "framer-motion";

const Loader = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center font-poppins">
      <div className="text-4xl font-bold text-gray-700 flex items-center">
        
        <motion.div
          className="flex ml-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 1,
            repeat: Infinity,
            repeatType: "loop",
          }}
        >
          <motion.span
            className="dot"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 0.3 }}
          >
            .
          </motion.span>
          <motion.span
            className="dot"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 0.6 }}
          >
            .
          </motion.span>
          <motion.span
            className="dot"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 0.9 }}
          >
            .
          </motion.span>
        </motion.div>
      </div>
    </div>
  );
};

export default Loader;
