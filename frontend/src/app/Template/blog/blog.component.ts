import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BaseUrl } from 'src/BaseUrl';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  itensPerPage = 6;
  counter = 1;
  blogs: any[] = [];
  loading = true;
  categoryUrl: string | null = null;
  paginationUrl: string | null = null;
  posts: any[] = [];
  categories: any[] = [];

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit(): void {
    this.route.queryParamMap.subscribe((params: ParamMap) => {
      this.categoryUrl = params.get('category');
      this.paginationUrl = params.get('pg');

      const paginationValue = parseInt(this.paginationUrl || '0', 10); 
      
      if (this.categoryUrl && paginationValue <= 0 && this.paginationUrl !== null) {
        window.location.href = `/blog?pg=1&category=${this.categoryUrl}`;
      } 
      
      if (!this.categoryUrl && paginationValue <= 0 && this.paginationUrl !== null) {
        window.location.href = `/blog?pg=1`;
      }

      if (!this.paginationUrl) {
        this.load();
      } else {
        this.load(Number(this.paginationUrl));
      }
    });

    this.http.get(`${BaseUrl}/blogs/orderby`)
      .subscribe((response: any) => {
        this.posts = response.blog.map((post: any) => {
          if (!post.imageUrl) {
            post.imageUrl = '../../../assets/img/blog-2.jpg';
          }
          return post;
        });
      }, (error) => {
        console.error('Error 500');
      });

    this.http.get(`${BaseUrl}/category`)
      .subscribe((response: any) => {
        this.categories = response;
      }, (error) => {
        console.error(error);
      });
  }

  load(pagination = 1): void {
    let url = '';

    if (!this.categoryUrl) {
      url = `${BaseUrl}/blogs?page=${pagination <= 0 ? 1 : pagination}&limit=${this.itensPerPage}`;
    } else {
      url = `${BaseUrl}/Blogs/category?page=${pagination <= 0 ? 1 : pagination}&limit=${this.itensPerPage}&category=${this.categoryUrl}`;
    }

    this.loading = true;

    this.http.get(url)
      .subscribe((response: any) => {
        const totalPages = response.pagination.totalPages;

        if (totalPages !== 0) {
          if (pagination > totalPages) {
            window.location.href = `./blog?pg=${totalPages}`;
          }
        } else {
          this.loading = true;
        }

        const blogData = response.blog.map((blog: any) => {
          if (!blog.imageUrl) {
            blog.imageUrl = '../../../assets/img/blog-2.jpg';
          }
          this.loading = false;
          return blog;
        });

        this.blogs = blogData;
      }, (error) => {
        console.error('Error 500');
      });
  }

  next(): void {
    if (this.paginationUrl !== null) {
      let currentPage = Number(this.paginationUrl);
      currentPage++;
      window.location.href = `/blog?pg=${currentPage}`;
    } else {
      window.location.href = `/blog?pg=2`;
    }
  }

  previous(): void {
    if (this.paginationUrl === null || Number(this.paginationUrl) < 1) {
      return;
    }

    let currentPage = Number(this.paginationUrl);
    currentPage--;
    window.location.href = `/blog?pg=${currentPage}`;
  }

  nextFilter(): void {
    if (this.paginationUrl !== null) {
      let currentPage = Number(this.paginationUrl);
      currentPage++;
      window.location.href = `/blog?pg=${currentPage}&category=${this.categoryUrl}`;
    } else {
      window.location.href = `/blog?pg=2&category=${this.categoryUrl}`;
    }
  }

  previousFilter(): void {
    if (this.paginationUrl === null || Number(this.paginationUrl) < 1) {
      return;
    }

    let currentPage = Number(this.paginationUrl);
    currentPage--;
    window.location.href = `/blog?pg=${currentPage}&category=${this.categoryUrl}`;
  }
}