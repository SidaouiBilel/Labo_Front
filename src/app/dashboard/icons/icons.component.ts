import { Component } from '@angular/core';
import {Http} from "@angular/http";

@Component({
    selector: 'icons-cmp',
    moduleId: module.id,
    templateUrl: 'icons.component.html'
})

export class IconsComponent{
  ifadmin() {
    if (localStorage.getItem("email") == "bilelsidaoui21@gmail.com")
      return true;
    return false;
  }
  constructor(private http:Http){}
  onSubmit(file:string) {
    this.http.post("http://localhost:8080/upload",JSON.stringify({file:file})).subscribe();
  }
}
