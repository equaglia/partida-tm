import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Jogador } from './../models/jogador';
import { catchError, Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class JogadorService {
  private baseApiUrl = environment.baseApiUrl;
  private apiUrl = `${this.baseApiUrl}jogadores`; /* 'http://localhost:8080/jogadores'; */
  errorMessage: any;

  constructor(private http: HttpClient) {}

  getAll(): Observable<Jogador[]> {
    return this.http.get<Jogador[]>(this.apiUrl);
  }

  createJogador(jogador: Jogador) {
    this.http
      .post<Jogador>(this.apiUrl, {
        nome: jogador.nome,
        sobrenome: jogador.sobrenome,
        categoria: jogador.categoria,
      })
      .pipe(
        catchError((error: any, caught: Observable<any>): Observable<any> => {
          this.errorMessage = error.message;
          console.error('There was an error!', error);
          return of();
        })
      )
      .subscribe();
    console.log('criou jogador ' + jogador.nome + ' ' + jogador.sobrenome);
  }
}
