import { Pontuacao } from './../../models/pontuacao';
import { Router, ActivatedRoute } from '@angular/router';
import { Game } from './../../models/game';
import { GameService } from './../../services/game.service';
import { Partida } from './../../models/partida';
import { PartidaService } from './../../services/partida.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-games-partida-form',
  templateUrl: './games-partida-form.component.html',
  styleUrls: ['./games-partida-form.component.css'],
})
export class GamesPartidaFormComponent implements OnInit {
  partida: Partida|undefined;
  pontos: Pontuacao[]=[];
  games: Game[]|undefined; 
  /* [{ 
    id: 0,
    pontos: this.pontos,
    inicioGame: new Date('2017-05-03'),
    fimGame: new Date('2017-05-03'),
    gameStatus: ''}]; */

  constructor(
    private partidaService: PartidaService,
    private gameService: GameService,
    private actRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.partidaService
      .retrieveById(Number(this.actRoute.snapshot.paramMap.get('id')))
      .subscribe({
        next: (response: Partida | undefined) => {
          this.partida = response;
          this.partida?.games.sort((a, b) => Number(a.id) - Number(b.id));
          this.games = response?.games;
        },
        error: (error) => {
          console.log(error);
        },
      });
  }

  getJogador(adversario: number): string | undefined {
    return this.partidaService.getJogador(this.partida, adversario);
  }

  gameOrdem(game: Game|undefined): number{
    return this.games!.indexOf(game!) + 1;
  }
}
