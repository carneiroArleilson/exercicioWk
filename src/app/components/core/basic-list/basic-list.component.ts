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

  @Output() newItemEvent = new EventEmitter<Array<Row>>();

  addNewItem() {
    const analise = this.rows.filter(function(row){
      return row.selected;
    });
    this.newItemEvent.emit(analise);
  }


  constructor() { }

  ngOnInit(): void {
  }

  //pesquisar sobre filter, array js.
  //criar metodo e objeto para emitir os itens selecionados para o componente pai

}
