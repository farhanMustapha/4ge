import {Component} from '@angular/core';
import {ExamService} from "../services/exam.service";
import {ExerciseService} from "../services/exercise.service";

@Component({
  selector: 'app-question-container',
  templateUrl: './exercise-container.component.html',
  styleUrls: ['./exercise-container.component.scss']
})
export class ExerciseContainerComponent {

  constructor(private examService: ExamService, private exerciseService: ExerciseService) {
    this.exerciseService.loadExercises()
  }
}
