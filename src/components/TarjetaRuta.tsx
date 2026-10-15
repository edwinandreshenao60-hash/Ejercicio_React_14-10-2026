import type { Ruta } from "../datos/rutas";

interface TarjetaRutaProps {
  ruta: Ruta;
}

export function TarjetaRuta({ ruta }: TarjetaRutaProps) {
  return (
    <article className="tarjeta">
      <div className="tarjeta-cabecera">
        <p className="origen"><span className="punto-origen" />{ruta.municipio}</p>
        <span className="nivel">{ruta.dificultad}</span>
      </div>
      <p className="numero-ruta">0{ruta.id}</p>
      <h3>{ruta.nombre}</h3>
      <p className="jornada">
        {ruta.duracionHoras < 5 ? "Ruta corta" : "Jornada completa"}
        <span>· {ruta.duracionHoras} horas</span>
      </p>
      <div className="tarjeta-pie">
        <p className="precio">
          {ruta.precio.toLocaleString("es-CO", {
            style: "currency",
            currency: "COP",
            maximumFractionDigits: 0,
          })}
          <span>por persona</span>
        </p>
        {ruta.incluyeTransporte && <p className="transporte">Incluye transporte</p>}
      </div>
      <label className="personas">
        Personas
        <input type="number" aria-label="Personas" />
      </label>
    </article>
  );
}
