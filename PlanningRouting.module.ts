import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PlanningComponent } from './Planning.component';
import { APSComponent } from './components/APS/APS/APS.component';
import { MatchComponent } from './components/Match/Match/Match.component';
import { ResultsComponent } from './components/Results/Results/Results.component';



const routes: Routes=[

  {
    path:'',component:PlanningComponent , children:[
      {path:'aps',component:APSComponent},
      {path:'match',component:MatchComponent},
      {path:'results', component:ResultsComponent},
      {path:'', redirectTo: 'match', pathMatch: 'full'}//default
    ] //route with child routes

  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
  })
export class PlanningRoutingModule { }