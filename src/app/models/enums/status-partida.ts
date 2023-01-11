export enum StatusPartida {
    CANCELADA = 'Cancelada',
    EMANDAMENTO = 'EmAndamento',
    FINALIZADA = 'Finalizada',
    INTERROMPIDA = 'Interrompida',
    PREPARADA = 'Preparada',
}

// optional: Record type annotation guaranties that 
// all the values from the enum are presented in the mapping
export const StatusPartidaMapping: Record<StatusPartida, string> = {
    [StatusPartida.CANCELADA]: "Partida cancelada",
    [StatusPartida.EMANDAMENTO]: "Partida em andamento",
    [StatusPartida.FINALIZADA]: "Partida já finalizada",
    [StatusPartida.INTERROMPIDA]: "Partida temporariamente interrompida",
    [StatusPartida.PREPARADA]: "Partida preparada",
};

