import { Component, OnInit }  from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseUrl } from '../../../BaseUrl';

@Component({
  selector: 'app-indexblog',
  templateUrl: './indexblog.component.html',
  styleUrls: ['./indexblog.component.css']
})
export class IndexblogComponent {
  blogs: any[] = [];
  loading: boolean = true;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get(`${BaseUrl}/blogs/orderby`)
      .subscribe(
        (response: any) => {
          this.blogs = response.blog;
          if (this.blogs.length === 0){
            this.loading = false;
          } else {
            this.loading = true;
          }
        },
        (error) => {
          this.loading = false;
        }
      );
  }
}
