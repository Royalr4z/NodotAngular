import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfrastructureComponent } from './infrastructure.component';

describe('InfrastructureComponent', () => {
  let component: InfrastructureComponent;
  let fixture: ComponentFixture<InfrastructureComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InfrastructureComponent]
    });
    fixture = TestBed.createComponent(InfrastructureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
