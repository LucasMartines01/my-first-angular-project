import { Component, Input, OnInit } from '@angular/core';
import { Pensamento } from '../../../models/pensamento';
import { PensamentoService } from 'src/app/services/pensamento.service';

@Component({
  selector: 'app-pensamento',
  templateUrl: './pensamento.component.html',
  styleUrls: ['./pensamento.component.css']
})
export class PensamentoComponent implements OnInit {
  @Input() pensamento : Pensamento = {
    id: 0,
    conteudo: 'I love Angular',
    autoria: 'Nay',
    modelo: 'modelo3',
    favorito: false,
  }

  @Input() listaFavoritos: Pensamento[] = [];

  constructor(private service: PensamentoService) { }

  ngOnInit(): void {
  }

  larguraPensamento(): string {
    if(this.pensamento.conteudo.length >= 256) {
      return 'pensamento-g'
    }
    return 'pensamento-p'
  }

  mudarIconeFavorito(): string {
    if(this.pensamento.favorito) {
      return 'ativo'
    }
    return 'inativo'
  }

  atualizarFavorito(){
    this.service.mudarFavorito(this.pensamento).subscribe(pensamento => {
      this.pensamento = pensamento;
      this.listaFavoritos.splice(this.listaFavoritos.indexOf(pensamento), 1)
    })
  }
}
