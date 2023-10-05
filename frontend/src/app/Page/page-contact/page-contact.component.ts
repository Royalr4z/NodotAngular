import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-page-contact',
  templateUrl: './page-contact.component.html',
  styleUrls: ['./page-contact.component.css']
})
export class PageContactComponent implements OnInit {

  constructor(private metaService: Meta, private titleService: Title) { }

  ngOnInit(): void {
    // Define o título da página
    this.titleService.setTitle('Entre em Contato | NODOT');

    // Define as meta tags
    this.metaService.addTag({ name: 'description', content: 'Página para entrar em contato conosco' });
    this.metaService.addTag({ name: 'keywords', content: 'Entre em Contato, NODOT' });
  }
}
