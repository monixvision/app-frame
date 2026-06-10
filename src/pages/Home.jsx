import Hero from "../components/Hero";
import MoviePosterAPI from "../components/MoviePosterAPI";

const Home = () => (

    <section>
     {/*  <h1>Esta es la home</h1>
      <p>Descripción de nuestra aplicación</p>
      <div className="flex justify-center">
        <Button to="/peliculas" text="Prueba" variant="outline"/>
        </div>
      
      {/* aqui ponemos el btn con el texto que queremos que tenga y las variantes que queramos y la ruta a la que queremos que le lleve*/}

      {/* para cambiar el css del btn pues simplemente lo contenemos en un div con las propiedades */} 

      <Hero />
      <MoviePosterAPI movieTiTle="Dune" />
    </section>
 );

export default Home;
