import { Component } from '@angular/core';

@Component({
  selector: 'app-projeto-list',
  templateUrl: './projeto-list.component.html',
  styleUrls: ['./projeto-list.component.css']
})
export class ProjetoListComponent {
  projetos: any[] = [
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
    },
    {
      nome: 'Projeto B',
      areaAtuacao: 'Saúde',
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
    },
    {
      nome: 'Projeto C',
      areaAtuacao: 'Meio ambiente',
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
  ];

  filtroAreaAtuacao: string = '';
  filtroLocalizacao: string = '';

  areasAtuacao: string[] = ['Educação', 'Saúde', 'Meio Ambiente'];
  localizacoes: string[] = ['São Paulo', 'Rio de Janeiro', 'Belo Horizonte'];

  constructor() {}

  // Restante do código do componente
}
