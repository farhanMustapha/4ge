import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, CanActivate, Router} from "@angular/router";
import {AuthService} from "./auth.service";

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(public auth: AuthService, public router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const expectedRole = route.data['expectedRole'];
    const currentUser = this.auth.currentUser.value;
    if (currentUser == null || !currentUser.authorities.includes(expectedRole)) {
      this.router.navigate(['/home']).then();
      return false;
    }
    return true;
  }
}
