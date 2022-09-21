import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilePhotoGridComponent } from './profile-photo-grid.component';

describe('ProfilePhotoGridComponent', () => {
  let component: ProfilePhotoGridComponent;
  let fixture: ComponentFixture<ProfilePhotoGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfilePhotoGridComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfilePhotoGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
