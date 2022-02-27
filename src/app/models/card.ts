export class Card {
  img: string;
  title: string;
  date: string;
  place: string;

  constructor(item: any) {
    this.img = item.img || '';
    this.title = item.title || '';
    this.date = item.date || '';
    this.place = item.place || '';
  }
}
