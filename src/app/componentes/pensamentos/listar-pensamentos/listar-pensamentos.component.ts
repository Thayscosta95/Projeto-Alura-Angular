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
        conteudo: 'Entre estrelas distantes e pensamentos profundos, nasce um instante qualquer, repleto de ideias dispersas. Gatos invisíveis pulam entre parágrafos, enquanto o café esfria sem ser notado. No fundo, a beleza está nas imperfeições que dançam ao redor das certezas inventadas pela imaginação..',
        autoria: 'Carlos Pereira',
        modelo: 'modelo3',
     }
  ];

}
