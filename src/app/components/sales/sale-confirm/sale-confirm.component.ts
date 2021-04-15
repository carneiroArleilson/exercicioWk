import { Row } from './../../core/interface/row.interface';
import { Component, OnInit } from '@angular/core';
import { ProductOrderService } from '../../core/service/product-order.service';

@Component({
  selector: 'app-sale-confirm',
  templateUrl: './sale-confirm.component.html',
  styleUrls: ['./sale-confirm.component.css'],
})
export class SaleConfirmComponent implements OnInit {
  row: Row =
    {
      id: 0,
      selected: false,
    }
  ;
  product: Row[]=[
    {
      id: 0,
      name: '',
      price: 0,
      selected: true
    }
  ];
  total = 0;
  order: Row[] = [];

  column = ['id', 'nome', 'preço', 'action'];
  constructor(private productOrderService: ProductOrderService) {}

  ngOnInit(): void {
    this.productOrderService.castOrder.subscribe((order) => {
      // this.rows = order.products;
      // this.total = order.total;
      this.row = order as Row;
      this.product = order.products as Row[];
      this.total = Number(order.total);
      console.log(order);
      console.log(this.product);
    });
  }

  addItem(newOrder: Row[]) {
    this.total = 0;
    this.order = newOrder;
    newOrder.map(order => {this.total += order.price || 0})
  }

}
