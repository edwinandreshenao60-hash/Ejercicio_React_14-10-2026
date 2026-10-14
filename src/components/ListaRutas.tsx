import type { Ruta } from "../datos/rutas";
import { TarjetaRuta } from "./TarjetaRuta";

interface ListaRutasProps {
  rutas: Ruta[];
}

export function ListaRutas({ rutas }: ListaRutasProps) {
  if (rutas.length === 0) {
    return <p className="sin-resultados">No hay rutas con esos criterios.</p>;
  }

  return (
    <div className="lista-rutas">
      {rutas.map((ruta) => (
        <TarjetaRuta key={ruta.id} ruta={ruta} />
      ))}
    </div>
  );
}
