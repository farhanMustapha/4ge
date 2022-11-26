import { Pipe, PipeTransform } from '@angular/core';
import {CorrectionAccount} from "../../admin/entities/exam.entity";

@Pipe({
  name: 'debitSum',
  pure: false
})
export class DebitSumPipe implements PipeTransform {

  transform(accounts: CorrectionAccount[]): number {
    if (accounts) {
      return accounts.map(acc => +acc.debit)
        .reduce((acc, value: number) => acc + value, 0)
    }
    return 0;
  }

}
