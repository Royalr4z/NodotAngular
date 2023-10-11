import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private metaService: Meta, private titleService: Title) { }

  ngOnInit(): void {
    // Define o título da página
    this.titleService.setTitle('Faça seu Cadastro | NODOT');

    // Define as meta tags
    this.metaService.addTag({ name: 'description', content: 'Página de Cadastro' });
    this.metaService.addTag({ name: 'keywords', content: 'Faça seu Cadastro, NODOT' });
  }
}
