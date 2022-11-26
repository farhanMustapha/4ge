import {Component} from '@angular/core';
import {LoginEntity} from "../../entities/entities";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {
  public login: LoginEntity = {
    email: "",
    password: ""
  }
  public isLoginWrong: boolean = false;

  constructor(public authService: AuthService, public router: Router) {
    this.authService.currentUser.subscribe(user => {
      if (user != null) {
        this.router.navigate(['/home']).then()
      }
    })
    this.authService.wrongLogin.subscribe(b => this.isLoginWrong = b)
  }

  handleLogin(): void {
    this.authService.login(this.login)
  }
}
