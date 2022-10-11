import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { of, subscribeOn, throwError } from 'rxjs';
import { UserModel } from '../models/user.model';
import { UserService } from '../services/user.service';
import * as CryptoJS from 'crypto-js';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public emailPostoji: string = "";
  public userNamePostoji : string = "";
  public registerForm : FormGroup;
  public selectedFiles : any;
  public url : any;
  constructor(private formBuilder : FormBuilder,private router : Router,private userService : UserService) { 
    this.registerForm = this.formBuilder.group({
      korisnickoIme:['',[Validators.required]],
      email:['',[Validators.required,Validators.email]],
      lozinka:['',[Validators.required]],
      lozinka2:['',[Validators.required]],
      imePrezime:['',[Validators.required]],
      datumRodjenja:['',[Validators.required]],
      adresa:['',[Validators.required]],
      slika:['',[Validators.required]],
      tipKorisnika:['',[Validators.required]]
    })
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






  public login(){
    //localStorage.clear();
    this.router.navigate(['login']);
  }

  ngOnInit(): void {
  }

  public get korisnickoIme(){
    return this.registerForm.get('korisnickoIme');
  }
  public get email(){
    return this.registerForm.get('email');
  }
  public get lozinka(){
    return this.registerForm.get('lozinka');
  }
  public get lozinka2(){
    return this.registerForm.get('lozinka2');
  }
  public get imePrezime(){
    return this.registerForm.get('imePrezime');
  }
  public get datumRodjenja(){
    return this.registerForm.get('datumRodjenja');
  }
  public get adresa(){
    return this.registerForm.get('adresa');
  }
  public get slika(){
    return this.registerForm.get('slika');
  }
  public get tipKorisnika(){
    return this.registerForm.get('tipKorisnika');
  }


  public submitForm(data : any){

    if(!this.registerForm.valid){
      window.alert('Not valid!');
      return;
    }
    let password1= data["lozinka"];
    let password2= data["lozinka2"];
    console.log(password1);
    console.log(password2);
    if(password1 !== password2){
      window.alert('Not valid!');
      return;
    }
    else{
      data['lozinka']= CryptoJS.SHA256(data['lozinka']).toString();
      let tip = data['tipKorisnika'].toString();
      switch(tip) { 
        case "Admin": { 
           data['tipKorisnika'] = 1;
           break; 
        } 
        case "Dostavljac": { 
           data['tipKorisnika'] = 2; 
           break; 
        } 
        case "Potrosac": { 
          data['tipKorisnika'] = 3; 
          break; 
        } 
     }

      this.userService.register(data).subscribe((user : any) =>{
      
      this.userNamePostoji = user['userName'];
      this.emailPostoji = user['email'];

      if(this.userNamePostoji == "found" && this.emailPostoji == "found"){
          window.alert('User exist!');
          this.registerForm.reset();
      }
      else{
        window.alert('User :'+' ' + user.imePrezime + ' ' + "successfully registered!");
        this.router.navigate(['/login']);    
        this.registerForm.reset();
      }
    })

    }

  }


  public br(){
    console.log(1);
  }

}
function ok(body? : UserModel)  {
  return of(new HttpResponse({ status: 200, body }))
}

function error(message : string) {
  return throwError({ error: { message } });
}