import {Component, Input, OnChanges} from '@angular/core';
import {Observable, ReplaySubject} from "rxjs";
import {DataSource} from "@angular/cdk/collections";
import {CorrectionAccount} from "../../entities/exam.entity";

@Component({
  selector: 'app-question-lines',
  templateUrl: './account-lines.component.html',
  styleUrls: ['./account-lines.component.scss']
})
export class AccountLinesComponent implements OnChanges{
  @Input()
  public correctionAccounts: CorrectionAccount[] = []
  displayedColumns: string[] = ['date', 'account', 'credit', 'debit', 'actions'];
  dataSource = new LineDataSource(this.correctionAccounts);

  ngOnChanges() {
    this.dataSource.setData(this.correctionAccounts)
  }

  addLine(): void {
    this.correctionAccounts.push({date: new Date(), account: "0", credit: 0, debit: 0})
    this.dataSource.setData(this.correctionAccounts)
  }

  removeLine(index: number): void {
    this.correctionAccounts.splice(index, 1);
    this.dataSource.setData(this.correctionAccounts)
  }
}

class LineDataSource extends DataSource<CorrectionAccount> {
  private _dataStream = new ReplaySubject<CorrectionAccount[]>();

  constructor(initialData: CorrectionAccount[]) {
    super();
    this.setData(initialData);
  }

  connect(): Observable<CorrectionAccount[]> {
    return this._dataStream;
  }

  disconnect() {}

  setData(data: CorrectionAccount[]) {
    this._dataStream.next(data);
  }
}
