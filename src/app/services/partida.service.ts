import { StatusJogador } from './../models/enums/status-jogador';
import {
  StatusPartida,
  StatusPartidaColor,
} from './../models/enums/status-partida';
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

  retrieveById(ptdId: number): Observable<Partida | undefined> {
    return this.http
      .get<Partida[]>(this.apiUrl)
      .pipe(map((partida) => partida.find((e) => e.id === ptdId)));
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

  jogadoresDisponiveis(ptd: Partida | undefined): boolean {
    if (ptd == undefined) return false;
    return (
      ptd.jogadorA.status == StatusJogador.DISPONIVEL &&
      ptd.jogadorB.status == StatusJogador.DISPONIVEL
    );
  }

  statusPartidaColor(ptd: Partida | undefined): string {
    let cor = StatusPartidaColor.Cancelada;
    if (ptd != undefined) {
      switch (ptd.partidaStatus) {
        case StatusPartida.CANCELADA:
          cor = StatusPartidaColor.Cancelada;
          break;
        case StatusPartida.EMANDAMENTO:
          cor = StatusPartidaColor.EmAndamento;
          break;
        case StatusPartida.FINALIZADA:
          cor = StatusPartidaColor.Finalizada;
          break;
        case StatusPartida.INTERROMPIDA:
          cor = StatusPartidaColor.Interrompida;
          break;
        case StatusPartida.PREPARADA:
          cor = StatusPartidaColor.Preparada;
          break;
        default:
          cor = StatusPartidaColor.Cancelada;
      }
    }
    return cor;
  }

  iniciarPartida(ptdId: number) {
    this.http.put(`${this.apiUrl}/${ptdId}/iniciar`, {}).subscribe();
    console.log('iniciou partida ');
  }
  iniciarProximoGame(ptdId: number): void {
    this.http.put(`${this.apiUrl}/${ptdId}/continuar`, {}).subscribe();
    console.log('continuando partida ');
  }
  interromperPartida(ptdId: number): void {
    this.http.put(`${this.apiUrl}/${ptdId}/interromper`, {}).subscribe();
    console.log('interrompeu partida ');
  }
  continuarPartidaInterrompida(ptdId: number): void {
    this.http.put(`${this.apiUrl}/${ptdId}/retornar`, {}).subscribe();
    console.log('retornou partida interrompida ');
  }
  finalizarPartida(ptdId: number): void {
    this.http.put(`${this.apiUrl}/${ptdId}/completar`, {}).subscribe();
    console.log('iniciou partida ');
  }
  cancelarPartida(ptdId: number): void {
    this.http.put(`${this.apiUrl}/${ptdId}/cancelar`, {}).subscribe();
    console.log('cancelou partida ');
  }
  removerPartida(ptdId: number) {
    this.http.delete(`${this.apiUrl}/${ptdId}`, {}).subscribe();
    console.log('removeu partida ');
  }

  partidaInterrompidaEJogadoresDisponiveis(ptd: Partida | undefined): boolean {
    if (ptd == undefined) return false;
    return this.jogadoresDisponiveis(ptd) && this.partidaInterrompida(ptd);
  }
  partidaPreparadaEJogadoresDisponiveis(ptd: Partida | undefined): boolean {
    if (ptd == undefined) return false;
    return this.jogadoresDisponiveis(ptd) && this.partidaPreparada(ptd);
  }
  partidaPreparada(ptd: Partida | undefined): boolean {
    if (ptd == undefined) return false;
    return ptd.partidaStatus == StatusPartida.PREPARADA ? true : false;
  }
  partidaEmAndamento(ptd: Partida | undefined): boolean {
    if (ptd == undefined) return false;
    return ptd.partidaStatus == StatusPartida.EMANDAMENTO ? true : false;
  }
  partidaInterrompida(ptd: Partida | undefined): boolean {
    if (ptd == undefined) return false;
    return ptd.partidaStatus == StatusPartida.INTERROMPIDA ? true : false;
  }
  partidaCancelada(ptd: Partida | undefined): boolean {
    if (ptd == undefined) return false;
    return ptd.partidaStatus == StatusPartida.CANCELADA ? true : false;
  }
}
