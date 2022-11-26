import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {SignUpForm, LoginEntity, Role, UserEntity} from "../entities/entities";
import {BehaviorSubject} from "rxjs";
import {Router} from "@angular/router";

@Injectable()
export class AuthService {
  private apiUrl = 'http://localhost:8080';
  public currentUser = new BehaviorSubject<UserEntity | null>(null);
  public wrongLogin = new BehaviorSubject<boolean>(false);
  private userStorageKey = "current-user";

  constructor(public http: HttpClient, public router: Router) {
    const savedUser = localStorage.getItem(this.userStorageKey);
    if (savedUser) {
      this.currentUser.next(JSON.parse(savedUser) as UserEntity)
    }
  }

  login(login: LoginEntity): void {
    this.http.post<UserEntity>(this.apiUrl + '/auth/sign-in', login)
      .subscribe( {
        next: (user: UserEntity) => this.onLoginSuccess(user),
        error: () => this.wrongLogin.next(true)
      })
  }

  signUp(signUpForm: SignUpForm): void {
    this.http.post<UserEntity>(this.apiUrl + '/auth/sign-up', signUpForm)
      .subscribe( {
        next: (user: UserEntity) => this.onLoginSuccess(user),
        error: (er) => alert(er.error.message)
      })
  }

  logout(): void {
    localStorage.removeItem(this.userStorageKey)
    this.currentUser.next(null)
  }

  private onLoginSuccess(user: UserEntity): void {
    this.wrongLogin.next(false)
    localStorage.setItem(this.userStorageKey, JSON.stringify(user))
    this.currentUser.next(user)
    if(user.authorities.some(authority => authority === Role.ROLE_ADMIN)) {
      this.router.navigate(['/admin/exams']).then()
    } else {
      this.router.navigate(['/user']).then()
    }
  }
}
