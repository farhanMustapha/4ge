import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ExamsCardsComponent} from "./exams-cards/exams-cards.component";
import {RouterModule, Routes} from "@angular/router";
import {MaterialModule} from "../material/material.module";
import { ExamContainerComponent } from './exam-container/exam-container.component';
import {SharedModule} from "../shared/shared.module";

const routes: Routes = [
  {path: '', redirectTo: 'exam', pathMatch: 'full'},
  {path: 'exam', component: ExamsCardsComponent},
  {path: 'exam/:exam_id', component: ExamContainerComponent},
]

@NgModule({
  declarations: [
    ExamsCardsComponent,
    ExamContainerComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    MaterialModule,
    RouterModule.forChild(routes),
  ]
})
export class UserExamModule { }
