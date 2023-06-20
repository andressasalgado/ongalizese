import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projeto-detail',
  templateUrl: './projeto-detail.component.html',
  styleUrls: ['./projeto-detail.component.css'],
  standalone: true,
  imports: [MatCardModule, MatButtonModule]
})
export class ProjetoDetailComponent {

  projeto =
    {
      nome: 'Projeto A',
      areaAtuacao: 'Educação',
      localizacao: 'Porto Alegre',
      modalidade: 'Presencial',
      descricao: 'Projeto social em porto alegre voltado para a acessibilidade digital de idosos',
      tipoProjeto: 'Projetos educacionais',
      doacao: 'Materiais escolares',
      recorrencia: 'Recorrente',
      tipoOrganizacao: 'Iniciativas independentes lideradas pela comunidade',
      impactoSocial: 'Acesso à educação',
      instagram: 'n/a',
      site: 'n/a',
    }
  

  constructor(private router: Router) {}

  redirectToNovoEvento(): void {
    this.router.navigate(['/novo-evento']);
  }
}
