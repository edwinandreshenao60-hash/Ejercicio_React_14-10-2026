import { ListaRutas } from "./components/ListaRutas";
import { rutas } from "./datos/rutas";
import { filtrarPorDificultad, ordenarRutas } from "./funciones/rutas";

function App() {
  const rutasFiltradas = filtrarPorDificultad(rutas, "todas");
  const rutasVisibles = ordenarRutas(rutasFiltradas, "precio");

  return (
    <>
      <header className="encabezado">
        <p>QUINDÍO · COLOMBIA</p>
      </header>
      <main>
        <section className="presentacion">
          <h1>Rutas turísticas del Quindío</h1>
          <p>Una guía para descubrir los paisajes y municipios del departamento.</p>
        </section>
        <section className="rutas">
          <h2>Rutas para explorar</h2>
          <p>Se encontraron {rutasVisibles.length} rutas</p>
          <ListaRutas rutas={rutasVisibles} />
        </section>
      </main>
      <footer>MONTAÑA · CULTURA · NATURALEZA</footer>
    </>
  );
}

export default App;
