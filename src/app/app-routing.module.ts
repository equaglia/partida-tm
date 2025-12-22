import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  
  {
    path: 'jogador',
    canActivate: [AuthGuard],
    loadChildren: () => import('./components/jogador/jogador.module').then(m => m.JogadorModule)
  },

  {
    path: 'partida',
    canActivate: [AuthGuard],
    loadChildren: () => import('./components/partida/partida.module').then(m => m.PartidaModule)
  },

  { path: '', redirectTo: '/jogador', pathMatch: 'full' },
  { path: '**', redirectTo: '/jogador' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }