import { Component} from '@angular/core';
import { tokenNotExpired } from 'angular2-jwt';
import {Router} from "@angular/router";

declare var $:any;
@Component({
    moduleId: module.id,
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent  {
constructor( private router:Router) {
}
  logged() {
    if (tokenNotExpired())
      return true;
    else return false;
  }
  logout() {
    window.localStorage.removeItem('id_token');
    window.localStorage.removeItem('email');
    window.localStorage.removeItem('name');
    this.router.navigate(['dashboard']);
  }
  isadmin() {
  if (localStorage.getItem("email") == "bilelsidaoui21@gmail.com")
    return true;
    return false;
  }
}
