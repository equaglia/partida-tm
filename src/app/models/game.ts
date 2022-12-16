import { Pontuacao } from './pontuacao';

export interface Game {
  id: number;
  pontos: Pontuacao[];
  inicioGame: Date;
  fimGame: Date;
  gameStatus: string;
}
