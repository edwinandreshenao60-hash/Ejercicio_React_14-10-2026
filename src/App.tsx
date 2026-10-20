import { useState } from "react";
import { ListaRutas } from "./components/ListaRutas";
import { rutas } from "./datos/rutas";
import { filtrarPorDificultad, filtrarPorTexto, ordenarRutas } from "./funciones/rutas";
import "./App.css";

function App() {
  const [busqueda, setBusqueda] = useState("");
  const rutasFiltradas = filtrarPorDificultad(rutas, "todas");
  const rutasCoincidentes = filtrarPorTexto(rutasFiltradas, busqueda);
  const rutasVisibles = ordenarRutas(rutasCoincidentes, "precio");

  return (
    <>
      <header className="barra-superior">
        <a className="marca" href="#inicio" aria-label="Quindío, inicio">
          <span className="marca-simbolo">Q</span>
          <span>quindío<small>colombia</small></span>
        </a>
        <p className="barra-nota">Una pausa entre montañas</p>
        <p className="barra-indice">GUÍA DE VIAJE <span>·</span> 2026</p>
      </header>

      <main id="inicio">
        <section className="hero">
          <div className="hero-texto">
            <p className="etiqueta"><span /> DEPARTAMENTO DEL QUINDÍO, COLOMBIA</p>
            <h1>Hay caminos<br />que <em>se sienten.</em></h1>
            <p className="hero-descripcion">
              Siete maneras de descubrir pueblos, montañas y senderos. Elige
              el ritmo; el paisaje pone el resto.
            </p>
            <div className="hero-indice">
              <span>01 / 07</span>
              <span>RUTAS PARA EXPLORAR</span>
            </div>
          </div>
          <div className="hero-paisaje" aria-label="Ilustración abstracta de montañas del Quindío" role="img">
            <div className="paisaje-sol" />
            <div className="paisaje-montana montana-lejana" />
            <div className="paisaje-montana montana-cercana" />
            <div className="paisaje-contorno contorno-uno" />
            <div className="paisaje-contorno contorno-dos" />
            <p className="paisaje-leyenda">CORDILLERA CENTRAL <span>·</span> QUINDÍO</p>
          </div>
        </section>

        <section className="datos-rapidos" aria-label="Resumen de la selección">
          <p><strong>07</strong><span>rutas de origen</span></p>
          <p><strong>03–09</strong><span>horas de recorrido</span></p>
          <p><strong>Desde $40.000</strong><span>por persona</span></p>
        </section>

        <section className="catalogo" aria-labelledby="titulo-rutas">
          <div className="catalogo-cabecera">
            <div>
              <p className="etiqueta-seccion">EL TERRITORIO, A TU PASO</p>
              <h2 id="titulo-rutas">Rutas para descubrir</h2>
            </div>
            <p className="catalogo-cuenta">{rutasVisibles.length} EXPERIENCIAS <span>·</span> QUINDÍO</p>
          </div>
          <label className="busqueda-rutas">
            Buscar por ruta o municipio
            <input
              type="search"
              value={busqueda}
              onChange={(evento) => setBusqueda(evento.target.value)}
              placeholder="Ej. Salento"
            />
          </label>
          <ListaRutas rutas={rutasVisibles} />
        </section>
      </main>

      <footer className="pie-pagina">
        <span>QUINDÍO, COLOMBIA</span>
        <span>MONTAÑA · CULTURA · NATURALEZA</span>
        <span>RUTAS DE ORIGEN / 03</span>
      </footer>
    </>
  );
}

export default App;
