import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {RequestOptions, Headers, Http, Response} from "@angular/http";
import {MembreService} from "../../../../services/membre-service.service";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styles: []
})
export class PostsComponent implements OnInit {
  private post: Array<any>;
  private comm: Array<any>;
  private userdata: Array<any>;
  private id:number;
  constructor(private activatedRoute: ActivatedRoute,private http:Http,private membreService: MembreService) {
    activatedRoute.params.subscribe((data:any) => this.id=data['id']);
    var option = new RequestOptions({headers: new Headers({'Content-Type':'application/json','token':localStorage.getItem('id_token')})  });
    http.get("http://localhost:8080/post?post="+this.id,option).map((data:Response)=>data.json()).subscribe((data:any) => this.post = data);
    http.get("http://localhost:8080/comm?post="+this.id,option).map((data:Response)=>data.json()).subscribe((data:any) => this.comm = data);
    http.get("http://localhost:8080/info?email="+ localStorage.getItem('email'),option).map((resultat:Response) => resultat.json()).subscribe((data:any) => this.userdata=data);

  }

  ngOnInit() {
  }

  onclicked(comm:string,idu:number,idp:number) {
    var option = new RequestOptions({headers: new Headers({'Content-Type':'application/json','token':localStorage.getItem('id_token')})  });
    return this.http.post('http://localhost:8080/comment',JSON.stringify({"comm":comm,"post":idp,"membre":idu.toFixed()}),option).map((data: Response) => data.json()).subscribe((date:any) => setTimeout(() => {window.location.reload()},2000));
  }

}
