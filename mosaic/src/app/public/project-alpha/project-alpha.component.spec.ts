import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectAlphaComponent } from './project-alpha.component';
import { MaterialModule } from 'src/app/material/material.module';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';

describe('ProjectAlphaComponent', () => {
  let component: ProjectAlphaComponent;
  let fixture: ComponentFixture<ProjectAlphaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ MaterialModule, RouterTestingModule ],
      declarations: [ ProjectAlphaComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectAlphaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
