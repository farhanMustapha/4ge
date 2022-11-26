import {Component} from '@angular/core';
import {ExerciseEntity} from "../entities/exam.entity";
import {ExerciseService} from "../services/exercise.service";

@Component({
  selector: 'app-question-list',
  templateUrl: './exercise-list.component.html',
  styleUrls: ['./exercise-list.component.scss']
})
export class ExerciseListComponent {
  exercises: ExerciseEntity[] = []
  selectedExerciseId: number | null = null

  constructor(private exerciseService: ExerciseService) {
    this.exerciseService.exercises.subscribe(exs => this.exercises = exs)
    this.exerciseService.selectedExerciseId.subscribe(id => this.selectedExerciseId = id)
  }

  selectExercise(exerciseId?: number): void {
    if(exerciseId) {
      this.exerciseService.selectedExerciseId.next(exerciseId)
    }
  }
  addExercise(): void {
    this.exerciseService.selectedExerciseId.next(null)
  }
}
