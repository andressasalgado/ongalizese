import { Component } from '@angular/core';
import { EventoDetailComponent } from '../evento-detail/evento-detail.component';

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.css']
})
export class CalendarioComponent {
  eventos = [
    {
      nome: 'Evento 1',
      localizacao: 'Porto Alegre',
      modalidade: 'Presencial',
      data: new Date('2023-06-10'),
      descricao: 'Arrecadação de materiais escolares',
      recorrencia: 'Único',
    }
  ]
}
