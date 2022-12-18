import { JogadorNovoComponent } from './pages/jogador-novo/jogador-novo.component';
import { PartidaNovaComponent } from './pages/partida-nova/partida-nova.component';
import { PartidasListComponent } from './pages/partidas-list/partidas-list.component';
import { JogadoresListComponent } from './pages/jogadores-list/jogadores-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: JogadoresListComponent },
  { path: 'jogadores', component: JogadoresListComponent },
  { path: 'jogadores/novo', component: JogadorNovoComponent },
  { path: 'partidas', component: PartidasListComponent },
  { path: 'partidas/nova', component: PartidaNovaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
