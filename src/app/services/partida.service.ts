import { StatusJogador } from './../models/enums/status-jogador';
import { StatusPartida } from './../models/enums/status-partida';
import { FormGroup } from '@angular/forms';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of, map } from 'rxjs';
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

  retrieveById(id: number): Observable<Partida | undefined> {
    return this.http
      .get<Partida[]>(this.apiUrl)
      .pipe(map((partida) => partida.find((e) => e.id === id)));
  }

  /*   getJogador(partida: Partida | undefined, adversario: number) {
    return partida?.jogadores[adversario].nome;
  } */

  getJogadorA(partida: Partida) {
    console.log('partida.jogadorA.nome: ' + partida.jogadorA.nome);
    return partida.jogadorA.nome;
  }

  getJogadorB(partida: Partida) {
    return partida.jogadorB.nome;
  }

  primeiroSacador(partida: Partida | undefined): string | undefined {
    return partida?.jogadorPrimeiroSacador.nome;
  }

  createPartida(jg: FormGroup) {
    console.log(jg.value);
    this.http
      .post<any>(
        `${this.apiUrl}/${jg.controls['jogadorA'].value!}/${jg.controls[
          'jogadorB'
        ].value!}/${jg.controls['games'].value!}`,
        {}
      )
      .pipe(
        catchError((error: any, caught: Observable<any>): Observable<any> => {
          this.errorMessage = error.message;
          console.error('There was an error!', error);
          return of();
        })
      )
      .subscribe();
    console.log('criou partida ');
  }

  duracaoPartida(partida: Partida | undefined): string {
    if (partida == undefined) return '00:00';
    partida = partida;
    if (partida.inicioPartida == undefined) return '00:00';
    var inicio = new Date(partida.inicioPartida).getTime();
    var fim = new Date().getTime();
    if (!(partida.fimPartida == undefined || partida.fimPartida == null)) {
      fim = new Date(partida.fimPartida).getTime();
    }
    var horaMinuto = '';
    var ms = Math.abs(fim - inicio);
    var total_seconds = ms / 1000;
    var horas = Math.floor(total_seconds / 3600);
    horaMinuto = `${horas.toString().padStart(2, '0')}`;
    var minutos = Math.floor((total_seconds - horas * 3600) / 60);
    horaMinuto = `${horaMinuto}:${minutos.toString().padStart(2, '0')}`;
    var segundos = Math.floor(total_seconds - horas * 3600 - minutos * 60);
    horaMinuto = `${horaMinuto}:${segundos.toString().padStart(2, '0')}`;
    return horaMinuto;
  }

  quantidadeGames(partida: Partida) {
    return partida.games.length;
  }

  gameAtualIndice(partida: Partida | undefined): number {
    var indice = 0;
    if (partida == undefined) return -1;

    if (partida.gameAtualIndice > 0)
      indice = partida.games[partida.gameAtualIndice].id;
    return indice;
  }

  iniciarPartida(id: number) {
    this.http
      .put(`${this.apiUrl}/${id}/iniciar`, {})
      .pipe(
        catchError((error: any, caught: Observable<any>): Observable<any> => {
          this.errorMessage = error.message;
          console.error('Error: ', error.message);
          return of();
        })
      )
      .subscribe();
    console.log('iniciou partida ');
  }

  jogadoresDisponiveis(statusA: string, statusB: string): boolean {
    return (
      statusA == StatusJogador.DISPONIVEL && statusB == StatusJogador.DISPONIVEL
    );
  }

  partidaPreparada(ptd: Partida | undefined): boolean {
    if (ptd == undefined) return false;
    return ptd.partidaStatus == StatusPartida.PREPARADA &&
      this.jogadoresDisponiveis(ptd.jogadorA.status, ptd.jogadorB.status)
      ? true
      : false;
  }

  partidaInterrompida(ptd: Partida | undefined): boolean {
    if (ptd == undefined) return false;
    return ptd.partidaStatus == StatusPartida.INTERROMPIDA &&
      this.jogadoresDisponiveis(ptd.jogadorA.status, ptd.jogadorB.status)
      ? true
      : false;
  }
}
