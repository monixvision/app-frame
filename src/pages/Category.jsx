import Card from '../components/Card';
import { CATALOGO_PELIS } from '../data/films';

const Category = () => {
  return (
    <section className="grid-catalogo">
      {CATALOGO_PELIS.map(peli => (
        <Card key={peli.id} info={peli} />
      ))}
    </section>
  );
}

export default Category;
