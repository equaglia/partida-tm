export enum StatusJogador {
    DISPONIVEL = 'Disponivel', 
    NAODISPONIVEL = 'NaoDisponivel',
}

// optional: Record type annotation guaranties that 
// all the values from the enum are presented in the mapping
export const StatusPartidaMapping: Record<StatusJogador, string> = {
    [StatusJogador.DISPONIVEL]: "Jogador disponível",
    [StatusJogador.NAODISPONIVEL]: "Jogador não disponível",
};


