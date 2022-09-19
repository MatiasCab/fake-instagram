import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchPageSbarComponent } from './search-page-sbar.component';

describe('SearchPageSbarComponent', () => {
  let component: SearchPageSbarComponent;
  let fixture: ComponentFixture<SearchPageSbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchPageSbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchPageSbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
