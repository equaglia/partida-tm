import { Game } from './../models/game';
import { Observable, map, catchError, of } from 'rxjs';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  private baseApiUrl = environment.baseApiUrl;
  private apiUrl = `${this.baseApiUrl}games`; /* 'http://localhost:8080/games'; */
  errorMessage: any;

  constructor(private http: HttpClient) {}

  retrieveById(id: number): Observable<Game | undefined> {
    return this.http
      .get<Game[]>(this.apiUrl)
      .pipe(map((game) => game.find((e) => e.id === id)));
  }

/*   getJogador(game: Game | undefined, adversario: number) {
    return game?.pontos[adversario].jogador.nome;
  }

  getJogadorEPontos(game: Game | undefined, adversario: number) {
    let jog = game?.pontos[adversario].jogador.nome;
    let pts = game?.pontos[adversario].pontos;
    return {jogador: jog, pontos: pts};
  } */

  putGamePontos(gameId: number, ptsA: number, ptsB: number) {
    console.log("http://localhost:8080/games"+ '/' + gameId + '/pontuar/' + ptsA + '/' + ptsB);
    let complemento = this.apiUrl+'/' + gameId + '/pontuar/' + ptsA + '/' + ptsB;
    this.http.put(complemento, '')
    /* .pipe(
      catchError((error: any, caught: Observable<any>): Observable<any> => {
        this.errorMessage = error.message;
        console.error('Error: ', error.message);
        return of();
      })
    ) */
    .subscribe();
  }
}
