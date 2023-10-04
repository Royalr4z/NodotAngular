import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceTptComponent } from './service-tpt.component';

describe('ServiceTptComponent', () => {
  let component: ServiceTptComponent;
  let fixture: ComponentFixture<ServiceTptComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServiceTptComponent]
    });
    fixture = TestBed.createComponent(ServiceTptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
