import { Component, OnInit } from '@angular/core';
import {RequestOptions, Headers, Response, Http} from "@angular/http";
import 'rxjs/Rx';
import {MembreService} from "../../services/membre-service.service";

@Component({
  selector: 'app-modifier',
  templateUrl: './modifier.component.html',
  styles: []
})
export class ModifierComponent implements OnInit {
  private success: boolean=false;
  constructor(private http:Http) { }

  ngOnInit() {

  }
  onSubmit(firstname:string,lastname:string,password:string,status:string) {
    var option = new RequestOptions({headers: new Headers({'Content-Type':'application/json','token':localStorage.getItem('id_token')})  });
    this.http.put("http://localhost:8080/update",JSON.stringify({email:localStorage.getItem("email"),firstname:firstname,lastname:lastname,
    password:password,status:status}),option).subscribe(
      (response:any) => {this.success = true;});
      setTimeout(() => {window.location.reload()},3000);
  }

}
