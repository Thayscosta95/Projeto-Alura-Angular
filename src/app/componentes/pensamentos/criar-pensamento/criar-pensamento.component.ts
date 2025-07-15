import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PensamentoService } from '../pensamento.service';
import { Pensamento } from '../pensamento';


@Component({
  selector: 'app-criar-pensamento',
  standalone: false,
  templateUrl: './criar-pensamento.component.html',
  styleUrl: './criar-pensamento.component.css'
})
export class CriarPensamentoComponent implements OnInit {

  pensamento: Pensamento = {
    id: '',
    conteudo: '',
    autoria: '',
    modelo: ''
  }

  tentouSalvar: boolean = false;

  constructor(
    private service: PensamentoService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  criarPensamento() {

    this.tentouSalvar = true;
    if(!this.pensamento.conteudo || !this.pensamento.autoria || !this.pensamento.modelo) {
      return;
    }

    this.service.criar(this.pensamento).subscribe(() => {
      this.router.navigate(['/listar-pensamentos'])
    })
  }

  cancelar() {
    this.router.navigate(['/listar-pensamentos'])
  }

}
