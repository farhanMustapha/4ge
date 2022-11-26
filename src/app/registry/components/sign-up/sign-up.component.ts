import {Component} from '@angular/core';
import {SignUpForm} from "../../entities/entities";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {
  newUser: SignUpForm = {
    name: "",
    email: "",
    city: "",
    phone: "",
    studyLevel: "",
    field: "",
    password: "",
    confirm: ""
  }

  constructor(private authService: AuthService) { }

  submit(): void {
    if(this.newUser.name.length < 2 ||
    this.newUser.city.length < 2 ||
    this.newUser.phone.length < 2 ||
    this.newUser.studyLevel.length < 2 ||
    this.newUser.password.length < 2 ||
    this.newUser.field.length < 2) {
      alert("Veuillez remplire tous les champs")
      return
    }
    if (this.newUser.password !== this.newUser.confirm) {
      alert("Confirmation de mot de passe non valide")
      return
    }
    if(!this.newUser.email.match(/^(.+)@(.+)$/)) {
      alert('Invalide email')
      return
    }
    this.authService.signUp(this.newUser)
  }

}
