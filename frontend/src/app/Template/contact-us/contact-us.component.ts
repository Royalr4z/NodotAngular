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
  boxSuccess: boolean = true;
  boxError: boolean = true;

  constructor(private http: HttpClient) {}

  Send(): void {
    const dados = {
      name: (<HTMLInputElement>document.querySelector('#typeUser')).value,
      email: (<HTMLInputElement>document.querySelector('#typeEmail')).value,
      subject: (<HTMLInputElement>document.querySelector('#typeSubject')).value,
      content: (<HTMLInputElement>document.querySelector('#typeContent')).value
    };

    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    this.http.post(`${BaseUrl}/message`, dados, options).subscribe(
      () => {
        this.boxError = true;
        this.boxSuccess = false;

        (<HTMLInputElement>document.querySelector('#typeUser')).value = '';
        (<HTMLInputElement>document.querySelector('#typeEmail')).value = '';
        (<HTMLInputElement>document.querySelector('#typeSubject')).value = '';
        (<HTMLInputElement>document.querySelector('#typeContent')).value = '';

        setTimeout(() => {
          window.location.href = '/contact';
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
