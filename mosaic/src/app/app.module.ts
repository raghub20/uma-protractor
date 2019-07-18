import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatSidenavModule,
  MatExpansionModule,
  MatMenuModule,
  MatIconModule,
  MatCheckboxModule,
  MatDialogModule,
  MatAutocompleteModule,
  MatSelectModule
} from '@angular/material';

import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { UserContextComponent } from './public/components/user-context/user-context.component';
import { NavListComponent } from './public/components/nav-list/nav-list.component';
import { ProjectAlphaModule } from './public/project-alpha/project-alpha.module';
import { ExternRouteComponent } from './public/components/extern-route/extern-route.component';
import { HighlightSearchPipe } from './public/project-alpha/highlight-search.pipe';

@NgModule({
  declarations: [
    AppComponent,
    UserContextComponent,
    NavListComponent,
    ExternRouteComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatInputModule,
    MatMenuModule,
    MatButtonModule,
    MatSidenavModule,
    MatExpansionModule,
    MatIconModule,
    ProjectAlphaModule,
    MatCheckboxModule,
    MatDialogModule,
    MatSelectModule,
    MatAutocompleteModule,
    AppRoutingModule // I must be last!! https://angular.io/guide/router#module-import-order-matters
  ],
  providers: [
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    },
  HighlightSearchPipe
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
