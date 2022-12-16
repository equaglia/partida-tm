import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Partida } from './../models/partida';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PartidaService {
  private apiUrl = 'http://localhost:8080/partidas';
  
  constructor(private http: HttpClient) { }
  
  getAll(): Observable<Partida[]> {
    return this.http.get<Partida[]>(this.apiUrl);
  }
  
}
