import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';
import { Partida } from './../models/partida';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PartidaService {
  private baseApiUrl = environment.baseApiUrl;
  private apiUrl = `${this.baseApiUrl}partidas`; /* 'http://localhost:8080/partidas'; */
  errorMessage: any;

  constructor(private http: HttpClient) {}

  getAll(): Observable<Partida[]> {
    return this.http.get<Partida[]>(this.apiUrl);
  }

  createPartida(id_a: number, id_b: number) {
    this.http
      .post<Partida>(`${this.apiUrl}`+'/'+`${id_a}`+'/'+`${id_b}`, {})
      .pipe(
        catchError((error: any, caught: Observable<any>): Observable<any> => {
          this.errorMessage = error.message;
          console.error('There was an error!', error);
          return of();
        })
      )
      .subscribe();
    console.log(
      'criou partida ' /* +
        partida.jogadores[0] +
        ' ' +
        partida.gamesVencidosA +
        ' X ' +
        partida.gamesVencidosB +
        ' ' +
        partida.jogadores[1] */
    );
  }
}
