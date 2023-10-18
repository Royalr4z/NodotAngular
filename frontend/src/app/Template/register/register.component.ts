import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BaseUrl } from 'src/BaseUrl'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  msgError: any = {};
  boxSuccess: boolean = false;
  boxError: boolean = false;

  constructor(private http: HttpClient) {}

  registerData() {
    const dados = {
      name: (<HTMLInputElement>document.getElementById('typeName')).value,
      email: (<HTMLInputElement>document.getElementById('typeEmail')).value,
      password: (<HTMLInputElement>document.getElementById('typePassword')).value,
      confirmPassword: (<HTMLInputElement>document.getElementById('typeConfirmPassword')).value
    };

    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    this.http.post(`${BaseUrl}/signup`, dados, options)
      .subscribe(
        (response: any) => {
          if (response === null || response.status === 204) {
            this.boxError = false;
            this.boxSuccess = true;

            (<HTMLInputElement>document.getElementById('typeName')).value = '';
            (<HTMLInputElement>document.getElementById('typeEmail')).value = '';
            (<HTMLInputElement>document.getElementById('typePassword')).value = '';
            (<HTMLInputElement>document.getElementById('typeConfirmPassword')).value = '';

            setTimeout(() => {
              window.location.href = './signin';
            }, 2000);
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
