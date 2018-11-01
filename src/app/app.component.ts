import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'meu-projeto';
  itemApp = 'Maça';
  itens: number[] = [3, 4];
  sorted = 5;

  constructor() {
    setTimeout(() => {
      this.itemApp = 'Banana';
    }, 1000)
  }

  onDeleteItem(item: number) {
    this.itens.splice(item, 1)
  }

  sorting() {
    this.sorted = Math.floor(Math.random()*(10))
  }
}
