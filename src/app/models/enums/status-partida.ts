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

export const StatusPartidaColor: Record<StatusPartida, string> = {
    [StatusPartida.CANCELADA]: "btn-dark",
    [StatusPartida.EMANDAMENTO]: "btn-success",
    [StatusPartida.FINALIZADA]: "btn-light",
    [StatusPartida.INTERROMPIDA]: "btn-danger",
    [StatusPartida.PREPARADA]: "btn-primary",
};


