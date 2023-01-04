import { Game } from './game';
import { Jogador } from './jogador';

export interface Partida {
  id: number;
  //jogadores: Jogador[];
  jogadorA: Jogador;
  jogadorB: Jogador;
  jogadorPrimeiroSacador: Jogador;
  games: Game[];
  inicioPartida: Date;
  fimPartida: Date;
  partidaStatus: string;
  gamesVencidosA: number;
  gamesVencidosB: number;
  gameAtualIndice: number;
}
