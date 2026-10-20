import type { Dificultad, Ruta } from "../datos/rutas";

export function filtrarPorDificultad(
  lista: Ruta[],
  dificultad: Dificultad | "todas",
): Ruta[] {
  if (dificultad === "todas") {
    return lista;
  }

  return lista.filter((ruta) => ruta.dificultad === dificultad);
}

export function filtrarPorTexto(lista: Ruta[], texto: string): Ruta[] {
  const textoBuscado = texto.trim().toLocaleLowerCase();

  return lista.filter((ruta) => {
    const nombre = ruta.nombre.toLocaleLowerCase();
    const municipio = ruta.municipio.toLocaleLowerCase();

    if (nombre.includes(textoBuscado)) {
      return true;
    }

    if (municipio.includes(textoBuscado)) {
      return true;
    }

    return false;
  });
}

export function ordenarRutas(
  lista: Ruta[],
  criterio: "precio" | "duracion",
): Ruta[] {
  if (criterio === "precio") {
    return lista.toSorted((a, b) => a.precio - b.precio);
  }

  return lista.toSorted((a, b) => a.duracionHoras - b.duracionHoras);
}
