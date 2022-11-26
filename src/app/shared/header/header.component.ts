import {Component} from '@angular/core';
import {AuthService} from "../../registry/services/auth.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isConnected: boolean = false;
  userName: String | undefined = "";

  constructor(public authService: AuthService) {
    this.authService.currentUser.subscribe(user => {
      this.isConnected = user != null;
      this.userName = this.isConnected ? user?.username : ""
    })
  }

  logout(): void {
    this.authService.logout()
  }
}
