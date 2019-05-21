import { Card } from './card';
export class List {
  title: string;
  cards: Card[];
  constructor(title) {
    this.title = title;
    this.cards = new Array<Card>();
  }
}
