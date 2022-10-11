import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProizvodInfo } from '../models/dataProizvodInfo.model';
import { Porudzbina } from '../models/porudzbina.model';
import { Proizvod } from '../models/proizvod.model';
import { ProizvodService } from '../services/proizvod.service';
import { SendDataService } from '../services/send-data.service';

@Component({
  selector: 'app-proizvodi-spliter',
  templateUrl: './proizvodi-spliter.component.html',
  styleUrls: ['./proizvodi-spliter.component.css'],
  animations: [
    trigger('carouselAnimation', [
      transition('void => *', [
        style({ opacity: 0 }),
        animate('300ms', style({ opacity: 1 }))
      ]),
      transition('* => void', [
        animate('300ms', style({ opacity: 0 }))
      ])
    ])
  ]
})
export class ProizvodiSpliterComponent implements OnInit {

  public dictionary : any={};
  public proizvodi : Proizvod[] = [];
  public kupljeniProizvodi : Proizvod[] = [];

  constructor(private proizvodService : ProizvodService,private router : Router,
    private dateService : SendDataService) { 
    
    this.proizvodService.getProizvodi().subscribe((proizvodi:Proizvod[])=>{
        this.proizvodi = proizvodi;
    });
  }

  ngOnInit(): void {
  }

  currentSlide = 0;
  onPreviousClick() {
    const previous = this.currentSlide - 1;
    this.currentSlide = previous < 0 ? this.proizvodi.length - 1 : previous;
    console.log("previous clicked, new current slide is: ", this.currentSlide);
  }

  onNextClick() {
    const next = this.currentSlide + 1;
    this.currentSlide = next === this.proizvodi.length ? 0 : next;
    console.log("next clicked, new current slide is: ", this.currentSlide);
  }

  public dodajUkorpu(idProizvod : number,proizvod : Proizvod){

    if(!(this.kupljeniProizvodi.includes(proizvod))){
      this.kupljeniProizvodi.push(proizvod);
    }

    var el = document.getElementById('displayButton');
  
    if(el){
      el.style.display="block";
    }

    if((this.dictionary[idProizvod] == undefined)){
      this.dictionary[idProizvod] = 1;
    }
    else{
      this.dictionary[idProizvod] = ++ this.dictionary[idProizvod] ;
    }

  }
  public poruci(proizvodi : Proizvod[],kolicinaProizvoda : { [key: number]: number }){
      let proizvodInfo : ProizvodInfo = {proizvodi,kolicinaProizvoda};
      proizvodInfo.proizvodi = this.kupljeniProizvodi;
      proizvodInfo.kolicinaProizvoda = this.dictionary;
      this.dateService.changeMessage(proizvodInfo);
      //this.router.navigate(['navigation#porudzbinaform']);
  }

}
