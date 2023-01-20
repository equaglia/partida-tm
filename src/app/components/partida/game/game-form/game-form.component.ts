import { Pontuacao } from '../../../../models/pontuacao';
import { GameService } from '../../../../services/game.service';
import { ActivatedRoute, Router } from '@angular/router';
import { PartidaService } from '../../../../services/partida.service';
import { Game } from '../../../../models/game';
import { Partida } from '../../../../models/partida';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-game-form',
  templateUrl: './game-form.component.html',
  styleUrls: ['./game-form.component.css'],
})
export class GameFormComponent implements OnInit {
  partida: Partida | undefined;
  game: Game | undefined;
  pontuacao: Pontuacao[] = [];
  @ViewChild('gameForm') form!: NgForm;

  constructor(
    private gameService: GameService,
    private partidaService: PartidaService,
    private actRoute: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.getPartida();
    this.getGame();
  }

  getPartida() {
    this.partidaService
      .retrieveById(Number(this.actRoute.snapshot.paramMap.get('partidaId')))
      .subscribe({
        next: (response: Partida | undefined) => {
          this.partida = response;
        },
        error: (error) => {
          console.log(error);
        },
      });
  }

  getGame() {
    this.gameService
      .retrieveById(Number(this.actRoute.snapshot.paramMap.get('gameId')))
      .subscribe({
        next: (response: Game | undefined) => {
          this.game = response;
        },
        error: (error) => {
          console.log(error);
        },
      });
  }

  onEditGameFormClicked() {
    this.form.setValue({
      pontosA: this.game?.pontos[0].pontos,
      pontosB: this.game?.pontos[1].pontos,
    });
  }

  updateGame(pontos: { pontosA: number; pontosB: number }) {
    this.gameService.putGamePontos(
      this.game?.id!,
      pontos.pontosA,
      pontos.pontosB
    );
    this.router.navigate(['/partidas']);
   // this.router.
    //window.history.back();
  }
}
