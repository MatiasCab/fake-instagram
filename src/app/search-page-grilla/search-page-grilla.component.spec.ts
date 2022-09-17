import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchPageGrillaComponent } from './search-page-grilla.component';

describe('SearchPageGrillaComponent', () => {
  let component: SearchPageGrillaComponent;
  let fixture: ComponentFixture<SearchPageGrillaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchPageGrillaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchPageGrillaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
