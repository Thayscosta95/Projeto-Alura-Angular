import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PensamentoService } from '../pensamento.service';
import { Pensamento } from '../pensamento';
import { Router } from '@angular/router';

@Component({
  selector: 'app-excluir-pensamento',
  standalone: false,
  templateUrl: './excluir-pensamento.component.html',
  styleUrl: './excluir-pensamento.component.css'
})
export class ExcluirPensamentoComponent {

  pensamento: Pensamento = {
    id: '',
    conteudo: '',
    autoria: '',
    modelo: ''
  }

  constructor(
    private route: ActivatedRoute,
    private service: PensamentoService,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
      this.service.buscarPorId(id!).subscribe((pensamento) => {
      this.pensamento = pensamento;
      });
    }

  excluirPensamento(): void {
    if(this.pensamento.id){
      this.service.excluir(this.pensamento.id).subscribe(() => {
        this.router.navigate(['/listar-pensamentos']);
      })
    }
  }

  cancelar(){
    this.router.navigate(['/listar-pensamentos']);
  }

}
