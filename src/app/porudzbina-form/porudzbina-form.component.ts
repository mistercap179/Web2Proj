import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { interval, Subscription } from 'rxjs';
import { ProizvodInfo } from '../models/dataProizvodInfo.model';
import { Porudzbina } from '../models/porudzbina.model';
import { Potrosac } from '../models/potrosac.model';
import { PorudzbineService } from '../services/porudzbine.service';
import { SendDataService } from '../services/send-data.service';

enum StatusPorudzbine{
  "Na cekanju",
  "Zavrsena",
  "Zapoceta"
}


@Component({
  selector: 'app-porudzbina-form',
  templateUrl: './porudzbina-form.component.html',
  styleUrls: ['./porudzbina-form.component.css']
})



export class PorudzbinaFormComponent implements OnInit {

  public disebluj : boolean;
  public porucio : boolean = false;
  public ukupno : number = 0;
  public potrosac : any;
  public porudzbinaSend = {} as Porudzbina;
  public porudzbinaForm: FormGroup;
  public proizvodInfo = {} as ProizvodInfo;
  public subscription : Subscription;
  constructor(private formBuilder : FormBuilder,private dataService : SendDataService,
    private porudzbinaService : PorudzbineService,private router : Router) {

    this.dataService.currentMessage.subscribe(message => {
      this.proizvodInfo = message;
      this.izracunajCijenu(this.proizvodInfo);
    });

    this.potrosac = JSON.parse(localStorage.getItem('potrosac')!); 

    if(localStorage.getItem('porucio') == "true"){
      this.disebluj = true;
    }
    else{
      this.disebluj = false;
    }

    console.log(this.disebluj)

    this.porudzbinaForm = this.formBuilder.group({
      AdresaDostave:['',[Validators.required]],
      Komentar:['',[Validators.required]]
    });
  }

  public get AdresaDostave() {
    return this.porudzbinaForm.get('AdresaDostave');
  }
  public get Komentar() {
    return this.porudzbinaForm.get('Komentar') ;
  }

  
  public izracunajCijenu(proizvodInfo : ProizvodInfo){
    for(let i=0;i<proizvodInfo.proizvodi.length;i++){
      this.ukupno += (proizvodInfo.proizvodi[i].cijena * proizvodInfo.kolicinaProizvoda[proizvodInfo.proizvodi[i].idProizvod]); 
      console.log(this.ukupno)
    }
}


  ngOnInit(): void {
  }
 


  public submitForm(data : any){
    console.log(data['AdresaDostave']);
    this.porudzbinaSend.adresaDostave = data['AdresaDostave'];
    this.porudzbinaSend.komentar = data['Komentar'];
    this.porudzbinaSend.cijena = this.ukupno;
    this.porudzbinaSend.proizvodi = this.proizvodInfo.proizvodi;
    this.porudzbinaSend.kolicinaProizvoda = this.proizvodInfo.kolicinaProizvoda;
    this.porudzbinaSend.statusPorudzbine = StatusPorudzbine['Na cekanju'];
    this.porudzbinaSend.potrosac = this.potrosac.Id;

    if(!this.porudzbinaForm.valid){
      window.alert('Not valid!');
      return;
    }

    this.porudzbinaService.addPorudzbina(this.porudzbinaSend).subscribe(json =>{
      this.dataService.changeMessage(json);
      //localStorage.setItem('pocelo',"pocelo");
      //this.router.navigate(['potrosac-view']);
      this.porucio=true;
      localStorage.setItem('porucio',String(this.porucio));
      console.log(localStorage.getItem('porucio'))
      this.ukupno = 0;
      this.porudzbinaForm.reset();
    })
  }

}
