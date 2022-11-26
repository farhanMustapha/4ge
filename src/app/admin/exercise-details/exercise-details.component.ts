import {Component} from '@angular/core';
import {ExerciseService} from "../services/exercise.service";
import {ExerciseEntity, JOURNALS} from "../entities/exam.entity";

@Component({
  selector: 'app-question-details',
  templateUrl: './exercise-details.component.html',
  styleUrls: ['./exercise-details.component.scss']
})
export class ExerciseDetailsComponent {
  public journals: string[] = JOURNALS
  public exercise: ExerciseEntity = {
    question: "",
    number: 0,
    correction: {
      journal: "",
      accounts: []
    }
  }

  constructor(private exerciseService: ExerciseService) {
    this.exerciseService.selectedExerciseId.subscribe(id => {
        const currentExercise = this.exerciseService.exercises.value.find(e => e.id === id);
        if (currentExercise) {
          this.exercise = currentExercise;
        }
        else {
          this.exercise = {
            number: 0,
            question: "",
            correction: {
              journal: JOURNALS[0],
              accounts: []
            }
          }
        }
      }
    )
  }

  saveExercise(): void {
    this.exerciseService.saveExercise(this.exercise)
  }
}
