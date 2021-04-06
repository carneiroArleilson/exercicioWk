import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structure',
  templateUrl: './structure.component.html',
  styleUrls: ['./structure.component.css'],
})
export class StructureComponent implements OnInit {
  top = ['id', 'nome', 'preço'];

  line = [{ id: 1, name: 'notebook', price: 2500 }];

  constructor() {}

  ngOnInit(): void {}
}
