import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseUrl } from 'src/BaseUrl'

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.css']
})
export class UsersTableComponent implements OnInit {
  users: any[] = [];
  error: boolean = true;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    const token = localStorage.getItem('token');
    this.http.get<any[]>(`${BaseUrl}/users`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `bearer ${token}`
      }
    }).subscribe(
      (response) => {
        this.error = true;
        this.users = response;
      },
      (error) => {
        this.error = false;
      }
    );
  }

  isAscending = true;
  sortTable(column: string) {
    if (column === 'id') {
      if (this.isAscending) {
        this.users.sort((a, b) => a.id - b.id);
      } else {
        this.users.sort((a, b) => b.id - a.id);
      }
      this.isAscending = !this.isAscending;
    }
  }
}

