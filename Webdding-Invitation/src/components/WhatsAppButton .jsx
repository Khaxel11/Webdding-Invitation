import { whastapp } from '../assets';

const WhatsAppButton = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="z-[98] fixed sm:bottom-4 sm:right-4 bottom-1 right-1 bg-green-500 rounded-full sm:p-4 p-2 shadow-lg"
    >
      <img src={whastapp} alt="WhatsApp" className="sm:w-8 sm:h-8 w-5 h-5" />
    </button>
  );
};

export default WhatsAppButton;
