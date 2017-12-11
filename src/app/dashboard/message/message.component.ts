import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Http, Response, RequestOptions, Headers} from "@angular/http";

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styles: []
})
export class MessageComponent implements OnInit {

  private id:number;
  private users: Array<any>;
  private msg: Array<any>;
  constructor(private activatedRoute:ActivatedRoute,private http:Http) {}

  ngOnInit() {
    var option = new RequestOptions({headers: new Headers({'Content-Type':'application/json','token':localStorage.getItem('id_token')})  });
    this.http.get("http://localhost:8080/getusers?email="+localStorage.getItem('email'),option).map((res:Response) => res.json()).subscribe((data:any) => this.users = data);
  }

  onSubmits(msg:string,emailr:string) {
    var option = new RequestOptions({headers: new Headers({'Content-Type':'application/json','token':localStorage.getItem('id_token')})  });
    this.http.post("http://localhost:8080/submsg",JSON.stringify({msg:msg,emailr:emailr,emails:localStorage.getItem('email')}),option).subscribe(
      (rez:any) => alert("Message was sent successfully!")
    );

    setTimeout(() => {window.location.reload()},3000);
  }

}
