import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { JogadorNovoComponent } from './pages/jogador-novo/jogador-novo.component';
import { JogadoresListComponent } from './pages/jogadores-list/jogadores-list.component';

const routes: Routes = [
  { path: '', component: JogadoresListComponent },
  { path: 'jogadores', component: JogadoresListComponent },
  { path: 'jogadores/novo', component: JogadorNovoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JogadorRoutingModule { }
