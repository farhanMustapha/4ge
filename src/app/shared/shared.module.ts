import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountLinesComponent } from "../admin/exercise-details/account-lines/account-lines.component";
import { DebitSumPipe } from "./pipes/debit-sum.pipe";
import { CreditSumPipe } from "./pipes/credit-sum.pipe";
import { FormsModule } from "@angular/forms";
import { MaterialModule } from "../material/material.module";
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    AccountLinesComponent,
    DebitSumPipe,
    CreditSumPipe
  ],
  exports: [
    AccountLinesComponent
  ],
  imports: [
    FormsModule,
    MaterialModule,
    CommonModule
  ]
})
export class SharedModule { }
