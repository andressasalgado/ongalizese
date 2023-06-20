import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-evento-detail',
  templateUrl: './evento-detail.component.html',
  styleUrls: ['./evento-detail.component.css'],
  standalone: true,
  imports: [MatCardModule, MatButtonModule]
})
export class EventoDetailComponent {
  projeto =
    {
      nome: 'Evento 1',
      localizacao: 'Porto Alegre',
      modalidade: 'Presencial',
      data: '20/06/2023',
      descricao: 'Arrecadação de materiais escolares',
      recorrencia: 'Único',
    }
}
