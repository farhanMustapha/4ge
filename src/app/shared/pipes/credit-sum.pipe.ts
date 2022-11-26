import { Pipe, PipeTransform } from '@angular/core';
import {CorrectionAccount} from "../../admin/entities/exam.entity";

@Pipe({
  name: 'creditSum',
  pure: false
})
export class CreditSumPipe implements PipeTransform {

  transform(accounts: CorrectionAccount[]): number {
    if (accounts) {
      return accounts.map(acc => +acc.credit)
        .reduce((acc, value) => acc + value, 0)
    }
    return 0;
  }

}
