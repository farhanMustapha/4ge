import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {AuthGuardService} from "./registry/services/auth.guard.service";
import {Role} from "./registry/entities/entities";

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {
    path: 'registry',
    loadChildren: () => import('./registry/registry.module').then(m => m.RegistryModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
    canActivate: [AuthGuardService],
    data: {
    expectedRole: Role.ROLE_ADMIN
    }
  },
  {
    path: 'user',
    loadChildren: () => import('./user-exam/user-exam.module').then(m => m.UserExamModule),
    canActivate: [AuthGuardService],
    data: {
      expectedRole: Role.ROLE_USER
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
