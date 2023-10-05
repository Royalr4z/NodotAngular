import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {

  constructor(private metaService: Meta, private titleService: Title) { }

  ngOnInit(): void {
    // Define o título da página
    this.titleService.setTitle('Serviços | NODOT');

    // Define as meta tags
    this.metaService.addTag({ name: 'description', content: 'Página em que Mostra os Serviços Disponíveis' });
    this.metaService.addTag({ name: 'keywords', content: 'Serviços, NODOT' });
  }
}
