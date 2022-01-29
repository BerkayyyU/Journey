import { Component, OnInit } from '@angular/core';
import { Card } from '../card';
import { Observable } from 'rxjs';
import { CardService } from '../card.service';
@Component({
  selector: 'app-card-dialog',
  templateUrl: './card-dialog.component.html',
  styleUrls: ['./card-dialog.component.scss'],
})
export class CardDialogComponent implements OnInit {
  selectedCard$: Observable<Card>;

  constructor(private _cardService: CardService) {
    this.selectedCard$ = this._cardService.selectedCard$;
  }

  ngOnInit(): void {}

  changeSelectedCard(direction: number) {
    debugger;
    this._cardService.changeSelectedCard(direction);
  }
}
