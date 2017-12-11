import { Component} from '@angular/core';
import {MembreService} from "../../services/membre-service.service";
import {Response, RequestOptions, Headers, Http} from "@angular/http";

@Component({
    selector: 'user-cmp',
    moduleId: module.id,
    templateUrl: 'user.component.html'
})

export class UserComponent{
  private success:boolean=false;
  private failure:boolean=false;
  constructor(private membreservice: MembreService,private http:Http) {}

  onSubmit(email:string,firstname:string,lastname:string,password:string,status:string) {
    this.membreservice.sendData({email:email,firstname:firstname,lastname:lastname,password:password,status:status}
    ).map((resp:Response)=> resp.json()).subscribe((response:any)=> {alert("Registration Successful! please check your email")},error => alert(error));
    setTimeout(()=>{
      window.location.reload()},3000);
  }

}
