import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PasswordEditPage } from './password-edit.page';

describe('PasswordEditPage', () => {
  let component: PasswordEditPage;
  let fixture: ComponentFixture<PasswordEditPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PasswordEditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
