import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as CryptoJS from 'crypto-js';
import { of, throwError } from 'rxjs';
import { UserModel } from '../models/user.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-modification-profil',
  templateUrl: './modification-profil.component.html',
  styleUrls: ['./modification-profil.component.css']
})
export class ModificationProfilComponent implements OnInit {
  public selectedFiles : any;
  public url: any;
  public user : any;
  public modifactionForm : FormGroup;

  constructor(private formBuilder : FormBuilder,private router:Router,private userService : UserService) { 
    this.user = JSON.parse(localStorage.getItem('osoba')!);
    //this.url = this.user.Slika;
    let tip = this.user.TipKorisnika;
      switch(tip) { 
        case 1: { 
          this.user['TipKorisnika'] = "Admin";
           break; 
        } 
        case 2: { 
          this.user['TipKorisnika'] = "Dostavljac"; 
           break; 
        } 
        case 3: { 
          this.user['TipKorisnika'] = "Potrosac"; 
          break; 
        } 
     }
    this.modifactionForm = this.formBuilder.group({
      KorisnickoIme:['',[Validators.required]],
      Email:['',[Validators.required,Validators.email]],
      Lozinka:['',],
      Lozinka2:['',],
      ImePrezime:['',[Validators.required]],
      Adresa:['',[Validators.required]],
      Slika:['',[Validators.required]],
      TipKorisnika:['',[Validators.required]]
    })
  }

  public get KorisnickoIme(){
    return this.modifactionForm.get('KorisnickoIme');
  }
  public get Email(){
    return this.modifactionForm.get('Email');
  }
  public get Lozinka(){
    return this.modifactionForm.get('Lozinka');
  }
  public get Lozinka2(){
    return this.modifactionForm.get('Lozinka2');
  }
  public get ImePrezime(){
    return this.modifactionForm.get('ImePrezime');
  }
  public get Adresa(){
    return this.modifactionForm.get('Adresa');
  }
  public get Slika(){
    return this.modifactionForm.get('Slika');
  }
  public get TipKorisnika(){
    return this.modifactionForm.get('TipKorisnika');
  }

  public onFileChanged(event : any){
    this.selectedFiles = event.target.files[0];
    console.log(this.selectedFiles);
    const reader = new FileReader();
    reader.readAsDataURL(this.selectedFiles); 


    reader.onload = (_event) => { 
        this.url = reader.result;
    }

  }  




  ngOnInit(): void {
  }

  public submitForm(data : any){
    if(!this.modifactionForm.valid){
      window.alert('Not valid!');
      return;
    }

    if(data["Lozinka"] === ""){

      data["Lozinka"] = this.user.Lozinka;
      data["Lozinka2"] = this.user.Lozinka;

      let tip = data['TipKorisnika'].toString();
        switch(tip) { 
          case "Admin": { 
             data['TipKorisnika'] = 1;
             break; 
          } 
          case "Dostavljac": { 
             data['TipKorisnika'] = 2; 
             break; 
          } 
          case "Potrosac": { 
            data['TipKorisnika'] = 3; 
            break; 
          } 
       }
    }
    else{
      let password1= data["Lozinka"];
      let password2= data["Lozinka2"];
  
      if(password1 !== password2){
        window.alert('Not valid confirmed password!');
        return;
      }
      else{
        console.log(CryptoJS.SHA256(data['Lozinka']).toString());
        data['Lozinka']= CryptoJS.SHA256(data['Lozinka']).toString();
        let tip = data['TipKorisnika'].toString();
        switch(tip) { 
          case "Admin": { 
             data['TipKorisnika'] = 1;
             break; 
          } 
          case "Dostavljac": { 
             data['TipKorisnika'] = 2; 
             break; 
          } 
          case "Potrosac": { 
            data['TipKorisnika'] = 3; 
            break; 
          } 
       }
    }
  }

    this.userService.modification(data,this.user.Id).subscribe((user : any) =>{
      localStorage.setItem('osoba',JSON.stringify(user));
      //this.modifactionForm.reset();
    /*
    this.userNamePostoji = user['userName'];
    this.emailPostoji = user['email'];

    if(this.userNamePostoji == "found" && this.emailPostoji == "found"){
        window.alert('User exist!');
        this.registerForm.reset();
    }
    else{
      window.alert('User :'+' ' + user.imePrezime + ' ' + "successfully mofication profil!");
      this.router.navigate(['/login']);    
      this.modifactionForm.reset();
      }*/
    })
   }
  

}


function ok(body? : UserModel)  {
  return of(new HttpResponse({ status: 200, body }))
}

function error(message : string) {
  return throwError({ error: { message } });
}
  
