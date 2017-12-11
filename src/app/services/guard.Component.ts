/**
 * Created by Bilel on 18/04/2017.
 */
import { Injectable } from '@angular/core';
import 'rxjs/Rx';
import {Router, CanActivate} from "@angular/router";
import { tokenNotExpired } from 'angular2-jwt';

@Injectable()
export class GuardService implements CanActivate{

  constructor(private router:Router) { }

  canActivate() {
    if (tokenNotExpired())
    {
      return true;
    }
    this.router.navigate(['dashboard']);
    return false;
  }

}
