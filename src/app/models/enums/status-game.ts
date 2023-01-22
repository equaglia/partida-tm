export enum StatusGame {
    PREPARADO = 'Preparado',
    EMANDAMENTO = 'EmAndamento',
    FINALIZADO = 'Finalizado',
    INTERROMPIDO = 'Interrompido',
    CANCELADO = 'Cancelado'
}

// optional: Record type annotation guaranties that 
// all the values from the enum are presented in the mapping
export const StatusGameMapping: Record<StatusGame, string> = {
    [StatusGame.PREPARADO]: "Game preparado",
    [StatusGame.EMANDAMENTO]: "Game em andamento",
    [StatusGame.FINALIZADO]: "Game já finalizado",
    [StatusGame.INTERROMPIDO]: "Game temporariamente interrompido",
    [StatusGame.CANCELADO]: "Game cancelada",
};

export const StatusGameColor: Record<StatusGame, string> = {
    [StatusGame.PREPARADO]: "btn-primary",
    [StatusGame.EMANDAMENTO]: "btn-success",
    [StatusGame.FINALIZADO]: "btn-light",
    [StatusGame.INTERROMPIDO]: "btn-danger",
    [StatusGame.CANCELADO]: "btn-dark",
};

