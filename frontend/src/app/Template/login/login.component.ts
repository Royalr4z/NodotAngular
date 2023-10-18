import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BaseUrl } from 'src/BaseUrl'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  msgError: any = {};
  boxSuccess: boolean = false;
  boxError: boolean = false;

  constructor(private http: HttpClient) { }

  connectUser(): void {
    const dados = {
      email: (<HTMLInputElement>document.querySelector('#typeEmail')).value,
      password: (<HTMLInputElement>document.querySelector('#typePassword')).value,
    };

    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    this.http.post(`${BaseUrl}/signin`, dados, options)
    .subscribe(
      (response: any) => {
        if (response.admin) {
          this.boxError = false;
          this.boxSuccess = true;

          (<HTMLInputElement>document.querySelector('#typeEmail')).value = '';
          (<HTMLInputElement>document.querySelector('#typePassword')).value = '';

          setTimeout(() => {
            localStorage.setItem("admin", response.admin);
            localStorage.setItem("email", response.email);
            localStorage.setItem("exp", response.exp);
            localStorage.setItem("iat", response.iat);
            localStorage.setItem("id", response.id);
            localStorage.setItem("name", response.name);
            localStorage.setItem("token", response.token);
            window.location.href = '/blog-creation';
          }, 1500);
        }
      },
      (err: any) => {
        this.boxError = true;

        this.msgError = (err.statusText === "Unknown Error")
        ? { msg: "Error 500", status: 500 }
        : { msg: err.error, status: 400 };
      }
    );
  }
}
