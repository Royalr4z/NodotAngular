import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private metaService: Meta, private titleService: Title) { }

  ngOnInit(): void {
    // Define o título da página
    this.titleService.setTitle('Faça seu Login | NODOT');

    // Define as meta tags
    this.metaService.addTag({ name: 'description', content: 'Página de Login' });
    this.metaService.addTag({ name: 'keywords', content: 'Faça seu Login, NODOT' });
  }
}
