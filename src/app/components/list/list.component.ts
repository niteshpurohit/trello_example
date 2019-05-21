import { List } from './../../data/list';
import { Card } from './../../data/card';
import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from 'events';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @Input() list_item: List;
  @Output() cardAdded = new EventEmitter();
  constructor() {}

  ngOnInit() {}

  newCard() {
    const cardTitle = prompt('Title of card?');
    const card = new Card(cardTitle);
    this.list_item.cards.push(card);
    this.cardAdded.emit('Card Added');
  }
  drop(event: CdkDragDrop<Card[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
    }
  }
}
