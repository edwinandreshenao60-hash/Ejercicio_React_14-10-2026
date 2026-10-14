import type { Ruta } from "../datos/rutas";

interface TarjetaRutaProps {
  ruta: Ruta;
}

export function TarjetaRuta({ ruta }: TarjetaRutaProps) {
  return (
    <article className="tarjeta">
      <p className="origen">{ruta.municipio} · {ruta.dificultad.toUpperCase()}</p>
      <h3>{ruta.nombre}</h3>
      <p className="duracion">{ruta.duracionHoras} horas</p>
      <p className="jornada">
        {ruta.duracionHoras < 5 ? "Ruta corta" : "Jornada completa"}
      </p>
      <p className="precio">
        {ruta.precio.toLocaleString("es-CO", {
          style: "currency",
          currency: "COP",
          maximumFractionDigits: 0,
        })}
      </p>
      {ruta.incluyeTransporte && <p className="transporte">Incluye transporte</p>}
      <label className="personas">
        Personas
        <input type="number" aria-label="Personas" />
      </label>
    </article>
  );
}
