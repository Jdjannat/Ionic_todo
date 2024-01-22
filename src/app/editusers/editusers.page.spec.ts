import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditusersPage } from './editusers.page';

describe('EditusersPage', () => {
  let component: EditusersPage;
  let fixture: ComponentFixture<EditusersPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EditusersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
