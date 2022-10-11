import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Dostavljac } from '../models/dostavljac.model';
import { Porudzbina } from '../models/porudzbina.model';

@Injectable({
  providedIn: 'root'
})
export class PorudzbineService {
  
  public porudzbine : Observable<Porudzbina[]>;
  
  public porudzbineUrl = "https://localhost:44327/api/Porudzbina";
  
  public porudzbinePotrosacUrl="https://localhost:44327/api/Porudzbina";
  
  public porudzbineDostavljacUrl="https://localhost:44327/api/Dostavljac/PostDostavljac";
  public porudzbineDostavljacNoveUrl="https://localhost:44327/api/Dostavljac/GetNove";

  public porudzbineDostavljacUtokuUrl = "https://localhost:44327/api/Dostavljac/GetUtoku";
  
  public prihvatiPorudzbinuUrl="https://localhost:44327/api/Dostavljac/PostPrihvatiDostavu";

  public zavrsenaPorudzbinaUrl="https://localhost:44327/api/Dostavljac/ZavrsenaPorudzbina";

  public porudzbinaUrl="https://localhost:44327/api/Porudzbina";

  public proveraPorudzbineUrl= "https://localhost:44327/api/Porudzbina/ProveraPorudzbine";


  constructor(private http : HttpClient) { 
    this.porudzbine = new Observable<Porudzbina[]>();
  }

  public getPorudzbine() : Observable<Porudzbina[]>{
    this.porudzbine = this.http.get<Porudzbina[]>(this.porudzbineUrl);
    return this.porudzbine;
  }
  public getPorudzbineDostavljacNove(idDostavljac : number) : Observable<Porudzbina[]>{
    const body ={
      idDostavljac
    }

    let headers = new HttpHeaders({
      "Content-Type" : "application/json",
    });

    return this.http.post<Porudzbina[]>(this.porudzbineDostavljacNoveUrl,body, 
      {
        headers : headers
      }
    );
  }



  public getPorudzbineUtoku(idDostavljac : number) : Observable<Porudzbina[]>{
    const body ={
      idDostavljac
    }

    let headers = new HttpHeaders({
      "Content-Type" : "application/json",
    });
    console.log(body)

    return this.http.post<Porudzbina[]>(this.porudzbineDostavljacUtokuUrl,body, 
      {
        headers : headers
      }
    );
  }






  public getPorudzbinePotrosac(idPotrosac : number) : Observable<Porudzbina[]>{
    const body ={
      idPotrosac
    }

    let headers = new HttpHeaders({
      "Content-Type" : "application/json",
    });
    console.log(body)

    return this.http.post<Porudzbina[]>(this.porudzbinePotrosacUrl + "/" + idPotrosac,body, 
      {
        headers : headers
      }
    );
  }

  public getPorudzbineDostavljac(idDostavljac : number) : Observable<Porudzbina[]> {
    const body ={
      idDostavljac
    }

    let headers = new HttpHeaders({
      "Content-Type" : "application/json",
    });
    console.log(body)

    return this.http.post<Porudzbina[]>(this.porudzbineDostavljacUrl ,body, 
      {
        headers : headers
      }
    );
  }

  public addPorudzbina(formData : any) : Observable<Porudzbina>{
    const body ={
      ...formData
    }

    let headers = new HttpHeaders({
      "Content-Type" : "application/json",
    });
    console.log(body)
    return this.http.post<Porudzbina>(this.porudzbinaUrl,body, 
      {
        headers : headers
      }
    );
  }


  public prihvatiPorudzbinu(IdPorudzbina : number,dostavljac : Dostavljac) : Observable<any>{
    const body = {
      IdPorudzbina,
      dostavljac
    };
    let headers = new HttpHeaders({
      "Content-Type" : "application/json",
    });
    console.log(body);

    return this.http.post<any>(this.prihvatiPorudzbinuUrl,body, 
      {
        headers : headers
      }
    );

  } 


  public dostavljeno(IdPorudzbina : number) : Observable<any>{
    const body = {
      IdPorudzbina
    };
    let headers = new HttpHeaders({
      "Content-Type" : "application/json",
    });
    console.log(body);

    return this.http.post<any>(this.zavrsenaPorudzbinaUrl,body, 
      {
        headers : headers
      }
    );

  }
  
  

  public proveraPorudzbine(IdPorudzbina : number) : Observable<any>{
    const body = {
      IdPorudzbina
    };
    let headers = new HttpHeaders({
      "Content-Type" : "application/json",
    });
    console.log(body);

    return this.http.post<any>(this.proveraPorudzbineUrl,body, 
      {
        headers : headers
      }
    );

  }


}
