export class Card {
  id: string;
  img: string;
  title: string;
  date: string;
  place: string;

  constructor(item: any) {
    this.id = item.id || '';
    this.img = item.img || '';
    this.title = item.title || '';
    this.date = item.date || '';
    this.place = item.place || '';
  }
}
