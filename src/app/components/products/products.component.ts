import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  },{id : 2,
    name : 'monitor',
    price : 550,
    selected : false
  },{id : 3,
    name : 'teclado',
    price : 250,
    selected : false
  },{id : 4,
    name : 'gabinete',
    price : 300,
    selected : false
  },{id : 5,
    name : 'processador',
    price : 1700,
    selected : false
  }
];

  order: Row[] = [];
  total = 0;

  addItem(newOrder: Row[]) {
    this.total = 0;
    this.order = newOrder;
    newOrder.map(order => {this.total += order.price || 0})
  }
  confirm(){
    this.router.navigate(['saleConfirm'])
  }

  constructor(
    private router: Router
  ) {}

  ngOnInit(): void {
  }

}
