import ContactForms from "../components/forms/ContactForms";
import Hero from "../components/Hero";
import MovieCarousel from "../components/MovieCarousel";

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
      <div className="container mx-auto p-4">
      <h2 className="text-2xl  font-bold">Cartelera</h2>
      </div>
      <div className="container mx-auto md:p-4">
      <MovieCarousel />
      </div>
      <div className="bg-indigo-300">
        <div className="container p-4 mx-auto grid grid-cols-12">
          <div className="col-span-12 md:col-span6 md:col-start-4">
            <ContactForms/>
          </div>
          
        </div>
      </div>

    </section>
 );

export default Home;
