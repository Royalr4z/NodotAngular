import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-page-users-table',
  templateUrl: './page-users-table.component.html',
  styleUrls: ['./page-users-table.component.css']
})
export class PageUsersTableComponent implements OnInit {

  constructor(private metaService: Meta, private titleService: Title) { }

  ngOnInit(): void {
    // Define o título da página
    this.titleService.setTitle('Tabela de Usuários | NODOT');

    // Define as meta tags
    this.metaService.addTag({ name: 'description', content: 'Página de Tabela de Usuários' });
    this.metaService.addTag({ name: 'keywords', content: 'Tabela de Usuários, NODOT' });
  }
}