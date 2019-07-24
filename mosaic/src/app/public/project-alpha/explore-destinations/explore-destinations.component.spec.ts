import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploreDestinationsComponent } from './explore-destinations.component';

describe('ExploreDestinationsComponent', () => {
  let component: ExploreDestinationsComponent;
  let fixture: ComponentFixture<ExploreDestinationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExploreDestinationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExploreDestinationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
