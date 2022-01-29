import { Component } from '@angular/core';
import { CardService } from './card/card.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'journey';

  constructor(private _cardService: CardService) {}
}
