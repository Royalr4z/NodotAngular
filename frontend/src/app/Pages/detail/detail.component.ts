import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  constructor(private metaService: Meta, private titleService: Title) { }

  ngOnInit(): void {
    // Define o título da página
    this.titleService.setTitle('Blog | NODOT');

    // Define as meta tags
    this.metaService.addTag({ name: 'description', content: 'Página do Conteúdo do Blog' });
    this.metaService.addTag({ name: 'keywords', content: 'Blog, NODOT' });
  }
}