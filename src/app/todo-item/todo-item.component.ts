import { Component, OnInit, Input, EventEmitter, Output, OnChanges, SimpleChanges, OnDestroy } from '@angular/core';
import { isNgTemplate } from '@angular/compiler';
import { assertPreviousIsParent } from '@angular/core/src/render3/instructions';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit, OnChanges, OnDestroy {
  counter = 0;
  title: string = 'Fazer compras';
 
  @Input() avisar: number;
  @Input() mostrarContador;
  @Input() indice: number;
  @Input() item: number;
  @Input() mostrarContrador: boolean;

  @Output() deleteItem = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {

    setInterval(() => {
      this.counter++;
    }, 1000);
  }

  ngOnChanges(changes: SimpleChanges):void {
    console.log(changes);
    if (changes.indice) {
      console.log('O índice do item ' + this.item + ' era ' + changes.indice.previousValue + ' e agora é ' + 
      changes.indice.currentValue)
    }
  }

  ngOnDestroy() {
    console.log('O item ' + this.item + ' saiu da tela.');
  }

  onButtonClick() {
    this.title = 'Valor Mudado';
  }

  onLogButtonClick(numero) {
    console.log(numero);
  }

  onDelete(i : number) {
    this.deleteItem.emit(i);
  }
}

