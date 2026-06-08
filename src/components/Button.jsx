import { Link } from "react-router-dom"

const Button = ({ 
    text, 
    variant = 'solid', 
    size = 'lg',
    to, /* esto es una propiead para que podamos recibir el atributo to con lo que queramos poner */ 
    ...props }) => {
    /* esto es para crear las variantes como en Figma btn xs o lg - fill o border */

    /* hay que dejar una como predeterminada */

    /* el ...props es para recomponer el arrays para añadir más cosas */

    const baseStyles = "flex items-center justify-center font-bold rounded-full cursor-pointer transition-colors"
    /* 1º estilos bases */

    const variantStyles = {
        solid: "bg-indigo-600 text-white hover:bg-indigo-700",
        outline: "border-2 border-indigo-600 text-indigo-600 hover:border-indigo-300 hover:text-indigo-300",
    }
    /* 2º esto son las caracteristicas de las primeras variantes */

    const sizeStyles = {
        lg: 'text-base px-6 py-3',
        xs: 'text-xs px-4 py-1',
    }
    /* 3º explicamos las varauintes de tamaños */

    const buttonClasses = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]}`;
    /* 4º ahora hay que juntarlo todo en una misma constante */

if(to){
    return (
      <Link to={to} className={buttonClasses} {...props}>
        {text}
      </Link>
    );
}
/* si llega a to devuelve la etiqueta link si no tiene to pues es un btn normal sin interactividad y tiene que esperar el la ruta a la que quieras llevar */

    return (
        <button className={buttonClasses} {...props}> {text} </button> 

    )

}

export default Button;