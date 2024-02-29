import { Component, Input } from '@angular/core';
import { Tavolo } from '../model/tavolo';
import { TavoloService } from '../service/tavolo.service';

@Component({
  selector: 'app-ristorante-list',
  templateUrl: './ristorante-list.component.html',
  styleUrls: ['./ristorante-list.component.css'],
})
export class RistoranteListComponent {
  tavoli: Tavolo[];

  constructor(private tavoloService: TavoloService) {
    this.tavoli = tavoloService.tavoloList;
  }

  riserva(id: number) {
    this.tavoloService.toggleRiservato(id);
  }

  elimina(id: number) {
    this.tavoloService.delete(id);
  }
}
