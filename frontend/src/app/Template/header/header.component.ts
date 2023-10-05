import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Input() title: string = 'Error 404';
  @Input() caption: string = 'Contato';
  @Input() href: string = 'contact';
}
