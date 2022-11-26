import {Component} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ExerciseService} from "../../admin/services/exercise.service";
import {CorrectionAccount, ExerciseEntity} from "../../admin/entities/exam.entity";
import {ExamService} from "../../admin/services/exam.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-exam-container',
  templateUrl: './exam-container.component.html',
  styleUrls: ['./exam-container.component.scss']
})
export class ExamContainerComponent {
  exercises: ExerciseEntity[] = []
  currentExercise: ExerciseEntity | undefined
  index: number = -1
  lines: CorrectionAccount[] = [{date: new Date(), account: "0", credit: 0, debit: 0}]

  constructor(private route: ActivatedRoute,
              private _snackBar: MatSnackBar,
              private examService: ExamService,
              private exerciseService: ExerciseService) {
    const routeParams = this.route.snapshot.paramMap;
    const examId = Number(routeParams.get('exam_id'));
    if (examId != null) this.examService.selectedExamId.next(examId)
  }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const examId = Number(routeParams.get('exam_id'));
    this.exerciseService.loadExerciseByExam(examId);
    this.exerciseService.exercises.subscribe(e => {
      this.exercises = e
      if (this.exercises.length > 0) this.index = 0
      else this.index = -1
      if (this.index >= 0) this.currentExercise = this.exercises[this.index]
    })
  }

  forward(): void {
    console.log(this.lines)
    const examId = this.examService.selectedExamId.value;
    const exerciseId = this.currentExercise?.id;
    console.log(examId)
    console.log(exerciseId)
    if (examId && exerciseId) this.exerciseService.correct(this.lines, examId, exerciseId)
      .subscribe(isCorrect => {
        const message = isCorrect ? 'Bravo ! Réponse correcte, vous passer au question suivante'
          : 'Oops ! Réponse incorrecte';
        this._snackBar.open(message, 'Fermer')
        if (isCorrect) {
          if (this.index < this.exercises.length - 1) {
            this.index++
            this.currentExercise = this.exercises[this.index]
            this.lines = [{date: new Date(), account: "0", credit: 0, debit: 0}]
          }
        }
      });
  }

  backward(): void {
    if (this.index > 0) {
      this.index--
      this.currentExercise = this.exercises[this.index]
      this.lines = [{date: new Date(), account: "0", credit: 0, debit: 0}]
    }
  }
}
