import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../../../models/pensamento';
import { PensamentoService } from 'src/app/services/pensamento.service';

@Component({
  selector: 'app-listar-pensamentos',
  templateUrl: './listar-pensamentos.component.html',
  styleUrls: ['./listar-pensamentos.component.css'],
})
export class ListarPensamentosComponent implements OnInit {
  listaPensamentos: Pensamento[] = [];
  paginaAtual = 1;
  haMaisPensamentos : boolean = true;
  filtro: string = '';
  
  constructor(private service: PensamentoService) {}

  ngOnInit(): void {
    this.service.listar(this.paginaAtual).subscribe((pensamentos) => {
      this.listaPensamentos = pensamentos;
    });
  }

  carregarMaisPensamentos(){
    this.service.listar(++this.paginaAtual).subscribe((pensamentos) => {
      this.listaPensamentos.push(...pensamentos);
      
      if(!pensamentos.length || pensamentos.length < 6){
        this.haMaisPensamentos = false;
      }
    });
  }

  filtrarPensamentos(){
    this.paginaAtual = 1;
    this.haMaisPensamentos = true;
    
    this.service.listar(this.paginaAtual, this.filtro).subscribe((pensamentos) => {
      this.listaPensamentos = pensamentos;
    });
  }
}
