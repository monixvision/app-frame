import btnMas from '../assets/img/btn-more.svg';
import { Link } from 'react-router-dom';

const Card = ({ info }) => {
  const { titulo, imagen, autoria, dia, slug } = info;
  return (
    <div className="col-span-6 lg:col-span-4
    flex border-2 border-zinc-700 mb-4 
    md:flex-col md:mb-0">
      <div className="w-1/2 md:w-full md: border-none border-r border-zinc-700">
        <img className="w-full h-full object-cover aspect-[4/3]"
          src={imagen} alt={titulo} />
      </div>
      <div className="w-1/2 md:w-full p-4 flex flex-col justify-between md:gap-4">
        <div>
          <h2 className="text-xl mb-2 leading-none">{titulo}</h2>
          <p className="text-xs"> {autoria}</p>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-xs text-white bg-zinc-700 px-4 py-1 rounded-full"> Día {dia}</p>
          <Link to={`/articulo/${slug}`}>
            <img src={btnMas} alt="Más información" />
          </Link>
        </div>
      </div>


    </div>
  );
}



export default Card;