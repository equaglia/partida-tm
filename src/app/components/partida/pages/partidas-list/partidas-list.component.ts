import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Partida } from '../../../../models/partida';
import { PartidaService } from '../../../../services/partida.service';
import { GameService } from './../../../../services/game.service';

@Component({
  selector: 'app-partidas-list',
  templateUrl: './partidas-list.component.html',
  styleUrls: ['./partidas-list.component.css'],
})
export class PartidasListComponent implements OnInit {
  partidas: Partida[] = [];
  lista: string = 'Lista de partidas';

  constructor(
    private partidaService: PartidaService,
    private gameService: GameService,
    private router: Router
  ) {
    this.getPartidas();
  }

  getPartidas(): void {
    this.partidaService
      .getAll()
      .subscribe((partidas) => (this.partidas = partidas));
  }
  ngOnInit(): void {}

  statusPartidaColor(ptd: Partida | undefined): string {
    return this.partidaService.statusPartidaColor(ptd);
  }

  statusJogadorColor(status: string): string {
    return this.partidaService.statusJogadorColor(status);
  }

  quantidadeGames(partida: Partida): number {
    return this.partidaService.quantidadeGames(partida);
  }
  iniciarPartida(id: number): void {
    this.partidaService.iniciarPartida(id);
  }
  interromperPartida(id: number): void {
    this.partidaService.interromperPartida(id);
  }
  continuarPartidaInterrompida(id: number): void {
    this.partidaService.continuarPartidaInterrompida(id);
  }
  
/*   zeraUltimoGame(ptd: Partida): void {
    let gameId = this.partidaService.getGameEmAndamento(ptd);
    if (gameId > 0) { //TODO mudar quando id não for numérico
      this.gameService.putGamePontos(gameId, 0, 0);
    }
    this.partidaService.zeraUltimoGames(ptd);
  } */

  corrigirGameFinalizado(gameId: number, ptsA: number, ptsB: number): void {
    this.gameService.corrigirGameFinalizado(gameId, ptsA, ptsB);
  }

  completarPartida(id: number): void {
    this.partidaService.completarPartida(id);
  }
  cancelarPartida(id: number): void {
    this.partidaService.cancelarPartida(id);
  }
  removerPartida(id: number): void {
    this.partidaService.removerPartida(id);
  }
  partidaPreparadaEJogadoresDisponiveis(ptd: Partida): boolean {
    return this.partidaService.partidaPreparadaEJogadoresDisponiveis(ptd);
  }
  partidaInterrompidaEJogadoresDisponiveis(ptd: Partida): boolean {
    return this.partidaService.partidaInterrompidaEJogadoresDisponiveis(ptd);
  }
  partidaPreparada(ptd: Partida): boolean {
    return this.partidaService.partidaPreparada(ptd);
  }
  partidaEmAndamento(ptd: Partida): boolean {
    return this.partidaService.partidaEmAndamento(ptd);
  }
  partidaInterrompida(ptd: Partida): boolean {
    return this.partidaService.partidaInterrompida(ptd);
  }
  partidaCancelada(ptd: Partida): boolean {
    return this.partidaService.partidaCancelada(ptd);
  }
  partidaFinalizada(ptd: Partida): boolean {
    return this.partidaService.partidaFinalizada(ptd);
  }
  jogadoresDisponiveis(ptd: Partida): boolean {
    return this.partidaService.jogadoresDisponiveis(ptd);
  }

  reload(): void {
    location.reload(); 
  }
}
