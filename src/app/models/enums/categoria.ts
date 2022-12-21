export enum Categoria {
  A = 'A',
  B = 'B',
  C = 'C',
  D = 'D',
}

// optional: Record type annotation guaranties that 
// all the values from the enum are presented in the mapping
export const CategoriaMapping: Record<Categoria, string> = {
    [Categoria.A]: "Categoria A",
    [Categoria.B]: "Categoria B",
    [Categoria.C]: "Categoria C",
    [Categoria.D]: "Categoria D",
};
