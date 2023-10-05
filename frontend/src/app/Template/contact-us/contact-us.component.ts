import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BaseUrl } from '../../../BaseUrl'

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {
  msgError: any = {};
  boxSuccess = true;
  boxError = true;

  constructor(private http: HttpClient) {}

  Send(): void {
    const dados = {
      name: (document.querySelector('#typeUser') as HTMLInputElement).value,
      email: (document.querySelector('#typeEmail') as HTMLInputElement).value,
      subject: (document.querySelector('#typeSubject') as HTMLInputElement).value,
      content: (document.querySelector('#typeContent') as HTMLInputElement).value
    };

    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    this.http.post(`${BaseUrl}/api/message`, dados, options).subscribe(
      () => {
        this.boxError = true;
        this.boxSuccess = false;

        (document.querySelector('#typeUser') as HTMLInputElement).value = '';
        (document.querySelector('#typeEmail') as HTMLInputElement).value = '';
        (document.querySelector('#typeSubject') as HTMLInputElement).value = '';
        (document.querySelector('#typeContent') as HTMLInputElement).value = '';

        setTimeout(() => {
          window.location.href = './contact';
        }, 2000);
      },
      (error) => {
        this.boxError = false;

        this.msgError = {
          msg: error.error,
          status: 400
        };
      }
    );
  }
}
