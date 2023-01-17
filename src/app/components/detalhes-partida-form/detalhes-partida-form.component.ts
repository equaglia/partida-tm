import { Game } from './../../models/game';
import { Partida } from './../../models/partida';
import { PartidaService } from './../../services/partida.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detalhes-partida-form',
  templateUrl: './detalhes-partida-form.component.html',
  styleUrls: ['./detalhes-partida-form.component.css'],
}) 
export class DetalhesPartidaFormComponent implements OnInit {
  partida: Partida | undefined;
  ascending: Game[] = [];
  statusPartida: string = '';

  constructor(
    private partidaService: PartidaService,
    private actRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.partidaService
        .retrieveById(Number(this.actRoute.snapshot.paramMap.get('id')))
      .subscribe({
        next: (response: Partida | undefined) => {
          this.partida = response;
          this.statusPartida = this.partida?.partidaStatus == undefined ? '' : this.partida.partidaStatus;
        },
        error: (error) => {
          console.log(error);
        },
      });
    
  }

  primeiroSacador(): string | undefined {
    return this.partidaService.primeiroSacador(this.partida);
  }

  duracao(): string {
    return this.partidaService.duracaoPartida(this.partida);
  }

  gameAtualIndice(): number {
    return this.partidaService.gameAtualIndice(this.partida);
  }

  iniciarPartida(id: number) {
    this.partidaService.iniciarPartida(id);
  }
  continuarPartidaInterrompida(id: number): void {
    this.partidaService.continuarPartidaInterrompida(id);
  }

  partidaPreparada(ptd: Partida | undefined): boolean {
    return this.partidaService.partidaPreparada(ptd);
  }

  partidaInterrompida(ptd: Partida | undefined): boolean {
    return this.partidaService.partidaInterrompida(ptd);
  }
  partidaPreparadaEJogadoresDisponiveis(ptd: Partida): boolean {
    return this.partidaService.partidaPreparadaEJogadoresDisponiveis(ptd);
  }
  partidaInterrompidaEJogadoresDisponiveis(ptd: Partida): boolean {
    return this.partidaService.partidaInterrompidaEJogadoresDisponiveis(ptd);
  }
}
