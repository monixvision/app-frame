import './App.css'
import Card from './components/Card'
import { CATALOGO_PELIS } from './data/films'

const App = () => {
  return (
    <>
      <Card />
      {CATALOGO_PELIS.map((peli) => (
        <Card
          key={peli.id}
          titulo={peli.titulo}
          creacion={peli.creacion}
          genero={peli.genero}
          sinopsis={peli.sinopsis}
          autoria={peli.autoria}
          imagen={peli.imagen}
        />
      )
      )}
    </>
  )
}

export default App
