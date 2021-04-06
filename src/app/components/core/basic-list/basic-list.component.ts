import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic-list',
  templateUrl: './basic-list.component.html',
  styleUrls: ['./basic-list.component.css']
})
export class BasicListComponent implements OnInit {

  //to do: trocar nome de top por colunms: ok
  colunms = ['id', 'nome', 'preço', 'ação'];

  //to do: trocar nome de line por rows: ok
  rows = [
    { id: 1, name: 'notebook', price: 2500, selected: true },
    { id: 1, name: 'notebook', price: 2500, selected: false },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
