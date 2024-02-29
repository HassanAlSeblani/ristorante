import { Component, EventEmitter, Output } from '@angular/core';
import { Tavolo } from '../model/tavolo';
import { TavoloService } from '../service/tavolo.service';

@Component({
  selector: 'app-ristorante-form',
  templateUrl: './ristorante-form.component.html',
  styleUrls: ['./ristorante-form.component.css'],
})
export class RistoranteFormComponent {
  posti: number = 0;
  isRotondo: boolean = false;

  constructor(private tavoloService: TavoloService) {}

  addTavolo() {
    this.tavoloService.newTavolo(this.posti, this.isRotondo);
  }

  resetForm() {
    this.posti = 0;
    this.isRotondo = false;
  }
}
