import { Component, OnInit } from '@angular/core';
import {Http, RequestOptions, Headers} from "@angular/http";
import 'rxjs/Rx';

@Component({
  selector: 'app-addemail',
  templateUrl: './addemail.html',
  styles: []
})
export class AddEmailComponent implements OnInit {
  constructor(private http:Http) { }

  private successed: boolean = false;
  private failure: boolean = false;
  ngOnInit() {

  }

  onclicks(email:string) {
    var option = new RequestOptions({headers: new Headers({'Content-Type':'application/json'})  });
    this.http.post("http://localhost:8080/signeup",JSON.stringify({email:email}),option).subscribe((resp:any) => this.successed = true,
    error => this.failure = true
    );
  }
}
/**
 * Created by Bilel Sidaoui on 14/05/2017.
 */
