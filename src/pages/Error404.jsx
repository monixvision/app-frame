import { Link } from 'react-router-dom';

const Error404 = () => (
    <div>
      <h1>404</h1>
      <h2>Página no encontrada</h2>
      <p>Parece que te has perdido en el espacio profundo.</p>
      <Link to="/">Volver a la base</Link> 
      {/* Tiene un Link para volver a la página principal */}
    </div>
  );

export default Error404;
