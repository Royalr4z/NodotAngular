import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page-blog',
  templateUrl: './page-blog.component.html',
  styleUrls: ['./page-blog.component.css']
})
export class PageBlogComponent {
    category: string = 'Blog Recente';
    constructor(private route: ActivatedRoute) { }

    ngOnInit(): void {
      this.category = this.route.snapshot.queryParamMap.get('category') || this.category;
    }

    title: string = this.category || 'Blog Recente'
}
