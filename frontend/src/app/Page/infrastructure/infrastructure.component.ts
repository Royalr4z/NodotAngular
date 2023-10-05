import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-infrastructure',
  templateUrl: './infrastructure.component.html',
  styleUrls: ['./infrastructure.component.css']
})
export class InfrastructureComponent implements OnInit {

  constructor(private metaService: Meta, private titleService: Title) { }

  ngOnInit(): void {
    // Define o título da página
    this.titleService.setTitle('Infraestrutura | NODOT');

    // Define as meta tags
    this.metaService.addTag({ name: 'description', content: 'Página em que Descreve o Serviço de Infraestrutura' });
    this.metaService.addTag({ name: 'keywords', content: 'Infraestrutura, NODOT' });
  }
}