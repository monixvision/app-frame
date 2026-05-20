
const Card = ({info}) => {
const {titulo, creacion, genero, imagen, sinopsis, autoria }= info;
  return (
    <div className={styles.card}>
      <img src={imagen} alt={titulo} />
      <h3>{titulo}</h3>
        <p> Año: {creacion}</p>
        <p> Género: {genero}</p>
        <p> Autoría: {autoria}</p>
        <p> Sinopsis: {sinopsis}</p>
    </div>
  );
}



export default Card;