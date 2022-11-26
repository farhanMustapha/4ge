import {Component} from '@angular/core';
import {ExamService} from "../services/exam.service";
import {ExamEntity} from "../entities/exam.entity";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-exam-list',
  templateUrl: './exam-list.component.html',
  styleUrls: ['./exam-list.component.scss']
})
export class ExamListComponent {
  isOnAddingNew: boolean = false;
  exams: ExamEntity[] = []
  selectedExamId: number | null = null

  constructor(private examService: ExamService,
              private router: Router,
              private route: ActivatedRoute) {
    examService.exams.subscribe(value => this.exams = value)
    examService.selectedExamId.subscribe(value => this.selectedExamId = value)
    examService.loadExams()
    const routeParams = this.route.snapshot.paramMap;
    const examId = Number(routeParams.get('exam_id'));
    if(examId != null) this.selectExam(examId)
  }

  saveExam(name: string): void{
    this.examService.saveExam({name})
    this.isOnAddingNew = false;
  }

  selectExam(examId?: number): void {
    if(examId) {
      this.examService.selectedExamId.next(examId)
      this.router.navigate([`/admin/exams`, examId]).then()
    }
  }
}
