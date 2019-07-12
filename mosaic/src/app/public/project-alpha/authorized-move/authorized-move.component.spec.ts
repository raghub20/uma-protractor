import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorizedMoveComponent } from './authorized-move.component';
import { MaterialModule } from 'src/app/material/material.module';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { HighlightSearchPipe } from '../highlight-search.pipe';

describe('AuthorizedMoveComponent', () => {
  let component: AuthorizedMoveComponent;
  let fixture: ComponentFixture<AuthorizedMoveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ MaterialModule ],
      declarations: [ AuthorizedMoveComponent, HighlightSearchPipe ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorizedMoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  /*
  it('should create', () => {
    expect(component).toBeTruthy();
  });
  */
});
