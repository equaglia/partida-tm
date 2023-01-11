import { StatusPartida } from './../../models/enums/status-partida';
import { PartidaService } from './../../services/partida.service';
import { Partida } from './../../models/partida';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-partidas-list',
  templateUrl: './partidas-list.component.html',
  styleUrls: ['./partidas-list.component.css']
})
export class PartidasListComponent implements OnInit {
  partidas: Partida[] = [];
  lista: string = "Lista de partidas";

  constructor(private partidaService: PartidaService) {
    this.getPartidas(); 
   }

   getPartidas(): void {
    this.partidaService.getAll().subscribe((partidas) =>
    (this.partidas = partidas));
   }

  ngOnInit(): void {}

  quantidadeGames(partida: Partida): number {
    return this.partidaService.quantidadeGames(partida);
  }

  iniciarPartida(id: number){
    this.partidaService.iniciarPartida(id);
  }

  partidaPreparada(ptd: Partida): boolean {
    return this.partidaService.partidaPreparada(ptd);
  }
}

