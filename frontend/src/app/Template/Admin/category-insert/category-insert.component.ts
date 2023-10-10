import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BaseUrl } from 'src/BaseUrl';

@Component({
  selector: 'app-category-insert',
  templateUrl: './category-insert.component.html',
  styleUrls: ['./category-insert.component.css']
})
export class CategoryInsertComponent {
  token: string | null = localStorage.getItem('token');
  id: string | null = null
  mode: string | null = null

  msgSuccess: string | null = null;
  msgError: any = {};
  boxSuccess: boolean = true;
  boxError: boolean = true;

  typeName: string = ''
  typeSubtitle: string = ''
  categories: any[] = [];

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.id = params['id'];
      this.mode = params['mode'];

      if (this.id && this.mode === 'edit') {
        this.http.get(`${BaseUrl}/category/${this.id}`)
          .subscribe((category: any) => {
            (<HTMLInputElement>document.querySelector('#typeName')).value = category.name;
            (<HTMLInputElement>document.querySelector('#typeSubtitle')).value = category.subtitle;
          });
      } else if (this.id && this.mode === 'delete') {
        this.http.get(`${BaseUrl}/category/${this.id}`)
          .subscribe((category: any) => {
            (<HTMLInputElement>document.querySelector('#typeName')).value = category.name;
            (<HTMLInputElement>document.querySelector('#typeSubtitle')).value = category.subtitle;

            (<HTMLInputElement>document.querySelector('#typeName')).setAttribute("disabled", '');
            (<HTMLInputElement>document.querySelector('#typeSubtitle')).setAttribute("disabled", '');
          });
      }
    });

    this.http.get(`${BaseUrl}/category`, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.token}`
      })
    }).subscribe((response: any) => {
      this.categories = response;
    }, (error: any) => {
      window.location.href = '/Error404';
    });
  }

  editar(): void {
    const dadosEditados = {
      id: this.id,
      name: (<HTMLInputElement>document.querySelector('#typeName')).value,
      subtitle: (<HTMLInputElement>document.querySelector('#typeSubtitle')).value
    };

    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.token}`
      })
    };

    this.boxError = true;
    this.boxSuccess = true;

    this.http.put(`${BaseUrl}/category/${this.id}`, dadosEditados, options)
      .subscribe((response: any) => {
        if (response === null) {
          this.boxError = true;
          this.boxSuccess = false;
          this.msgSuccess = 'Editado com Sucesso!';
          (<HTMLInputElement>document.querySelector('#typeName')).value = '';
          (<HTMLInputElement>document.querySelector('#typeSubtitle')).value = '';

          setTimeout(() => {
            window.location.href = '/category-creation';
          }, 1500);
        }
      }, (error: any) => {
        this.boxError = false;
        this.msgError = {
          msg: error.error,
          status: error.status
        };
      });
  }

  deletar(): void {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.token}`
      })
    };

    this.boxSuccess = true;
    this.boxError = true;

    this.http.delete(`${BaseUrl}/category/${this.id}`, options)
      .subscribe((response: any) => {
        if (response === null) {
          this.boxError = true;
          this.boxSuccess = false;
          this.msgSuccess = 'Deletado com Sucesso!';
          (<HTMLInputElement>document.querySelector('#typeName')).value = '';
          (<HTMLInputElement>document.querySelector('#typeSubtitle')).value = '';

          setTimeout(() => {
            window.location.href = '/category-creation';
          }, 1500);
        }
      }, (error: any) => {
        this.boxError = false;
        this.msgError = {
          msg: error.error,
          status: error.status
        };
      });
  }

  Send(): void {
    const dados = {
      name: (<HTMLInputElement>document.querySelector('#typeName')).value,
      subtitle: (<HTMLInputElement>document.querySelector('#typeSubtitle')).value
    };

    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.token}`
      })
    };

    this.boxSuccess = true;
    this.boxError = true;

    this.http.post(`${BaseUrl}/category`, dados, options)
      .subscribe((response: any) => {
        if (response === null) {
          this.boxError = true;
          this.boxSuccess = false;
          (<HTMLInputElement>document.querySelector('#typeName')).value = '';
          (<HTMLInputElement>document.querySelector('#typeSubtitle')).value = '';

          setTimeout(() => {
            window.location.href = '/category-creation';
          }, 1500);
        }
      }, (error: any) => {
        this.boxError = false;
        this.msgError = {
          msg: error.error,
          status: error.status
        };
      });
  }

  Cancel(): void {
    if (this.id && this.mode) {
      this.boxSuccess = true;
      this.boxError = true;
      (<HTMLInputElement>document.querySelector('#typeName')).value = '';
      (<HTMLInputElement>document.querySelector('#typeSubtitle')).value = '';
      window.location.href = '/category-creation';
    } else {
      this.boxSuccess = true;
      this.boxError = true;
      (<HTMLInputElement>document.querySelector('#typeName')).value = '';
      (<HTMLInputElement>document.querySelector('#typeSubtitle')).value = '';
    }
  }

  isAscending = true;
  sortTable(column: string) {
    if (column === 'id') {
      if (this.isAscending) {
        this.categories.sort((a, b) => a.id - b.id);
      } else {
        this.categories.sort((a, b) => b.id - a.id);
      }
      this.isAscending = !this.isAscending;
    }
  }
}
