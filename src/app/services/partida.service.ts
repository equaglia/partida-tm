import { FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Injectable } from '@angular/core';

import { environment } from './../../environments/environment';
import { Partida } from './../models/partida';
import {
  StatusPartida,
  StatusPartidaColor,
} from './../models/enums/status-partida';
import { StatusJogador } from './../models/enums/status-jogador';

@Injectable({
  providedIn: 'root',
})
export class PartidaService {
  private baseApiUrl = environment.baseApiUrl;
  private apiUrl = `${this.baseApiUrl}partidas`; /* 'http://localhost:8080/partidas'; */
  errorMessage: any;
  
  constructor(private http: HttpClient) {}
  
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

  getAll(): Observable<Partida[]> {
    return this.http.get<Partida[]>(this.apiUrl);
  }
  
  retrieveById(ptdId: number): Observable<Partida | undefined> {
    return this.http
    .get<Partida[]>(this.apiUrl)
    .pipe(map((partida) => partida.find((e) => e.id === ptdId)));
  }
  
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
  
  getGameEmAndamento(partida: Partida | undefined): number {
    if (partida == undefined) return -1;
    return partida.games[partida.gameAtualIndice].id;
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

  statusJogadorColor(status: string): string {
    return status == StatusJogador.DISPONIVEL ? 'black' : 'red';
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
    document.location.reload();
    console.log('iniciou partida ');
  }
  iniciarProximoGame(ptdId: number): void {
    this.http.put(`${this.apiUrl}/${ptdId}/continuar`, {}).subscribe();
    document.location.reload();
    console.log('continuando partida ');
  }
  interromperPartida(ptdId: number): void {
    this.http.put(`${this.apiUrl}/${ptdId}/interromper`, {}).subscribe();
    document.location.reload();
    console.log('interrompeu partida ');
  }
  continuarPartidaInterrompida(ptdId: number): void {
    this.http.put(`${this.apiUrl}/${ptdId}/retornar`, {}).subscribe();
    this.iniciarProximoGame(ptdId);
    document.location.reload();
    console.log('retornou partida interrompida ');
  }
  completarPartida(ptdId: number): void {
    this.http.put(`${this.apiUrl}/${ptdId}/completar`, {}).subscribe();
    document.location.reload();
    console.log('completou partida ');
  }
  cancelarPartida(ptdId: number): void {
    this.http.put(`${this.apiUrl}/${ptdId}/cancelar`, {}).subscribe();
    document.location.reload();
    console.log('cancelou partida ');
  }
  removerPartida(ptdId: number) {
    this.http.delete(`${this.apiUrl}/${ptdId}`, {}).subscribe();
    document.location.reload();
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
  partidaFinalizada(ptd: Partida | undefined): boolean {
    if (ptd == undefined) return false;
    return ptd.partidaStatus == StatusPartida.FINALIZADA ? true : false;
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
