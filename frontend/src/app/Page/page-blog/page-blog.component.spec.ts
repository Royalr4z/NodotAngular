import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageBlogComponent } from './page-blog.component';

describe('PageBlogComponent', () => {
  let component: PageBlogComponent;
  let fixture: ComponentFixture<PageBlogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageBlogComponent]
    });
    fixture = TestBed.createComponent(PageBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
