export class Card {
  id: string;
  img: string;
  title: string;

  constructor(item: any) {
    this.id = item.id || '';
    this.img = item.img || '';
    this.title = item.title || '';
  }
}
