import { JogadorFormComponent } from './components/jogador-form/jogador-form.component';
//import { NovoJogadorComponent } from './components/novo-jogador/novo-jogador.component';
import { PartidasListComponent } from './pages/partidas-list/partidas-list.component';
import { JogadoresListComponent } from './pages/jogadores-list/jogadores-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: JogadoresListComponent },
  { path: 'jogadores', component: JogadoresListComponent },
  { path: 'jogadores/novo', component: JogadorFormComponent },
  { path: 'partidas', component: PartidasListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
