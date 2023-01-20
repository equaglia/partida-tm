import { RouterModule } from '@angular/router';
import { JogadorFormComponent } from './jogador-form/jogador-form.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JogadorNovoComponent } from './pages/jogador-novo/jogador-novo.component';
import { JogadoresListComponent } from './pages/jogadores-list/jogadores-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



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
    RouterModule
  ]
})
export class JogadorModule { }
