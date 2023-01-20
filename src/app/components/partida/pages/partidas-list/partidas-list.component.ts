import { Router } from '@angular/router';
import { PartidaService } from '../../../../services/partida.service';
import { Partida } from '../../../../models/partida';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-partidas-list',
  templateUrl: './partidas-list.component.html',
  styleUrls: ['./partidas-list.component.css'],
})
export class PartidasListComponent implements OnInit {
  //  export class PartidasListComponent implements OnInit, OnDestroy {
    partidas: Partida[] = [];
    lista: string = 'Lista de partidas';
    //someSubscription: any;
   /*  refr:  boolean = false;
    refre: number =0; */

  constructor(private partidaService: PartidaService, private router: Router) {
    this.getPartidas();
/*     this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };
    this.someSubscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // Here is the dashing line comes in the picture.
        // You need to tell the router that, you didn't visit or load the page previously, so mark the navigated flag to false as below.
        this.router.navigated = false;
      }
    }); */
  }
  
  getPartidas(): void {
    this.partidaService
      .getAll()
      .subscribe((partidas) => (this.partidas = partidas));
  }
  ngOnInit(): void {}

/*   ngOnDestroy() {
    if (this.someSubscription) {
      this.someSubscription.unsubscribe();
    }
  }
 */
/* refreshPage(): boolean {
  //this.refre = this.refre == 0 ? 1 : 0;
  if (this.refre == 1) return true;
  return false;
} */

/* setRefreshPageTrue(): void {
  this.refr = true;
}
 */



  statusPartidaColor(ptd: Partida | undefined): string {
    return this.partidaService.statusPartidaColor(ptd);
  }

  statusJogadorColor(status: string): string {
    return this.partidaService.statusJogadorColor(status);
  }

  quantidadeGames(partida: Partida): number {
    return this.partidaService.quantidadeGames(partida);
  }
  iniciarPartida(id: number): void {
    this.partidaService.iniciarPartida(id);
  }
  interromperPartida(id: number): void {
    this.partidaService.interromperPartida(id);
  }
  continuarPartidaInterrompida(id: number): void {
    this.partidaService.continuarPartidaInterrompida(id);
  }
  finalizarPartida(id: number): void {
    this.partidaService.finalizarPartida(id);
  }
  cancelarPartida(id: number): void {
    this.partidaService.cancelarPartida(id);
  }
  removerPartida(id: number): void {
    this.partidaService.removerPartida(id);
  }
  partidaPreparadaEJogadoresDisponiveis(ptd: Partida): boolean {
    return this.partidaService.partidaPreparadaEJogadoresDisponiveis(ptd);
  }
  partidaInterrompidaEJogadoresDisponiveis(ptd: Partida): boolean {
    return this.partidaService.partidaInterrompidaEJogadoresDisponiveis(ptd);
  }
  partidaPreparada(ptd: Partida): boolean {
    return this.partidaService.partidaPreparada(ptd);
  }
  partidaEmAndamento(ptd: Partida): boolean {
    return this.partidaService.partidaEmAndamento(ptd);
  }
  partidaInterrompida(ptd: Partida): boolean {
    return this.partidaService.partidaInterrompida(ptd);
  }
  partidaCancelada(ptd: Partida): boolean {
    return this.partidaService.partidaCancelada(ptd);
  }
  jogadoresDisponiveis(ptd: Partida): boolean {
    return this.partidaService.jogadoresDisponiveis(ptd);
  }
}