import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DetalhesPartidaFormComponent } from './detalhes-partida-form/detalhes-partida-form.component';
import { PartidaNovaComponent } from './pages/partida-nova/partida-nova.component';
import { PartidasListComponent } from './pages/partidas-list/partidas-list.component';
import { PartidaFormComponent } from './partida-form/partida-form.component';
import { PartidaRoutingModule } from './partida-routing.module';
import { GameFormComponent } from './game/game-form/game-form.component';
import { GamesPartidaFormComponent } from './game/games-partida-form/games-partida-form.component';

@NgModule({
  declarations: [
    PartidaNovaComponent,
    PartidasListComponent,
    PartidaFormComponent,
    DetalhesPartidaFormComponent,
    GameFormComponent,
    GamesPartidaFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule, 
    ReactiveFormsModule,
    RouterModule,
    PartidaRoutingModule
  ]
})
export class PartidaModule { }
