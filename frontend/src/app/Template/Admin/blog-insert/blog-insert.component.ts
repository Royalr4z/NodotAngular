import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BaseUrl } from 'src/BaseUrl'

@Component({
  selector: 'app-blog-insert',
  templateUrl: './blog-insert.component.html',
  styleUrls: ['./blog-insert.component.css']
})
export class BlogInsertComponent implements OnInit {
  token: string | null;
  msgError: any = {};
  boxSuccess: boolean = true;
  boxError: boolean = true;
  users: any[] = [];
  category: any[] = [];

  constructor(private http: HttpClient) {
    this.token = localStorage.getItem('token');
  }

  ngOnInit(): void {
    this.fetchUsers();
    this.fetchCategories();
  }

  fetchUsers() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `bearer ${this.token}`
    });

    this.http.get(`${BaseUrl}/users`, { headers })
      .subscribe((data: any) => {
        this.users = data;
      }, error => {
        console.log('Error 500');
      });
  }

  fetchCategories() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `bearer ${this.token}`
    });

    this.http.get(`${BaseUrl}/category`, { headers })
      .subscribe((data: any) => {
        this.category = data;
      }, error => {
        console.log('Error 500');
      });
  }

  Send() {
    const dataAtual = new Date();
    const dia = dataAtual.getDate();
    let mes = (dataAtual.getMonth() + 1).toString();
    const ano = dataAtual.getFullYear();

    if (mes === '1'){mes = 'Jan'} if (mes === '2'){mes = 'Fer'} 
    if (mes === '3'){mes = 'Mar'} if (mes === '4'){mes = 'Abr'} if (mes === '5'){mes = 'Maio' }
    if (mes === '6'){mes = 'Jun'} if (mes === '7'){mes = 'Jul'} 
    if (mes === '8'){mes = 'Ago'} if (mes === '9'){mes = 'Set'} if (mes === '10'){mes = 'Out' }
    if (mes === '11'){mes = 'Nov'}if (mes === '12'){mes = 'Dez'}  

    const dataFormatada = `${dia}/${mes}/${ano}`;

    const dados = {
      date: dataFormatada,
      title: (<HTMLInputElement>document.querySelector('#typeTitle')).value,
      subtitle: (<HTMLInputElement>document.querySelector('#typeSubtitle')).value,
      imageUrl: (<HTMLInputElement>document.querySelector('#typeImageUrl')).value,
      content: (<HTMLInputElement>document.querySelector('#typeContent')).value,
      userId: (<HTMLSelectElement>document.querySelector('#typeUser')).value,
      categoryId: (<HTMLSelectElement>document.querySelector('#typeCategory')).value,
    };

    this.boxSuccess = true;
    this.boxError = true;

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `bearer ${this.token}`
    });

    this.http.post(`${BaseUrl}/blogs`, dados, { headers })
      .subscribe(response => {
        if (response === null) {
          this.boxError = true;
          this.boxSuccess = false;

          (<HTMLSelectElement>document.querySelector('#typeUser')).value = '';
          (<HTMLInputElement>document.querySelector('#typeTitle')).value = '';
          (<HTMLInputElement>document.querySelector('#typeSubtitle')).value = '';
          (<HTMLInputElement>document.querySelector('#typeImageUrl')).value = '';
          (<HTMLInputElement>document.querySelector('#typeContent')).value = '';
          (<HTMLSelectElement>document.querySelector('#typeCategory')).value = '';
        }
      }, error => {
        this.boxError = false;
        this.msgError = {
          msg: error.error,
          status: error.status
        };
      });
  }

  Cancel() {
    this.boxSuccess = true;
    this.boxError = true;

    (<HTMLSelectElement>document.querySelector('#typeUser')).value = '';
    (<HTMLInputElement>document.querySelector('#typeTitle')).value = '';
    (<HTMLInputElement>document.querySelector('#typeSubtitle')).value = '';
    (<HTMLInputElement>document.querySelector('#typeImageUrl')).value = '';
    (<HTMLInputElement>document.querySelector('#typeContent')).value = '';
    (<HTMLSelectElement>document.querySelector('#typeCategory')).value = '';
  }
}
