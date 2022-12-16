import { Component, OnInit } from '@angular/core';
import { Jogador } from 'src/app/models/jogador';
import { JogadorService } from 'src/app/services/jogador.service';

@Component({
  selector: 'app-jogador-form',
  templateUrl: './jogador-form.component.html',
  styleUrls: ['./jogador-form.component.css'],
})
export class JogadorFormComponent implements OnInit {
  btnText = 'Novo Jogador';

  constructor(private jogadorService: JogadorService) {}

  ngOnInit(): void {}

  async createHandler(jogador: Jogador) {
    this.jogadorService.createJogador(jogador);
  }
}
