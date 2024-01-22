import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateformPage } from './createform.page';

describe('CreateformPage', () => {
  let component: CreateformPage;
  let fixture: ComponentFixture<CreateformPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CreateformPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
