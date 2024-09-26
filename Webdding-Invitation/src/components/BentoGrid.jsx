import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  gallery1, gallery2, gallery3, gallery4, gallery5, gallery6, 
  gallery7, gallery8, gallery9, gallery10, gallery11, gallery12 
} from '../assets';

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

const images = [
  [gallery1, gallery2, gallery3],
  [gallery8, gallery5, gallery10],
  [gallery6, gallery7, gallery11],
  [gallery4, gallery9, gallery12]
];

const Modal = ({ selectedImage, onClose }) => (
  <div 
    className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50"
    onClick={onClose}
  >
    <div 
      className="relative max-w-full max-h-full"
      onClick={(e) => e.stopPropagation()} 
    >
      <label
        className="absolute top-0 right-0 p-1 m-2 pt-0 rounded-full text-white bg-black/50 text-2xl"
        onClick={onClose}
      >
        &times;
      </label>
      <motion.img 
        src={selectedImage} 
        alt="Selected" 
        className="max-w-[90vw] max-h-[90vh] rounded-lg" 
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
      />
    </div>
  </div>
);

const BentoGrid = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className='sm:p-10 p-5 relative'>
      <motion.div 
        className="grid grid-cols-2 md:grid-cols-4 gap-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {images.map((column, colIdx) => (
          <div key={colIdx} className="grid gap-4">
            {column.map((src, idx) => (
              <motion.div 
                key={idx} 
                variants={itemVariants}
                onClick={() => setSelectedImage(src)}
              >
                <motion.img 
                  className="h-full w-full rounded-lg object-cover" 
                  whileHover={{ scale: 1.05, rotate: idx % 2 === 0 ? 2 : -2 , transition: { duration: 0.3 } }} 
                  whileTap={{ scale: 0.9 }} 
                  src={src} 
                  alt="" 
                />
              </motion.div>
            ))}
          </div>
        ))}
      </motion.div>

      {selectedImage && <Modal selectedImage={selectedImage} onClose={() => setSelectedImage(null)} />}
    </div>
  );
};

export default BentoGrid;
