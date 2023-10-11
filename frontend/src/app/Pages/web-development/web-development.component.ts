import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-web-development',
  templateUrl: './web-development.component.html',
  styleUrls: ['./web-development.component.css']
})
export class WebDevelopmentComponent implements OnInit {

  constructor(private metaService: Meta, private titleService: Title) { }

  ngOnInit(): void {
    // Define o título da página
    this.titleService.setTitle('Desenvolvimento web | NODOT');

    // Define as meta tags
    this.metaService.addTag({ name: 'description', content: 'Página em que Descreve o Serviço de Desenvolvimento web' });
    this.metaService.addTag({ name: 'keywords', content: 'Desenvolvimento web, NODOT' });
  }
}
