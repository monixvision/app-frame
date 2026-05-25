const Footer = () => (

  <footer className="bg-zinc-700 text-white text-center p-6 mt-8">
    <blockquote className="mb-2 text-xl">
      <p>"La vida es lo que sucede mientras tú estás ocupado haciendo otros planes."</p>
      {/* cambiar las comillas por las otras rollo triangulos << >> */}
      <cite className="not-italic">John Lennon</cite>
      {/* esta es la etiqueta del autor de la cita */}
    </blockquote>
    <ul className="flex justify-between gap-6 mb-6 border-y py-4 w-1/2 mx-auto">
      <li><a href="#" rel="noopener noreferrer" target="_blank">Tiktok</a></li>
      <li><a href="#" rel="noopener noreferrer" target="_blank">X</a></li>
      <li><a href="#" rel="noopener noreferrer" target="_blank">Instagram</a></li>
    </ul>
    <p className="text-xs"> 2026 FrameApp. Todos los derechos reservados.</p>
  </footer>
);

export default Footer;