import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {SignInComponent} from './components/sign-in/sign-in.component';
import {MaterialModule} from "../material/material.module";
import {FormsModule} from "@angular/forms";
import { SignUpComponent } from './components/sign-up/sign-up.component';

const routes: Routes = [
  {path: '', redirectTo: 'sign-in', pathMatch: 'full'},
  {path: 'sign-in', component: SignInComponent},
  {path: 'sign-up', component: SignUpComponent},
]

@NgModule({
  declarations: [
    SignInComponent,
    SignUpComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(routes),
    FormsModule
  ]
})
export class RegistryModule { }
