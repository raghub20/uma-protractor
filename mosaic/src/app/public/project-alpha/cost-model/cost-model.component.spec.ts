import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CostModelComponent } from './cost-model.component';
import { MaterialModule } from 'src/app/material/material.module';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { Pipe, PipeTransform } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { HighlightSearchPipe } from '../highlight-search.pipe';

describe('CostModelComponent', () => {
  let component: CostModelComponent;
  let fixture: ComponentFixture<CostModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ MaterialModule],
      declarations: [ CostModelComponent, HighlightSearchPipe ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ],
      providers: [
        { provide: MatDialogRef, useValue: [] },
        { provide: MAT_DIALOG_DATA, useValue: [] } ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CostModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  /*
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  */
});
