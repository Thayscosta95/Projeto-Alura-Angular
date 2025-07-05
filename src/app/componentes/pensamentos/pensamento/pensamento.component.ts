import { Component } from '@angular/core';

@Component({
  selector: 'app-pensamento',
  standalone: false,
  templateUrl: './pensamento.component.html',
  styleUrl: './pensamento.component.css'
})
export class PensamentoComponent {

  pensamento = {
    conteudo: 'I love Angular',
    autoria: 'Thays Costa',
    modelo: 'modelo1',
  }

}
