import {Injectable} from "@angular/core";

@Injectable()
export class Variables {
  private email:string;
  private firstname: string;
  private lastname: string;
  private status: string;
  private token: string;
  getemail() {
    return this.email;
  }
  getfirstname() {
    return this.firstname;
  }
  getlastname() {
    return this.lastname;
  }
  getstatus() {
    return this.status;
  }
  setToken(token:string){
    this.token=token;

}
  gettoken(){return this.token;}

  setemail(email:string){
    this.email = email;
  }
  setfirst(first:string){
    this.firstname = first;
  }
  setlast(last:string){
    this.lastname = last;
  }
  setstatus(status:string){
    this.status = status;
  }

}
