import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarUploadbuttonComponent } from './navbar-uploadbutton.component';

describe('NavbarUploadbuttonComponent', () => {
  let component: NavbarUploadbuttonComponent;
  let fixture: ComponentFixture<NavbarUploadbuttonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarUploadbuttonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarUploadbuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
