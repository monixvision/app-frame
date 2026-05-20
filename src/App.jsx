import './App.css'
import Card from './components/Card'
import { CATALOGO_PELIS } from './data/films'

const App = () => {
  return (
    <>
      <Card />
      {CATALOGO_PELIS.map((peli) => (
        <Card key={peli.id} info={peli} />
      )
      )}
    </>
  )
}

export default App
