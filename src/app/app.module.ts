import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { JogadoresListComponent } from './pages/jogadores-list/jogadores-list.component';
import { PartidasListComponent } from './pages/partidas-list/partidas-list.component';
import { FooterComponent } from './components/footer/footer.component';
import { JogadorNovoComponent } from './pages/jogador-novo/jogador-novo.component';
import { JogadorFormComponent } from './components/jogador-form/jogador-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    JogadoresListComponent,
    PartidasListComponent,
    FooterComponent,
    JogadorNovoComponent,
    JogadorFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, 
    FormsModule, 
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
