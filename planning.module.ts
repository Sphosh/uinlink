import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { PlanningComponent } from './Planning.component';
import { PlanningRoutingModule } from './PlanningRouting.module';
import { APSComponent } from './components/APS/APS/APS.component';
import { MatchComponent } from './components/Match/Match/Match.component';
import { ResultsComponent } from './components/Results/Results/Results.component';
import {FormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    MDBBootstrapModule.forRoot(),
    PlanningRoutingModule,
    FormsModule
  ],
  declarations: [PlanningComponent,APSComponent,MatchComponent,ResultsComponent]
})
export class PlanningModule { }
