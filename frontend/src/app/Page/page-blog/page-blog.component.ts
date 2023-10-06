import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page-blog',
  templateUrl: './page-blog.component.html',
  styleUrls: ['./page-blog.component.css']
})
export class PageBlogComponent implements OnInit {

    category: string = 'Blog Recente';
    constructor(private route: ActivatedRoute, private metaService: Meta, private titleService: Title) { }

    ngOnInit(): void {
      // Define o título da página
      this.titleService.setTitle('Blog Recente | NODOT');

      // Define as meta tags
      this.metaService.addTag({ name: 'description', content: 'Página Inicial do Blog' });
      this.metaService.addTag({ name: 'keywords', content: 'Blog Recente, NODOT' });

      this.category = this.route.snapshot.queryParamMap.get('category') || this.category;
    }

    title: string = this.category || 'Blog Recente'
}
