import {Component, OnDestroy} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Http, Response, Headers, RequestOptions} from "@angular/http";
import 'rxjs/Rx';
import {Subscription} from "rxjs";
import { tokenNotExpired } from 'angular2-jwt';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styles: []
})
export class ArticleComponent implements OnDestroy {
  private subs: Subscription;
  private id: number;

  private  datarr: any;

  constructor(private activatedroute: ActivatedRoute,private http:Http,private router:Router) {
    if ( tokenNotExpired() ) {
    this.subs = activatedroute.params.subscribe((param:any) => this.id = param['id']);
    var option = new RequestOptions({headers: new Headers({'Content-Type':'application/json','token':localStorage.getItem('id_token')})  });
    this.router.events.subscribe(() => {this.datarr = [];this.http.get('http://localhost:8080/article?id=' + this.id,option).map((Resultat: Response) => Resultat.json()).subscribe((data:any) => this.datarr = data)});
    }
    if ( !tokenNotExpired() ) {
      this.subs = activatedroute.params.subscribe((param:any) => this.id = param['id']);
      var option = new RequestOptions({headers: new Headers({'Content-Type':'application/json','token':localStorage.getItem('id_token')})  });
      this.router.events.subscribe(() => {this.datarr = [];this.http.get('http://localhost:8080/articlep?id=' + this.id,option).map((Resultat: Response) => Resultat.json()).subscribe((data:any) => this.datarr = data)});

    }

  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }

}
