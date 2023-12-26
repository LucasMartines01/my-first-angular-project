import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../../../models/pensamento';
import { PensamentoService } from 'src/app/services/pensamento.service';

@Component({
  selector: 'app-listar-pensamentos',
  templateUrl: './listar-pensamentos.component.html',
  styleUrls: ['./listar-pensamentos.component.css']
})
export class ListarPensamentosComponent implements OnInit {
  listaPensamentos : Pensamento[] = [
  ]
  constructor(private service: PensamentoService) { }

  ngOnInit(): void {
    this.service.listar().subscribe((pensamentos) => {
      this.listaPensamentos = pensamentos;
    })
  }

}
