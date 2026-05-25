import{BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Footer from './components/Footer';
import Header from './components/Header';
import Category from './pages/Category';
import Actividades from './pages/Actividades';
import Descargas from './pages/Descargas';
import Faq from './pages/FAQ';
import Nosotros from './pages/Nosotros';
import Entradas from './pages/Entradas';

const App = () => (
    <BrowserRouter> {/* Esto permite la navegación entre rutas */}
      <Header />
      <main>
        <Routes> {/* Aqui se definen las rutas */}
          <Route index element={<Home />} />  {/* Ruta principal */}
          <Route path="/peliculas" element={<Category />}/> 
          {/* Ruta para la página de películas que tiene que coincidir en el buscador y justo enseñar el elemento Category solo que la ruta se llama distinto eso no importa le puedes poner el nombre que quieras con tal que coja el elemento en concreto! */}
          <Route path="/actividades" element={<Actividades />}/> 
          <Route path="/descargas" element={<Descargas />}/>
          <Route path="/preguntas" element={<Faq />}/>
          <Route path="/nosotros" element={<Nosotros />}/>
          <Route path="/entradas" element={<Entradas />}/>
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )

export default App
