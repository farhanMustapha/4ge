import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MaterialModule } from "./material/material.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from "@angular/common/http";
import { HeaderComponent } from './shared/header/header.component';
import { AuthService } from "./registry/services/auth.service";
import { AuthGuardService } from "./registry/services/auth.guard.service";
import { ExamService } from "./admin/services/exam.service";
import { httpInterceptorProviders } from "./shared/AuthInterceptor.service";
import { ExerciseService } from "./admin/services/exercise.service";
import { FooterComponent } from './shared/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [
    httpInterceptorProviders,
    AuthService,
    ExamService,
    ExerciseService,
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
