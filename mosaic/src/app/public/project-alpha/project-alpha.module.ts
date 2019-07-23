import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule} from '@angular/common/http';

import { ProjectAlphaRoutingModule } from './project-alpha-routing.module';
import { CandidateProfileComponent } from './candidate-profile/candidate-profile.component';
import { CostModelComponent } from './cost-model/cost-model.component';
import { AuthorizedMoveComponent } from './authorized-move/authorized-move.component';
import { ProjectAlphaComponent } from './project-alpha.component';
import { CandidateDetailsComponent} from './candidate-profile/candidate-details/candidate-details.component';
import { AddCandidateComponent} from './candidate-profile/add-candidate/add-candidate.component';
import { CandidateColumnsComponent } from './candidate-profile/candidate-columns/candidate-columns.component';
import { MoveColumnsComponent } from './authorized-move/move-columns/move-columns.component';
import { ModelColumnsComponent } from './cost-model/model-columns/model-columns.component';
import { SettingsComponent} from './settings/settings.component';
import { LoginComponent} from './login/login.component';
import { ResendInviteComponent } from './candidate-profile/resend-invite/resend-invite.component';
import { HighlightSearchPipe } from './highlight-search.pipe';
import {MatCardModule} from '@angular/material/card';
import { MaterialModule } from '../../material/material.module';
import { MatExpansionModule } from '@angular/material/expansion';

import {
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatIconModule,
  MatDialogModule,
  MatTableModule,
  MatPaginatorModule,
  MatAutocompleteModule,
  MatTabsModule,
  MatCheckboxModule,
  MatSortModule,
  MatTooltipModule,
  MatSelectModule,
  MatGridListModule
} from '@angular/material';
import { AddCostModelComponent } from './cost-model/add-cost-model/add-cost-model.component';
import { TransfereeDetailsComponent } from './authorized-move/transferee-details/transferee-details.component';
import { TransfereeAssessmentComponent } from './candidate-profile/transferee-assessment/transferee-assessment.component';
import { ExploreDestinationsComponent } from './explore-destinations/explore-destinations.component';
import { ServicesComponent } from './services/services.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    CandidateProfileComponent,
    CostModelComponent,
    AuthorizedMoveComponent,
    CandidateDetailsComponent,
    ProjectAlphaComponent,
    AddCandidateComponent,
    CandidateColumnsComponent,
    SettingsComponent,
    LoginComponent,
    ResendInviteComponent,
    HighlightSearchPipe,
    MoveColumnsComponent,
    ModelColumnsComponent,
    AddCostModelComponent,
    TransfereeDetailsComponent,
    TransfereeAssessmentComponent,
    ExploreDestinationsComponent,
    ServicesComponent,
    DashboardComponent
  ],
  imports: [
  CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatSortModule,
    MatTooltipModule,
    MatTableModule,
    MatPaginatorModule,
    MatTabsModule,
    FlexLayoutModule,
    MatButtonModule,
    MatDialogModule,
    MatSelectModule,
    MatAutocompleteModule,
    MatCardModule,
    MatGridListModule,
    ProjectAlphaRoutingModule,
    MaterialModule,
    MatExpansionModule
  ],
  bootstrap: [
    AddCandidateComponent,
    CandidateColumnsComponent,
    MoveColumnsComponent,
    ModelColumnsComponent,
    SettingsComponent,
    ResendInviteComponent,
    AddCostModelComponent,
    TransfereeDetailsComponent,
    TransfereeAssessmentComponent
  ]
})
export class ProjectAlphaModule { }
