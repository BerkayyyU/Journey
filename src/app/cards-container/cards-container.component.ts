import { Observable } from 'rxjs';
import { Component } from '@angular/core';
import { CardService } from '../services/card.service';
import { Card } from '../models/card';

@Component({
  selector: 'app-cards-container',
  templateUrl: './cards-container.component.html',
  styleUrls: ['./cards-container.component.scss'],
})
export class CardsContainerComponent {
  cards$: Observable<Card[]>;
  constructor(private _cardService: CardService) {
    this.cards$ = this._cardService.cards$;
  }
}
