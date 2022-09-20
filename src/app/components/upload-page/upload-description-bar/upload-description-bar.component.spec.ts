import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadDescriptionBarComponent } from './upload-description-bar.component';

describe('UploadDescriptionBarComponent', () => {
  let component: UploadDescriptionBarComponent;
  let fixture: ComponentFixture<UploadDescriptionBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadDescriptionBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UploadDescriptionBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
