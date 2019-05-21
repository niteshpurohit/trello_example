import { List } from './data/list';
import { Component } from '@angular/core';
import { Card } from './data/card';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  list = [];
  title = 'Cards';
  constructor() {}
  newList() {
    const title = prompt('Enter new List Name');
    this.list.push(new List(title));
  }
}
