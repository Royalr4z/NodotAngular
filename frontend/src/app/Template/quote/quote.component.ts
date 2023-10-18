import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseUrl } from 'src/BaseUrl'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent {
  msgError: any = {};
  boxSuccess: boolean = true;
  boxError: boolean = true;

  constructor(private http: HttpClient) {}

  registerData(): void {
    const typeName = (<HTMLInputElement>document.querySelector('#typeName')).value;
    const typeEmail = (<HTMLInputElement>document.querySelector('#typeEmail')).value;
    const typeService = (<HTMLSelectElement>document.querySelector('#typeService')).value;
    const typeMessage = (<HTMLTextAreaElement>document.querySelector('#typeMessage')).value;

    const dados = {
      name: typeName,
      email: typeEmail,
      service: typeService,
      message: typeMessage
    };

    const options = {
      headers: {
        'Content-Type': 'application/json'
      }
    };

    this.boxError = true;
    this.boxSuccess = true;

    this.http.post<any>(`${BaseUrl}/FreeQuote`, dados, options)
      .subscribe(
        (response) => {
          if (response === null || response.status === 204) {
            this.boxError = true;
            this.boxSuccess = false;

            (<HTMLInputElement>document.querySelector('#typeName')).value = '';
            (<HTMLInputElement>document.querySelector('#typeEmail')).value = '';
            (<HTMLSelectElement>document.querySelector('#typeService')).value = '';
            (<HTMLTextAreaElement>document.querySelector('#typeMessage')).value = '';
          }
        },
        (err) => {
          this.boxError = false;

          this.msgError = (err.statusText === "Unknown Error")
          ? { msg: "Error 500", status: 500 }
          : { msg: err.error, status: 400 };
        }
      );
  }
}