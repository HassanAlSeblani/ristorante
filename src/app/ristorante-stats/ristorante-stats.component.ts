import { Component, Input } from '@angular/core';
import { Tavolo } from '../model/tavolo';
import { TavoloService } from '../service/tavolo.service';

@Component({
  selector: 'app-ristorante-stats',
  templateUrl: './ristorante-stats.component.html',
  styleUrls: ['./ristorante-stats.component.css'],
})
export class RistoranteStatsComponent {
  tavoli!: Tavolo[];

  constructor(private tavoloService: TavoloService) {
    this.tavoli = this.tavoloService.tavoloList;
  }

  contaPrenotati(): number {
    let prenotati: number = 0;

    for (const t of this.tavoli) if (t.isRiservato) prenotati++;

    return prenotati;
  }

  contaRotondi() {
    let rotondi: number = 0;

    for (const t of this.tavoli) if (t.isRotondo) rotondi++;

    return rotondi;
  }
}
