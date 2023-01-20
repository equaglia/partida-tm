import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { JogadorRoutingModule } from './jogador-routing.module';
import { JogadorFormComponent } from './jogador-form/jogador-form.component';
import { JogadorNovoComponent } from './pages/jogador-novo/jogador-novo.component';
import { JogadoresListComponent } from './pages/jogadores-list/jogadores-list.component';

@NgModule({
  declarations: [    
    JogadoresListComponent,
    JogadorNovoComponent,
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
