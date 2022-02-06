import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Card } from '../../models/card';
import { CardDialogComponent } from './card-dialog/card-dialog.component';
import { CardService } from '../../services/card.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() card: Card = new Card({});

  constructor(private _cardService: CardService, public _dialog: MatDialog) {}

  ngOnInit(): void {}

  openCardDialog(card: Card) {
    this._cardService.setSelectedCard(card);
    this._dialog.open(CardDialogComponent);
  }
}
