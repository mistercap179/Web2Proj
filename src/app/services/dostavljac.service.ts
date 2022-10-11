import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Dostavljac } from '../models/dostavljac.model';

@Injectable({
  providedIn: 'root'
})
export class DostavljacService {

  public dostavljaci : Observable<Dostavljac[]>;
  public UrlGet = "https://localhost:44327/api/Dostavljac";
  public changeStatusUrl = "https://localhost:44327/api/Dostavljac";
  public proveraStatusUrl = "https://localhost:44327/api/Dostavljac/ProveraStatus";


  constructor(private http : HttpClient) {
    this.dostavljaci = new Observable<Dostavljac[]>;
  }

  public getDostavljaci(): Observable<Dostavljac[]>{
    this.dostavljaci = this.http.get<Dostavljac[]>(this.UrlGet);
    return this.dostavljaci;
  }

  public changeStatus(IdDostavljac : number,StatusProfila : number): Observable<any>{
    const body = {
      IdDostavljac,
      StatusProfila
    }
    let headers = new HttpHeaders({
      "Content-Type" : "application/json",
    });
    console.log(body);
    return this.http.post<any>(this.changeStatusUrl + "/" + IdDostavljac,body,
    {
      headers : headers
    });
  }

  public proveraStatusa(IdDostavljac : number): Observable<any>{
    const body = {
      IdDostavljac,
    }
    let headers = new HttpHeaders({
      "Content-Type" : "application/json",
    });
    return this.http.post<any>(this.proveraStatusUrl,body,
    {
      headers : headers
    });
  }

  



}
