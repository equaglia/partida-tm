import { HttpErrorInterceptor } from './interceptors/http-error.interceptor';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { JogadoresListComponent } from './pages/jogadores-list/jogadores-list.component';
import { PartidasListComponent } from './pages/partidas-list/partidas-list.component';
import { FooterComponent } from './components/footer/footer.component';
import { JogadorNovoComponent } from './pages/jogador-novo/jogador-novo.component';
import { JogadorFormComponent } from './components/jogador-form/jogador-form.component';
import { PartidaFormComponent } from './components/partida-form/partida-form.component';
import { PartidaNovaComponent } from './pages/partida-nova/partida-nova.component';
import { DetalhesPartidaFormComponent } from './components/detalhes-partida-form/detalhes-partida-form.component';
import { GamesPartidaFormComponent } from './components/games-partida-form/games-partida-form.component';
import { GameFormComponent } from './components/game-form/game-form.component';
import { MessagesComponent } from './components/messages/messages.component';
import { DivApareceComponent } from './temporario/div-aparece/div-aparece.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    JogadoresListComponent,
    PartidasListComponent,
    FooterComponent,
    JogadorNovoComponent,
    JogadorFormComponent,
    PartidaFormComponent,
    PartidaNovaComponent,
    DetalhesPartidaFormComponent,
    GamesPartidaFormComponent,
    GameFormComponent,
    MessagesComponent,
    DivApareceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, 
    FormsModule, 
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
