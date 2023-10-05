import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoTaskComponent } from './auto-task.component';

describe('AutoTaskComponent', () => {
  let component: AutoTaskComponent;
  let fixture: ComponentFixture<AutoTaskComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AutoTaskComponent]
    });
    fixture = TestBed.createComponent(AutoTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
