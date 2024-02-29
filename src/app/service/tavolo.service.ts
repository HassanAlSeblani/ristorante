import { Injectable } from '@angular/core';
import { Tavolo } from '../model/tavolo';

@Injectable({
  providedIn: 'root',
})
export class TavoloService {
  tavoloList: Tavolo[] = [
    {
      id: 1,
      posti: 4,
      isRotondo: true,
      isRiservato: true,
    },
    {
      id: 2,
      posti: 5,
      isRotondo: false,
      isRiservato: false,
    },
  ];

  newTavolo(posti: number, isRotondo: boolean) {
    const newTavolo: Tavolo = {
      id: this.tavoloList.length + 1,
      posti: posti,
      isRotondo: isRotondo,
      isRiservato: false,
    };

    this.tavoloList.push(newTavolo);
  }

  toggleRiservato(id: number): boolean {
    let tavolo = this.tavoloList.find((x) => x.id === id);

    if (tavolo) {
      tavolo.isRiservato = !tavolo.isRiservato;
      return true;
    } else return false;
  }

  delete(id: number) {
    let index = this.tavoloList.findIndex((x) => x.id === id);
    if (index > -1 && !this.tavoloList[index].isRiservato)
      this.tavoloList.splice(index, 1);
  }
}
