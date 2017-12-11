import { Component } from '@angular/core';
import { tokenNotExpired } from 'angular2-jwt';

@Component({
    selector: 'dashboard-cmp',
    moduleId: module.id,
    templateUrl: 'dashboard.component.html'
})

export class DashboardComponent{
  logged() {
    if (tokenNotExpired())
      return true;
    else return false;
  }
}
