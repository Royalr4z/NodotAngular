import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexblogComponent } from './indexblog.component';

describe('IndexblogComponent', () => {
  let component: IndexblogComponent;
  let fixture: ComponentFixture<IndexblogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IndexblogComponent]
    });
    fixture = TestBed.createComponent(IndexblogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
