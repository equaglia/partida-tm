import { StatusGame } from './../models/enums/status-game';
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

  putGamePontos(gameId: number, ptsA: number, ptsB: number): void {
    console.log("http://localhost:8080/games"+ '/' + gameId + '/pontuar/' + ptsA + '/' + ptsB);
    let complemento = this.apiUrl+'/' + gameId + '/pontuar/' + ptsA + '/' + ptsB;
    //let complemento = `${this.apiUrl}/${gameId}/pontuar/${ptsA}/${ptsB}`;
    this.http.put(complemento, '')
    .subscribe();
  }

  corrigirGameFinalizado(gameId: number, ptsA: number, ptsB: number): void {
    //let complemento = this.apiUrl+'/finalizado/' + gameId + '/corrigir/' + ptsA + '/' + ptsB;
    let complemento = `${this.apiUrl}/finalizado/${gameId}/corrigir/${ptsA}/${ptsB}`;
    this.http.put(complemento, '')
    .subscribe();
  }

  gameFinalizado(game: Game) {
    return game.gameStatus == StatusGame.FINALIZADO ? true : false;
  }
}
