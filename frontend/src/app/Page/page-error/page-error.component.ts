import { Component, OnInit, Input } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

const status = 404

@Component({
  selector: 'app-page-error',
  templateUrl: './page-error.component.html',
  styleUrls: ['./page-error.component.css']
})
export class PageErrorComponent implements OnInit {
  @Input() status: number = status;

  constructor(private metaService: Meta, private titleService: Title) { }

  ngOnInit(): void {
    // Define o título da página
    this.titleService.setTitle(`Error ${status} | NODOT`);

    // Define as meta tags
    this.metaService.addTag({ name: 'description', content: 'Página de Error' });
    this.metaService.addTag({ name: 'keywords', content: `Error ${status}, NODOT` });
  }
}
