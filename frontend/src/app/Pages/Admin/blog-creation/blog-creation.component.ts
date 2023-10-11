import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-blog-creation',
  templateUrl: './blog-creation.component.html',
  styleUrls: ['./blog-creation.component.css']
})
export class BlogCreationComponent implements OnInit {

  constructor(private metaService: Meta, private titleService: Title) { }

  ngOnInit(): void {
    // Define o título da página
    this.titleService.setTitle('Criação do Blog | NODOT');

    // Define as meta tags
    this.metaService.addTag({ name: 'description', content: 'Página de Criação do blog' });
    this.metaService.addTag({ name: 'keywords', content: 'Criação do Blog, NODOT' });
  }
}