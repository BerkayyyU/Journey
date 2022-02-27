import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Card } from '../models/card';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CardService {
  private _cards = new BehaviorSubject<Card[]>([]);
  cards$: Observable<Card[]>;

  private _selectedCard = new BehaviorSubject<Card>(new Card({}));
  selectedCard$: Observable<Card>;

  constructor(private http: HttpClient) {
    this.cards$ = this._cards.asObservable();
    this.selectedCard$ = this._selectedCard.asObservable();
    this.mapJSON();
  }

  get cards() {
    return this._cards.getValue();
  }

  private set cards(val: Card[]) {
    this._cards.next(val);
  }

  get selectedCard() {
    return this._selectedCard.getValue();
  }

  private set selectedCard(val: Card) {
    this._selectedCard.next(val);
  }

  private async getJSON() {
    return this.http.get('assets/data/data.json');
  }

  async mapJSON() {
    try {
      const data = await this.getJSON();
      data.subscribe((card: any) => {
        this.cards = card;
      });
    } catch (error) {
      console.log(error);
    }
  }

  setSelectedCard(card: Card) {
    this.selectedCard = card;
  }

  changeSelectedCard(direction: number) {
    const index = this.cards.indexOf(this.selectedCard);

    if (index === 0 && direction === -1) {
      this.selectedCard = this.cards[this.cards.length - 1];
      return;
    }

    if (index === this.cards.length - 1 && direction === 1) {
      this.selectedCard = this.cards[0];
      return;
    }

    this.selectedCard = this.cards[index + direction];
  }
}
