import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageUsersTableComponent } from './page-users-table.component';

describe('PageUsersTableComponent', () => {
  let component: PageUsersTableComponent;
  let fixture: ComponentFixture<PageUsersTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageUsersTableComponent]
    });
    fixture = TestBed.createComponent(PageUsersTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
