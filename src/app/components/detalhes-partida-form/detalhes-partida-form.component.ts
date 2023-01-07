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
  partidaIniciada: boolean = false;

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
          //          this.partida?.games.sort((a, b) => Number(a.id) - Number(b.id));
          if (this.partida?.partidaStatus == 'EmAndamento') {
            this.partidaIniciada = true;
          }
        },
        error: (error) => {
          console.log(error);
        },
      });
    console.log(
      'partidaStatus: ' +
        this.partida?.partidaStatus +
        ' partidaIniciada = ' +
        this.partidaIniciada
    );
  }

  /*   getJogadorA(){
    return this.partidaService.getJogadorA(this.partida!);
  }

  getJogadorB(){
    return this.partidaService.getJogadorB(this.partida!);
  } */

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
}