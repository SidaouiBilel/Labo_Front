import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Http, Response, RequestOptions, Headers} from "@angular/http";
import 'rxjs/Rx';
import { tokenNotExpired } from 'angular2-jwt';
@Component({
  selector: 'app-publications',
  templateUrl: './publications.component.html',
  styles: []
})
export class PublicationsComponent implements OnInit {

  private id:string;
  private pubs: Array<any>;
  constructor(private activatedRoute: ActivatedRoute,private http:Http) {
    activatedRoute.params.subscribe((param:any) => this.id = param['id']);

  }
  admin() {
    if ( localStorage.getItem('email') == "bilelsidaoui21@gmail.com" )
      return true;
    return false;
  }
  ngOnInit() {
    var option = new RequestOptions({headers: new Headers({'Content-Type':'application/json','token':localStorage.getItem('id_token')})  });
    this.http.get("http://localhost:8080/pub?sujet="+this.id).map((resultat:Response) => resultat.json()).subscribe((response:any) => this.pubs=response);

  }
  connected() {
    if ( tokenNotExpired())
      return true;
    return false;
  }
  onSubmite(title:string,body:string) {
    var option = new RequestOptions({headers: new Headers({'Content-Type':'application/json','token':localStorage.getItem('id_token')})  });
    this.http.post("http://localhost:8080/submitpost",JSON.stringify({email:localStorage.getItem('email'),body:body,title:title,sujet:this.id}),option).subscribe(
      (data:any) => alert("Post was submitted Successfully !")
    );
    setTimeout(() => {window.location.reload()},1000);
  }

}
