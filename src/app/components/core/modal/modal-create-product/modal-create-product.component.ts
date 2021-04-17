import { Component, OnInit, Input } from '@angular/core';
import { Row } from '../../interface/row.interface';

@Component({
  selector: 'app-modal-create-product',
  templateUrl: './modal-create-product.component.html',
  styleUrls: ['./modal-create-product.component.css']
})
export class ModalCreateProductComponent implements OnInit {

   product: Row = {
    id: 0,
    name: '',
    price: 0,
    selected: false
  };
  rows: Row[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  incluirProduto(){
    const sortedRows = this.rows.sort((a, b) => b.id - a.id);
    const newID = sortedRows[0].id + 1;

    const name = this.product.name || '';
    const price = this.product.price || 0;
    const newProduct = {
      name,
      price,
      id: newID,
      selected: false
    };

    this.rows.push(newProduct);

  }

}
