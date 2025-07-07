import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pensamento',
  standalone: false,
  templateUrl: './pensamento.component.html',
  styleUrl: './pensamento.component.css'
})
export class PensamentoComponent {

  @Input() pensamento = {
    conteudo: 'I love Angular',
    autoria: 'Thays Costa',
    modelo: 'modelo1',
  }

}
