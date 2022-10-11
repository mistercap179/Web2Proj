import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { interval, Subscription } from 'rxjs';
import { ProizvodInfo } from '../models/dataProizvodInfo.model';
import { Dostavljac } from '../models/dostavljac.model';
import { Porudzbina } from '../models/porudzbina.model';
import { PorudzbinaPrihvatio } from '../models/porudzbinaPrihvatio.model';
import { Proizvod } from '../models/proizvod.model';
import { PorudzbineService } from '../services/porudzbine.service';
import { SendDataService } from '../services/send-data.service';

enum StatusPorudzbine{
  "Na cekanju",
  "Zapoceta",
  "Zavrsena"
}
@Component({
  selector: 'app-porudzbine',
  templateUrl: './porudzbine.component.html',
  styleUrls: ['./porudzbine.component.css']
})
export class PorudzbineComponent implements OnInit {
  public porudzbinaZavrsena : any;
  public zavrseno : any;
  public osoba : any;
  public porudzbine : Porudzbina[] =[];
  public porudzbineNove : any[] =[];
  
  public porudzbinaPrihvatio : PorudzbinaPrihvatio = new PorudzbinaPrihvatio();
  
  public porudzbineUtoku : any[] = [];

  public subscription : Subscription;

  constructor(private porudzbineService : PorudzbineService,private dataservice : SendDataService,private router: Router) {
    this.zavrseno = this.dataservice.currentMessage.subscribe(message => this.zavrseno = message);
    this.porudzbinaZavrsena = JSON.parse(localStorage.getItem('prihvatio')!);
    //this.potrosac = JSON.parse(localStorage.getItem('potrosac')!); 
    //this.dostavljac = JSON.parse(localStorage.getItem('dostavljac')!); 


    this.osoba = JSON.parse(localStorage.getItem('osoba')!);
    
    if(this.osoba.TipKorisnika == 3){
      this.subscription = interval(1000)
      .subscribe((x : any) => { 
      this.porudzbineService.getPorudzbinePotrosac(this.osoba.Id).subscribe((porudzbinee : Porudzbina[])=>{
        this.porudzbine = porudzbinee;
      });});

    }
    else if(this.osoba.TipKorisnika == 2){
      this.porudzbineService.getPorudzbineDostavljac(this.osoba.Id).subscribe((porudzbinee : Porudzbina[])=>{
        this.porudzbine = porudzbinee;
      });
      this.subscription = interval(1000)
      .subscribe((x : any) => { 
        
        this.porudzbineService.getPorudzbineDostavljacNove(this.osoba.Id).subscribe((porudzbinee : Porudzbina[])=>{
          this.porudzbineNove = porudzbinee;
     })
    });
 
      this.porudzbineService.getPorudzbineUtoku(this.osoba.Id).subscribe((porudzbineUtoku : Porudzbina[])=>{
        this.porudzbineUtoku = porudzbineUtoku;
        console.log(this.porudzbineUtoku);
        });
     

    }
    
    else{
      this.subscription = interval(1000)
      .subscribe((x : any) => { 
      this.porudzbineService.getPorudzbine().subscribe((porudzbinee : Porudzbina[])=>{
        this.porudzbine = porudzbinee;
        console.log(this.porudzbine);
      });});
    }
  }

  ngOnInit(): void {
  }

  public porudzbinaInfo(proizvodi : Proizvod[],kolicinaProizvoda : { [key: number]: number }){

    let proizvodInfo : ProizvodInfo = {proizvodi,kolicinaProizvoda};
    this.dataservice.changeMessage(proizvodInfo);
    console.log(proizvodInfo);
  }

  public prihvati(idPorudzbina : number,dostavljac : Dostavljac){
      this.porudzbineService.prihvatiPorudzbinu(idPorudzbina,dostavljac).subscribe((json)=>{
        window.location.reload(); 
        
      });

      console.log(this.porudzbinaPrihvatio);

      this.porudzbinaPrihvatio.idPorudzbine = idPorudzbina;
      this.porudzbinaPrihvatio.vrijeme = new Date();

      //localStorage.setItem('prihvatio',JSON.stringify(idPorudzbina));
      
      localStorage.setItem('prihvatio',JSON.stringify(this.porudzbinaPrihvatio));

  }

}
