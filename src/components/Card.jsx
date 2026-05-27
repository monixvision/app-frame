import btnMas from '../assets/img/btn-more.svg';

const Card = ({ info }) => {
  const { titulo, imagen, autoria, dia } = info;
  return (
    <div className="flex border-2 border-zinc-700 mb-4">
      <div className="w-1/2 border-r border-zinc-700">
        <img className="w-full h-full object-cover"
          src={imagen} alt={titulo} />
      </div>
      <div className="w-1/2 p-4 flex flex-col justify-between">
        <div>
          <h2 className="text-xl mb-2">{titulo}</h2>
          <p className="text-xs"> {autoria}</p>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-xs text-white bg-zinc-700 px-4 py-1 rounded-full"> Día {dia}</p>
          <img src={btnMas} alt="Más información" />
        </div>
      </div>


    </div>
  );
}



export default Card;