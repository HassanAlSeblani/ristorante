import { Component } from '@angular/core';
import { Tavolo } from '../model/tavolo';

@Component({
  selector: 'app-ristorante',
  templateUrl: './ristorante.component.html',
  styleUrls: ['./ristorante.component.css']
})
export class RistoranteComponent {

  tavoloList: Tavolo[] = [
    {
      id: 1,
      posti: 4,
      isRotondo: true,
      isRiservato: false
    },
    {
      id: 2,
      posti: 5,
      isRotondo: false,
      isRiservato: false
    }
  ];

  addTavolo(newT: Tavolo) {
    let isDoppio: boolean = false;

    for (const t of this.tavoloList)
      if (t.id === newT.id) {
        isDoppio = true;
        break;
    }

    if(!isDoppio)
      this.tavoloList.push(newT);
  }
}
