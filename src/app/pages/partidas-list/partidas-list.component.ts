import { PartidaService } from './../../services/partida.service';
import { Partida } from './../../models/partida';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-partidas-list',
  templateUrl: './partidas-list.component.html',
  styleUrls: ['./partidas-list.component.css'],
})
export class PartidasListComponent implements OnInit {
  partidas: Partida[] = [];
  lista: string = 'Lista de partidas';
  statuscolor: string = 'btn-info';
//  statuscolor: string = 'btn-success';

  constructor(private partidaService: PartidaService) {
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
  finalizarPartida(id: number): void {
    this.partidaService.finalizarPartida(id);
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
  jogadoresDisponiveis(ptd: Partida): boolean {
    return  this.partidaService.jogadoresDisponiveis(ptd);
  }
}
