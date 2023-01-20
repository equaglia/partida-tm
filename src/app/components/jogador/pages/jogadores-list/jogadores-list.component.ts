import { Jogador } from '../../../../models/jogador';
import { Component, OnInit } from '@angular/core';
import { JogadorService } from 'src/app/services/jogador.service';

@Component({
  selector: 'app-jogadores-list',
  templateUrl: './jogadores-list.component.html',
  styleUrls: ['./jogadores-list.component.css']
})
export class JogadoresListComponent implements OnInit {
  jogadores: Jogador[] = [];
  lista: string = "Lista de Jogadores";
  
  constructor( private jogadorService: JogadorService) {
    this.getJogadores();
   }

   getJogadores(): void {
    this.jogadorService.getAll().subscribe((jogadores) =>
    (this.jogadores = jogadores));
  }

  ngOnInit(): void {} 
}