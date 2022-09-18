import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoUserDiscoverComponent } from './info-user-discover.component';

describe('InfoUserDiscoverComponent', () => {
  let component: InfoUserDiscoverComponent;
  let fixture: ComponentFixture<InfoUserDiscoverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoUserDiscoverComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoUserDiscoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
