import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogInsertComponent } from './blog-insert.component';

describe('BlogInsertComponent', () => {
  let component: BlogInsertComponent;
  let fixture: ComponentFixture<BlogInsertComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlogInsertComponent]
    });
    fixture = TestBed.createComponent(BlogInsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
