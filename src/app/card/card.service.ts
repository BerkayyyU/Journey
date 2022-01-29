import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Card } from './card';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CardService {
  private _cards = new BehaviorSubject<Card[]>([]);
  cards$: Observable<Card[]>;

  constructor(private http: HttpClient) {
    this.cards$ = this._cards.asObservable();
    this.mapJSON();
  }

  get cards() {
    return this._cards.getValue();
  }

  private set cards(val: Card[]) {
    this._cards.next(val);
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
}
