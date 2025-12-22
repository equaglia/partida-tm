import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';
import { Jogador } from '../models/jogador';

@Injectable({
  providedIn: 'root',
})
export class JogadorService {
  private baseApiUrl = environment.baseApiUrl;
  private apiUrl = `${this.baseApiUrl}api/jogadores`;
  errorMessage: any;

  constructor(private http: HttpClient) {}

  createJogador(jogador: Jogador): Observable<Jogador> {
    return this.http.post<Jogador>(this.apiUrl, {
      nome: jogador.nome,
      sobrenome: jogador.sobrenome,
      categoria: jogador.categoria,
    });
  }

  getAll(): Observable<Jogador[]> {
    return this.http.get<Jogador[]>(this.apiUrl);
  }
}