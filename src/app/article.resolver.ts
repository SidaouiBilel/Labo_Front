/**
 * Created by Bilel on 02/04/2017.
 */
import { Resolve } from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {Observer} from "rxjs";

export interface Article {
  nom:string;
  body:string;
}
export class ArticleResolver implements Resolve<Article[]> {

  resolve(): Observable<Article[]> {
      return Observable.create((observer: Observer<Article[]>) => {setTimeout(() => {observer.next([{nom:'blabla',body:"blal"}]);observer.complete();},1000);})}
}

