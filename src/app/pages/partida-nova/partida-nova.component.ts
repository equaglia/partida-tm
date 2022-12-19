import { FormGroup } from '@angular/forms';
import { PartidaService } from './../../services/partida.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-partida-nova',
  templateUrl: './partida-nova.component.html',
  styleUrls: ['./partida-nova.component.css'],
})
export class PartidaNovaComponent implements OnInit {
  btnText = 'Nova Partida';

  constructor(private partidaService: PartidaService) {}

  ngOnInit(): void {}

  async createHandler(adversarios: FormGroup) {
    this.partidaService.createPartida(adversarios);
  }
}