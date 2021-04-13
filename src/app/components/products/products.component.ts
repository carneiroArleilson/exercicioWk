import { Component, OnInit } from '@angular/core';
import { Row } from '../core/interface/row.interface';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  column = ["id", "nome", "preço", "ação"];

  product: Row[] = [
    {id : 1,
    name : 'notebook',
    price : 2500,
    selected : false
  }];

  order: Row[] = [];

  addItem(newOrder: Row[]) {
    this.order = (newOrder);
    console.log(this.order);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
