import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { Card } from './card/card';
import { CardDialogComponent } from './card/card-dialog/card-dialog.component';
import { CardService } from './card/card.service';

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
    this._dialog.open(CardDialogComponent);
  }
}
