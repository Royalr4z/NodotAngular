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

  sortTable(column: number, type: string, order: string, icon: any) {
    // Implement your sorting logic here
  }

  toggleSortIcon(icon: any) {
    // Implement your toggleSortIcon logic here
  }
}

