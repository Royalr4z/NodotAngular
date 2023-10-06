import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BaseUrl } from 'src/BaseUrl';

@Component({
  selector: 'app-blog-content',
  templateUrl: './blog-content.component.html',
  styleUrls: ['./blog-content.component.css']
})
export class BlogContentComponent implements OnInit {
  id: any;
  blogData: any = {};
  posts: any[] = [];
  categories: any[] = [];

  constructor(private route: ActivatedRoute, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.id = params['id'];
      this.loadBlogData();
      this.loadRecentPosts();
      this.loadCategories();
    });
  }

  loadBlogData(): void {
    this.http.get(`${BaseUrl}/blogs/${this.id}`)
      .subscribe((response: any) => {
        const blogs = response;

        if (!blogs.title || !blogs.imageUrl || !blogs.content || !blogs.userName) {
          this.router.navigate(['/blog']);
        }
        const titleBlog = document.getElementById('title-blog');
        if (titleBlog) {
          titleBlog.classList.remove('text-danger');
        }
        this.blogData = blogs;
      }, (error) => {
        this.router.navigate(['/blog']);
      });
  }

  loadRecentPosts(): void {
    this.http.get(`${BaseUrl}/blogs/orderby`)
      .subscribe((response: any) => {
        
        this.posts = response.map((post: any) => {
          if (!post.imageUrl) {
            post.imageUrl = '../../../assets/img/blog-2.jpg';
          }
          return post;
        });
      }, (error) => {
        console.log(error);
      });
  }

  loadCategories(): void {
    this.http.get(`${BaseUrl}/category`)
      .subscribe((response: any) => {
        this.categories = response;
      }, (error) => {
        console.log(error);
      });
  }
}
