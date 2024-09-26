
const ChatBox = ({ onClose }) => {
  const handleButtonClick = () => {
    window.open('https://wa.me/526421158357', '_blank');
  };
  return (
    <div className="fixed bottom-20 right-4 bg-white rounded-lg shadow-lg w-80 p-4 z-[99] mb-3">
      <div className="flex justify-between items-center border-b pb-2 mb-2">
        <div>
          <h3 className="text-green-500 font-bold">¿Dudas?</h3>
          <p className="text-sm">¡Confirma tu asistencia con la novia!</p>
        </div>
        <button onClick={onClose} className="text-gray-500 hover:text-gray-700">&times;</button>
      </div>
      <div>
        <p>¿Cómo podemos ayudarte? <span role="img" aria-label="smile">😊</span></p>
      </div>
      <button onClick={handleButtonClick}  className="mt-4 w-full bg-green-500 text-white p-2 rounded-lg">Iniciar chat</button>
    </div>
  );
};

export default ChatBox;
