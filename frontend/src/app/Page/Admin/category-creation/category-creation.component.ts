import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-category-creation',
  templateUrl: './category-creation.component.html',
  styleUrls: ['./category-creation.component.css']
})
export class CategoryCreationComponent implements OnInit {

  constructor(private metaService: Meta, private titleService: Title) { }

  ngOnInit(): void {
    // Define o título da página
    this.titleService.setTitle('Criação de Categorias | NODOT');

    // Define as meta tags
    this.metaService.addTag({ name: 'description', content: 'Página de Criação de Categorias' });
    this.metaService.addTag({ name: 'keywords', content: 'Criação de Categorias, NODOT' });
  }
}