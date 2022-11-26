import { Component, OnInit } from '@angular/core';
import {ExamService} from "../../admin/services/exam.service";
import {ExamEntity} from "../../admin/entities/exam.entity";

@Component({
  selector: 'app-exams-cards',
  templateUrl: './exams-cards.component.html',
  styleUrls: ['./exams-cards.component.scss']
})
export class ExamsCardsComponent implements OnInit {
  exams: ExamEntity[] = []

  constructor(private examService: ExamService) { }

  ngOnInit(): void {
    this.examService.loadExams();
    this.examService.exams.subscribe(e => this.exams = e)
  }

}
