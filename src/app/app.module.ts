import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpErrorInterceptor } from './interceptors/http-error.interceptor';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { HeaderComponent } from './components/base/header/header.component';
import { FooterComponent } from './components/base/footer/footer.component';
import { MessagesComponent } from './components/base/messages/messages.component';
import { DivApareceComponent } from './temporario/div-aparece/div-aparece.component';
import { JogadorModule } from './components/jogador/jogador.module';
import { PartidaModule } from './components/partida/partida.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MessagesComponent,
    DivApareceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, 
    FormsModule, 
    ReactiveFormsModule,
    JogadorModule,
    PartidaModule
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
