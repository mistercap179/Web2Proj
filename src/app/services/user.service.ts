import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserModel } from '../models/user.model';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private registerUrl = "https://localhost:44327/api/Osoba"; 
  private loginUrl = "https://localhost:44327/api/Osoba/Login";
  private modifactionUrl = "https://localhost:44327/api/Osoba";

  private dodajSlikuUrl = "https://localhost:44327/api/Osoba/DodajSliku";

  constructor(private http : HttpClient) { }

  public register(formData : any) : Observable<UserModel>{
    const body ={
      ...formData
    }

    let headers = new HttpHeaders({
      "Content-Type" : "application/json",
    });
    console.log(body)
    return this.http.post<UserModel>(this.registerUrl,body, 
      {
        headers : headers
      }
    );
  }

  public logIn(data : any) : Observable<any>{
    const body = {
      ...data
    };
    let headers = new HttpHeaders({
      "Content-Type" : "application/json",
    });
    return this.http.post<any>(this.loginUrl,body, 
      {
        headers : headers
      }
    );
  }

  public modification(data : any,id : number) : Observable<any>{
    const body = {
      id,
      ...data
    };
    let headers = new HttpHeaders({
      "Content-Type" : "application/json",
    });
    console.log(id);
    /*
    var p = new HttpParams();
    p = p.append("/id", id);*/

    return this.http.put<any>(this.modifactionUrl + "/" + id,body, 
      {
        headers : headers
      }
    );
  }

  public dodajSliku(formData : any) : Observable<any>{
    const body = {
      formData
    };
    let headers = new HttpHeaders({
      "Content-Type" : "application/json",
    });
    /*
    var p = new HttpParams();
    p = p.append("/id", id);*/

    return this.http.post<any>(this.dodajSlikuUrl,body, 
      {
        headers : headers
      }
    );
  }


}
