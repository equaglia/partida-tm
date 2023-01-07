import { Game } from './../models/game';
import { Observable, map } from 'rxjs';
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

  getPontos(game: Game | undefined, adversario: number) {
    return game?.pontos[adversario].pontos;
  }

  putGamePontos(gameId: number, ptsA: number, ptsB: number) {
    console.log("http://localhost:8080/games"+ '/' + gameId + '/pontuar/' + ptsA + '/' + ptsB);
    let complemento = this.apiUrl+'/' + gameId + '/pontuar/' + ptsA + '/' + ptsB;
    this.http.put(complemento, '')
    .subscribe();
  }
}
