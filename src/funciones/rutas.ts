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

export function ordenarRutas(
  lista: Ruta[],
  criterio: "precio" | "duracion",
): Ruta[] {
  if (criterio === "precio") {
    return lista.toSorted((a, b) => a.precio - b.precio);
  }

  return lista.toSorted((a, b) => a.duracionHoras - b.duracionHoras);
}
