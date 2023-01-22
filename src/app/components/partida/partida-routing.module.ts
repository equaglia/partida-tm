import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DetalhesPartidaFormComponent } from './detalhes-partida-form/detalhes-partida-form.component';
import { GameFormComponent } from './game/game-form/game-form.component';
import { PartidaNovaComponent } from './pages/partida-nova/partida-nova.component';
import { PartidasListComponent } from './pages/partidas-list/partidas-list.component';

const routes: Routes = [
  { path: 'partidas', component: PartidasListComponent, children : [
    { path: 'nova', component: PartidaNovaComponent },
  ] },
  { path: 'partida/:id', component: DetalhesPartidaFormComponent },
  { path: 'game/:partidaId/:gameId/:acao', component: GameFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PartidaRoutingModule { }
