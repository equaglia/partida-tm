import { DivApareceComponent } from './temporario/div-aparece/div-aparece.component';
import { GameFormComponent } from './components/partida/game/game-form/game-form.component';
import { DetalhesPartidaFormComponent } from './components/partida/detalhes-partida-form/detalhes-partida-form.component';
import { PartidaNovaComponent } from './components/partida/pages/partida-nova/partida-nova.component';
import { PartidasListComponent } from './components/partida/pages/partidas-list/partidas-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'partidas', component: PartidasListComponent },
  { path: 'partidas/nova', component: PartidaNovaComponent },
  { path: 'partida/:id', component: DetalhesPartidaFormComponent },
  { path: 'game/:partidaId/:gameId', component: GameFormComponent },
  { path: 'temp', component: DivApareceComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
