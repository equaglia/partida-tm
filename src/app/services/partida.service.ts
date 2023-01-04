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

  getJogadorA(partida: Partida){
    console.log("partida.jogadorA.nome: "+partida.jogadorA.nome)
    return partida.jogadorA.nome;
  }

  getJogadorB(partida: Partida){
    return partida.jogadorB.nome;
  }

  primeiroSacador(partida: Partida | undefined): string | undefined {
    return partida?.jogadorPrimeiroSacador.nome;
  }

  createPartida(adversarios: FormGroup) {
    console.log(adversarios.value);
    this.http
      .post<any>(
        `${this.apiUrl}` +
          '/' +
          `${adversarios.controls['jogadorA'].value!}` +
          '/' +
          `${adversarios.controls['jogadorB'].value!}` +
          '/' +
          `${adversarios.controls['games'].value!}`,
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
    var ms = Math.abs(fim - inicio);

    var total_seconds = ms / 1000;

    var horas = Math.floor(total_seconds / 3600);
    var minutos = Math.floor((total_seconds - horas * 3600) / 60);
    var segundos = Math.floor(total_seconds - horas * 3600 - minutos * 60);
    var horaMinuto =
      horas.toString().padStart(2, '0') +
      ':' +
      minutos.toString().padStart(2, '0') +
      ':' +
      segundos.toString().padStart(2, '0');
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
}
