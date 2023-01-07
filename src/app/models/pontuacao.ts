import { Game } from './game';
import { Jogador } from './jogador';
export interface Pontuacao {
  id: number;
  game: Game;
  jogador: Jogador;
  pontos: number;
}
