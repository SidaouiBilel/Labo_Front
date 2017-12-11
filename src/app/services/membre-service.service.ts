import { Injectable } from '@angular/core';
import {Http, Headers, Response, RequestOptions} from "@angular/http";
import 'rxjs/Rx';
import {Router} from "@angular/router";
@Injectable()
export class MembreService {

  constructor(private http: Http,private router:Router) { }

  sendData(membre: any) {
      const body = JSON.stringify(membre);
      const headers = new Headers();
      headers.append('Content-Type','application/json');
      return this.http.post('http://localhost:8080/register',body,{headers:headers}).map((data: Response) => data.json() );
  }

    getstudents() {
      const token:string = localStorage.getItem('id_token');

      var option = new RequestOptions({headers: new Headers({'Content-Type':'application/json','token':token})  });

      return this.http.get('http://localhost:8080/members/students',option).map((resultat: Response) => resultat.json());
  }
  getprofessors() {
    const token:string = localStorage.getItem('id_token');

    var option = new RequestOptions({headers: new Headers({'Content-Type':'application/json','token':token})  });

    return this.http.get('http://localhost:8080/members/professors',option).map((resultat: Response) => resultat.json());
  }
   getresearchers() {
      const token:string = localStorage.getItem('id_token');
     var option = new RequestOptions({headers: new Headers({'Content-Type':'application/json','token':token})  });

     return this.http.get('http://localhost:8080/members/researchers',option).map((resultat: Response) => resultat.json());
  }

  getarticles() {
    const token:string = localStorage.getItem('id_token');
    var option = new RequestOptions({headers: new Headers({'Content-Type':'application/json','token':token})  });
    return this.http.get('http://localhost:8080/articles',option).map((resultat:Response) => resultat.json());
  }
  getparticles() {
    const token:string = localStorage.getItem('id_token');
    var option = new RequestOptions({headers: new Headers({'Content-Type':'application/json','token':token})  });
    return this.http.get('http://localhost:8080/articlesp',option).map((resultat:Response) => resultat.json());
  }

  login(data: any) {
    const body = JSON.stringify(data);
    const headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post('http://localhost:8080/login',body,{headers:headers});
  }


  getsujets() {
    return this.http.get('http://localhost:8080/sujets').map((resultat:Response) => resultat.json());
  }

}
