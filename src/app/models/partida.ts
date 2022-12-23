import { Game } from './game';
import { Jogador } from './jogador';

export interface Partida {
  id: number;
  jogadores: Jogador[];
  jogadorPrimeiroSacador: Jogador;
  games: Game[];
  inicio: Date;
  fim: Date;
  partidaStatus: string;
  gamesVencidosA: number;
  gamesVencidosB: number;
}
