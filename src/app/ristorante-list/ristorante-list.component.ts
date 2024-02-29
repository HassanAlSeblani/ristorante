import { Component, Input } from '@angular/core';
import { Tavolo } from '../model/tavolo';

@Component({
  selector: 'app-ristorante-list',
  templateUrl: './ristorante-list.component.html',
  styleUrls: ['./ristorante-list.component.css']
})
export class RistoranteListComponent {
  @Input() tavoli : Tavolo[] = [];
}
