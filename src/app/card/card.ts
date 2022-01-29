export class Card {
  img: string;
  title: string;

  constructor(item: any) {
    this.img = item.img || '';
    this.title = item.title || '';
  }
}
