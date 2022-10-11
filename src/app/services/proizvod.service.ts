import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proizvod } from '../models/proizvod.model';

@Injectable({
  providedIn: 'root'
})
export class ProizvodService {

  private proizvodi : Observable<Proizvod[]>;
  private proizvodUrl="https://localhost:44327/api/Proizvod";

  constructor(private http : HttpClient) {
    this.proizvodi = new Observable<Proizvod[]>();
  }


  public addProizvod(formData : any) : Observable<Proizvod>{
    const body ={
      ...formData
    }

    let headers = new HttpHeaders({
      "Content-Type" : "application/json",
    });
    console.log(body)
    return this.http.post<Proizvod>(this.proizvodUrl,body, 
      {
        headers : headers
      }
    );
  }

  public getProizvodi(): Observable<Proizvod[]>{
    this.proizvodi = this.http.get<Proizvod[]>(this.proizvodUrl);
    return this.proizvodi;
  }




}
