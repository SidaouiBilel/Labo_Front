import { Component, OnInit } from '@angular/core';
import {Variables} from "../services/global.variable";
import {Http, Response, RequestOptions, Headers} from "@angular/http";
import 'rxjs/Rx';
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: []

})
export class HeaderComponent implements OnInit {
  private email:string;
  private msg:Array<any>;
  private name:string;
  constructor(private http:Http,private router:Router) {
  }

  ngOnInit() {
    var option = new RequestOptions({headers: new Headers({'Content-Type':'application/json','token':localStorage.getItem('id_token')})  });
    this.http.get("http://localhost:8080/info?email="+localStorage.getItem('email')).map((resultat:Response) => resultat.json()).subscribe((data:any) => {localStorage.setItem('name',data[0][0])
    ;this.name = data[0][0]});
    this.http.get("http://localhost:8080/msg?email="+localStorage.getItem('email'),option).map((resultat:Response) => resultat.json()).subscribe((data:any) => this.msg = data);
  }
  logout() {
    window.localStorage.removeItem('id_token');
    window.localStorage.removeItem('email');
    window.localStorage.removeItem('name');
    this.router.navigate(['dashboard']);
  }
}
