import { element } from 'protractor';
import { Component, Output, Input, OnInit, EventEmitter } from '@angular/core';
import { Row } from '../interface/row.interface';

@Component({
  selector: 'app-basic-list',
  templateUrl: './basic-list.component.html',
  styleUrls: ['./basic-list.component.css']
})
export class BasicListComponent implements OnInit {

  @Input() colunms : string[] = [];
  @Input() rows : Row[] = [];

  @Output() newOrderEvent = new EventEmitter<Row[]>();


  // criar novo metodo ex.: changeRow -
  //alterar o selected de linha selecionada,
  //de true pra false e de false pra true
  //e depois emitir as linhas

    emitRows() {
    //trocar a declaração de function pra arrow function

    // const selectedRows = this.rows.filter(function(row){
    //   return row.selected;
    // });
    const selectedRows = this.rows.filter((row) =>{
      return row.selected;
    });
    this.newOrderEvent.emit(selectedRows);
  }

  reverse(id: number){
    this.rows.map((element) => {
      if(element.id == id){
        element.selected = !element.selected;
      }
    })

    this.emitRows();
  }

  constructor() { }

  ngOnInit(): void {
  }


}
