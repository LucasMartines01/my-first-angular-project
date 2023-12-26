import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../../../models/pensamento';

@Component({
  selector: 'app-listar-pensamentos',
  templateUrl: './listar-pensamentos.component.html',
  styleUrls: ['./listar-pensamentos.component.css']
})
export class ListarPensamentosComponent implements OnInit {
  listaPensamentos : Pensamento[] = [
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
