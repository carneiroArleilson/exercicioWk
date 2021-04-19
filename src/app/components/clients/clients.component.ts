import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  column = ["id", "nome", "cpf", "email", "aniversário", "telefone", "alteração"]

  constructor() { }

  ngOnInit(): void {
  }

}
