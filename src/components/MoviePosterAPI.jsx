import { useState, useEffect } from 'react';

const MoviePosterAPI = ({ movieTitle }) => {
  const [posterUrl, setPosterUrl] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  // 🔴 PEGA AQUÍ TU CLAVE COPIADA DE TMDB
  const API_KEY = '4b9b9b72fe17badca7540b2dc57166f7'; 

  useEffect(() => {
    const fetchPoster = async () => {
      try {
        setLoading(true);
        setError(false);

// 1. URL de búsqueda: encodeURIComponent limpia los espacios y acentos del título
        const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(movieTitle)}&language=es-ES`;
        
// 2. El camarero hace la petición
        const response = await fetch(url);
        
// Si el servidor responde con un error (ej: clave inválida), saltamos al catch
        if (!response.ok) throw new Error('Error de autenticación o servidor');

// 3. Traducimos el texto JSON a un objeto JavaScript
        const data = await response.json();
        
// 4. Si hay resultados y el primero tiene imagen, guardamos la URL completa
        if (data.results && data.results.length > 0 && data.results[0].poster_path) {
          const path = data.results[0].poster_path;
          setPosterUrl(`https://image.tmdb.org/t/p/w500${path}`);
        } else {
          setError(true); // Película no encontrada en su base de datos
        }
      } catch (err) {
        setError(true); // Fallo de red o error de API
      } finally {
        setLoading(false); // Apagamos el estado de carga pase lo que pase
      }
    };

    if (movieTitle) {
      fetchPoster();
    }
  }, [movieTitle]); // Se vuelve a ejecutar si cambia el título de la película

// VISTA A: Mientras carga 
  
if (loading) {
    return (
<div className="w-full aspect-2/3 bg-zinc-800 rounded-xl flex items-center justify-center border border-zinc-700">
        <span className="text-xs text-zinc-500">Buscando tu cartel...</span>
</div>
    );
}

// VISTA B: Si falla algo 
  
if (error || !posterUrl) {
    return (
      <div className="w-full aspect-2/3 bg-zinc-800 flex flex-col items-center justify-center p-4 border border-zinc-700 text-center">
<span className="text-xs text-zinc-400 font-medium">Cartel oficial no disponible</span>
      </div>
    );
  }

// VISTA C: Éxito 
  return (
    <img 
      src={posterUrl} 
      alt={`Cartel oficial de ${movieTitle}`} 
      className="w-full aspect-2/3 object-cover"
    />
  );
};

export default MoviePosterAPI;

