import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnploadPageComponent } from './unpload-page.component';

describe('UnploadPageComponent', () => {
  let component: UnploadPageComponent;
  let fixture: ComponentFixture<UnploadPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnploadPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnploadPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
