import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PasswordForgetPage } from './password-forget.page';

describe('PasswordForgetPage', () => {
  let component: PasswordForgetPage;
  let fixture: ComponentFixture<PasswordForgetPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PasswordForgetPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
