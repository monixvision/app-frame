import Card from '../components/Card';
import { CATALOGO_PELIS } from '../data/films';

const Category = () => (
  
    <div className="container mx-auto p-4 md:grid grid-cols-12 gap-4">
      {CATALOGO_PELIS.map(peli => (
        <Card key={peli.id} info={peli} />
      ))}
    </div>
  
)

export default Category;
