import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-auto-task',
  templateUrl: './auto-task.component.html',
  styleUrls: ['./auto-task.component.css']
})
export class AutoTaskComponent implements OnInit {

  constructor(private metaService: Meta, private titleService: Title) { }

  ngOnInit(): void {
    // Define o título da página
    this.titleService.setTitle('Automação | NODOT');

    // Define as meta tags
    this.metaService.addTag({ name: 'description', content: 'Página em que Descreve o Serviço de Automação de Tarefas' });
    this.metaService.addTag({ name: 'keywords', content: 'Automação, NODOT' });
  }
}