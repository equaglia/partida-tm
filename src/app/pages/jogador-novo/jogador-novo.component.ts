import { Jogador } from './../../models/jogador';
import { JogadorService } from './../../services/jogador.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jogador-novo',
  templateUrl: './jogador-novo.component.html',
  styleUrls: ['./jogador-novo.component.css'],
})
export class JogadorNovoComponent implements OnInit {
  btnText = 'Novo Jogador';

  constructor(private jogadorService: JogadorService) {}

  ngOnInit(): void {}

  async createHandler(jogador: Jogador) {
    this.jogadorService.createJogador(jogador);
  }
}