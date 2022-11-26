import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Observable} from "rxjs";
import {CorrectionAccount, ExerciseEntity} from "../entities/exam.entity";
import {ExamService} from "./exam.service";

@Injectable()
export class ExerciseService {
  private apiUrl = 'http://localhost:8080';
  public exercises = new BehaviorSubject<ExerciseEntity[]>([]);
  public selectedExerciseId = new BehaviorSubject<number | null>(null);

  constructor(public http: HttpClient, private examService: ExamService) {
    examService.selectedExamId.subscribe(() => this.selectedExerciseId.next(null))
  }

  loadExercises(): void {
    this.examService.selectedExamId.subscribe(examId => {
      if (examId) {
        this.loadExerciseByExam(examId);
      }
    })
  }

  loadExerciseByExam(examId: number): void {
    this.http.get<ExerciseEntity[]>(this.apiUrl + `/exams/${examId}/exercises`)
      .subscribe(resp => this.exercises.next(resp))
  }

  saveExercise(exercise: ExerciseEntity): void {
    this.examService.selectedExamId.subscribe(examId => {
      this.http.post<ExerciseEntity>(this.apiUrl + `/exams/${examId}/exercises`, exercise)
        .subscribe(() =>  {
          if (examId) this.loadExerciseByExam(examId)
        })
    })
  }

  correct(lines: CorrectionAccount[], examId: number, exerciseId: number): Observable<boolean> {
    return this.http.post<boolean>(this.apiUrl + `/exams/${examId}/exercises/${exerciseId}/correction`, lines)
      .pipe()
  }
}
