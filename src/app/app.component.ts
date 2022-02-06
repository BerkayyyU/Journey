import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { Card } from './models/card';
import { CardDialogComponent } from './cards-container/card/card-dialog/card-dialog.component';
import { CardService } from './services/card.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'journey';

  cards$: Observable<Card[]>;
  constructor(private _cardService: CardService, public _dialog: MatDialog) {
    this.cards$ = this._cardService.cards$;
  }

  openCardDialog(card: Card) {
    this._cardService.setSelectedCard(card);
    this._dialog.open(CardDialogComponent);
  }
}
