import { HttpErrorInterceptor } from './interceptors/http-error.interceptor';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/base/header/header.component';
import { JogadoresListComponent } from './components/jogador/pages/jogadores-list/jogadores-list.component';
import { PartidasListComponent } from './components/partida/pages/partidas-list/partidas-list.component';
import { FooterComponent } from './components/base/footer/footer.component';
import { JogadorNovoComponent } from './components/jogador/pages/jogador-novo/jogador-novo.component';
import { JogadorFormComponent } from './components/jogador/jogador-form/jogador-form.component';
import { PartidaFormComponent } from './components/partida/partida-form/partida-form.component';
import { PartidaNovaComponent } from './components/partida/pages/partida-nova/partida-nova.component';
import { DetalhesPartidaFormComponent } from './components/partida/detalhes-partida-form/detalhes-partida-form.component';
import { GamesPartidaFormComponent } from './components/partida/game/games-partida-form/games-partida-form.component';
import { GameFormComponent } from './components/partida/game/game-form/game-form.component';
import { MessagesComponent } from './components/base/messages/messages.component';
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
    GameFormComponent,
    GamesPartidaFormComponent,
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
