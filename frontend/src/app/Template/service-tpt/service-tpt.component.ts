import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-service-tpt',
  templateUrl: './service-tpt.component.html',
  styleUrls: ['./service-tpt.component.css']
})
export class ServiceTptComponent {
  @Input() theme: string = 'light';
}
