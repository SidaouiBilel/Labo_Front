import {Component, OnInit} from '@angular/core';
import {MembreService} from "../../services/membre-service.service";
import {RequestOptions, Http, Headers} from "@angular/http";
@Component({
    selector: 'table-cmp',
    moduleId: module.id,
    templateUrl: 'table.component.html',
    providers: [MembreService]
})

export class TableComponent implements OnInit{
  public students: Array<any>;
  public professors: Array<any>;
  public researchers: Array<any>;
  constructor(private membreservice: MembreService,private http:Http){}

  ngOnInit() {
    this.membreservice.getstudents().subscribe((data: any) => this.students = data);
    this.membreservice.getprofessors().subscribe((data: any) => this.professors = data);
    this.membreservice.getresearchers().subscribe((data: any) => this.researchers = data);
  }
  ifadmin() {
    if (localStorage.getItem("email") == "bilelsidaoui21@gmail.com")
      return true;
    return false;
  }
  deleteus(email:string) {
    var option = new RequestOptions({headers: new Headers({'Content-Type':'application/json','token':localStorage.getItem('id_token')})  });
    this.http.post("http://localhost:8080/delete",JSON.stringify({email:email}),option).subscribe();
    setTimeout(() => {window.location.reload()},3000);
  }
}
