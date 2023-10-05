import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebDevelopmentComponent } from './web-development.component';

describe('WebDevelopmentComponent', () => {
  let component: WebDevelopmentComponent;
  let fixture: ComponentFixture<WebDevelopmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WebDevelopmentComponent]
    });
    fixture = TestBed.createComponent(WebDevelopmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
