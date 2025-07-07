import { Component } from '@angular/core';

@Component({
  selector: 'app-listar-pensamentos',
  standalone: false,
  templateUrl: './listar-pensamentos.component.html',
  styleUrl: './listar-pensamentos.component.css'
})
export class ListarPensamentosComponent {

  listaPensamentos = [
    {
      conteudo: 'I love Angular',
      autoria: 'Thays Costa',
      modelo: 'modelo1',
    },
    {
      conteudo: 'Angular é incrível!',
      autoria: 'João Silva',
      modelo: 'modelo2',
    },
    {
      conteudo: 'Aprender Angular é divertido!',
      autoria: 'Maria Oliveira',
      modelo: 'modelo3',
    },
    {
      conteudo: 'Angular facilita o desenvolvimento web.',
      autoria: 'Carlos Pereira',
      modelo: 'modelo4',
    }
  ];

}
