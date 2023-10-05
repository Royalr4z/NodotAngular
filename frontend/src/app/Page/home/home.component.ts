import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private metaService: Meta, private titleService: Title) { }

  ngOnInit(): void {
    // Define o título da página
    this.titleService.setTitle('NODOT');

    // Define as meta tags
    this.metaService.addTag({ name: 'description', content: 'Página Inicial' });
    this.metaService.addTag({ name: 'keywords', content: 'Index, NODOT' });
  }
}
