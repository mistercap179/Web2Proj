import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProizvodService } from '../services/proizvod.service';

@Component({
  selector: 'app-proizvod-form',
  templateUrl: './proizvod-form.component.html',
  styleUrls: ['./proizvod-form.component.css']
})
export class ProizvodFormComponent implements OnInit {

  public proizvodFrom : FormGroup;
  constructor(private formBuilder : FormBuilder,private proizvodService : ProizvodService,
    private router : Router) {
    this.proizvodFrom = this.formBuilder.group({
      Ime:['',[Validators.required]],
      Cijena:['',[Validators.required]],
      Sastojci:['',[Validators.required]],
    });

  }

  public get Ime() {
    return this.proizvodFrom.get('Ime');
  }

  public get Cijena() {
    return this.proizvodFrom.get('Cijena') ;
  }
  public get Sastojci() {
    return this.proizvodFrom.get('Sastojci');
  }


  ngOnInit(): void {
  }


  public submitForm(data : any){

    if(!this.proizvodFrom.valid){
      window.alert('Not valid!');
      return;
    }

    this.proizvodService.addProizvod(data).subscribe(proizvod =>{
      window.alert('Successful product addition:'+ ' ' + proizvod.ime + "!"); 
      this.proizvodFrom.reset();
    });
  }

}
