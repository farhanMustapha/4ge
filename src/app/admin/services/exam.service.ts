import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject} from "rxjs";
import {ExamEntity} from "../entities/exam.entity";

@Injectable()
export class ExamService {
  private apiUrl = 'http://localhost:8080';
  public exams = new BehaviorSubject<ExamEntity[]>([]);
  public selectedExamId = new BehaviorSubject<number | null>(null);

  constructor(public http: HttpClient) {}

  loadExams(): void {
    this.http.get<ExamEntity[]>(this.apiUrl + '/exams')
      .subscribe(resp => this.exams.next(resp))
  }

  saveExam(exam: ExamEntity): void {
    this.http.post<ExamEntity>(this.apiUrl + '/exams', exam)
      .subscribe(resp => {
        this.exams.next([... this.exams.value, resp])
      })
  }
}
