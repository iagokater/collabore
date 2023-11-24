import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TokenVericationPage } from './token-verication.page';

describe('TokenVericationPage', () => {
  let component: TokenVericationPage;
  let fixture: ComponentFixture<TokenVericationPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TokenVericationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
