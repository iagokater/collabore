import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProfilePicturePage } from './profile-picture.page';

describe('ProfilePicturePage', () => {
  let component: ProfilePicturePage;
  let fixture: ComponentFixture<ProfilePicturePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ProfilePicturePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
