import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { JogadorNovoComponent } from './pages/jogador-novo/jogador-novo.component';
import { JogadoresListComponent } from './pages/jogadores-list/jogadores-list.component';
import { JogadorFormComponent } from './jogador-form/jogador-form.component';
import { JogadorRoutingModule } from './jogador-routing.module';

@NgModule({
  declarations: [    
    JogadorNovoComponent,
    JogadoresListComponent,
    JogadorFormComponent
],
  imports: [
    CommonModule,
    FormsModule, 
    ReactiveFormsModule,
    RouterModule,
    JogadorRoutingModule
  ]
})
export class JogadorModule { }
