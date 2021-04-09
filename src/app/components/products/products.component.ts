import { Component, OnInit } from '@angular/core';
import { Row } from '../core/interface/row.interface';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  column = ["id", "nome", "preço", "ação"];

  product: Row []= [
    {id : 1,
    name : 'notebook',
    price : 2500,
    selected : false
  }];

  orders: Array<Row> = [];

  addItem(newItem: Array<Row>) {
    this.orders.push(newItem);
  }

  //criar um metodo e um objeto para receber os itens selecionados do basic-line(outpot)
  constructor() { }

  ngOnInit(): void {
  }

}
