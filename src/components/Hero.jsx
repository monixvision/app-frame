import Button from './Button';
import BgHero from '../assets/img/bg-hero.webp';

const Hero = () => (
    <section style={{ backgroundImage: `url(${BgHero})` }} className="h-[calc(100dvh-58px)] bg-cover bg-[position:center_200px] bg-no-repeat bg-black flex items-center justify-center lg:h-250">
        <div className="pb-50 lg:pb-20 px-4 flex flex-col gap-4">
            <h1 className="text-2xl text-white text-center text-balance">Despega y sal de la órbita terrestre para conocer otros mundos</h1>
            <p className="text-base text-white text-balance text-center font-light">Frame, I ciclo de cine sobre ciencia ficción en Málaga</p>
            <div className=" flex justify-center">
                <Button to="/peliculas" text="Despegar" />
            </div>
        </div>
    </section>
);

export default Hero;    