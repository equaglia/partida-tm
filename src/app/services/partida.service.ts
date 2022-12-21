import { FormGroup } from '@angular/forms';
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
}
