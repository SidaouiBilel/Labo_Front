import {Component, OnInit} from '@angular/core';
import {MembreService} from "../../services/membre-service.service";

import { tokenNotExpired } from 'angular2-jwt';
import {RequestOptions, Headers, Http} from "@angular/http";
@Component({
  moduleId: module.id,
  selector: 'maps-cmp',
  templateUrl: 'maps.component.html',
  providers: [MembreService]
})

export class MapsComponent implements OnInit{

  public articles: Array<any>;
  constructor(private membreservice: MembreService,private http:Http) {}

  ngOnInit() {
    if ( tokenNotExpired() ) {
    this.membreservice.getarticles().subscribe((data: any) => this.articles = data);}
    if ( !tokenNotExpired() ) {
      this.membreservice.getparticles().subscribe((data: any) => this.articles = data);}
  }
  ifadmin() {
    if (localStorage.getItem("email") == "bilelsidaoui21@gmail.com")
      return true;
    return false;
  }
  connected() {
    if ( tokenNotExpired() )
      return true;
    return false;
  }
  onSubmiting(title:string,body:string,type:string) {
    var option = new RequestOptions({headers: new Headers({'Content-Type':'application/json','token':localStorage.getItem('id_token')})  });


    this.http.post("http://localhost:8080/submitar",JSON.stringify({title:title,email:localStorage.getItem("email"),body:body,type:type}),option).subscribe((data:any) => alert("Submitted Successfully"));
    setTimeout(() => {window.location.reload()},1000);
  }
  deletearticle(id:number) {
    var option = new RequestOptions({headers: new Headers({'Content-Type':'application/json','token':localStorage.getItem('id_token')})  });
    this.http.delete("http://localhost:8080/delart?id="+id,option).subscribe(
      (data:any) => alert("deleted successfully!")
    );
    setTimeout(() => {window.location.reload()},3000);
  }
}
