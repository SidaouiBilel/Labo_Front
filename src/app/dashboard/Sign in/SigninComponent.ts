import { Component } from '@angular/core';
import {MembreService} from "../../services/membre-service.service";
import {Response} from "@angular/http";
import {Variables} from "../../services/global.variable";
import {Router} from "@angular/router";

@Component({
	moduleId: module.id,
    selector: 'app-sign-in',
    templateUrl: './SigninComponent.html',
})

export class SigninComponent {
  constructor(private membreservice: MembreService,private router:Router){}

  onclick(email:string,pw:string) {
      this.membreservice.login({email:email,password:pw}).subscribe((data:Response) => {window.localStorage.setItem('id_token',data.text());
      localStorage.setItem('email',email);if (data.statusText == 'OK') window.alert("LOGIN SUCCESSFUL");this.router.navigate(['dashboard']);},
        error => {alert(error.text);window.alert("There was a problem please verify your email and password and try again");this.router
          .navigate(['signin'])}

      );

  }
}
