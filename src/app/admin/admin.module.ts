import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ExerciseContainerComponent} from './exercise-container/exercise-container.component';
import {ExerciseListComponent} from './exercise-list/exercise-list.component';
import {ExerciseDetailsComponent} from './exercise-details/exercise-details.component';
import {RouterModule, Routes} from "@angular/router";
import {MaterialModule} from "../material/material.module";
import {FormsModule} from "@angular/forms";
import {ExamContainerComponent} from './exam-container/exam-container.component';
import {ExamListComponent} from './exam-list/exam-list.component';
import {SharedModule} from "../shared/shared.module";

const routes: Routes = [
  {path: '', redirectTo: '/admin/exams', pathMatch: 'full'},
  {path: 'exams', component: ExamContainerComponent},
  {path: 'exams/:exam_id', component: ExamContainerComponent},
  {path: 'exams/:exam_id/exercises/:exercise_id', component: ExamContainerComponent},
]

@NgModule({
  declarations: [
    ExerciseContainerComponent,
    ExerciseListComponent,
    ExerciseDetailsComponent,
    ExamContainerComponent,
    ExamListComponent,
  ],
  imports: [
    SharedModule,
    CommonModule,
    FormsModule,
    MaterialModule,
    RouterModule.forChild(routes)
  ]
})
export class AdminModule { }
