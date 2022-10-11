import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import * as CryptoJS from 'crypto-js';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserModel } from '../models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private Url = "https://localhost:44327/api/Proizvod"
  public loginFrom : FormGroup;
  constructor(private formBuilder : FormBuilder,private userService: UserService,private router : Router,private http : HttpClient) 
  { 
    
    this.loginFrom = this.formBuilder.group({
      email:['',[Validators.required]],
      lozinka:['',[Validators.required]]
    }); 
  }

  ngOnInit(): void {
  }

  public get email() {
    return this.loginFrom.get('email');
  }

  public get lozinka() {
    return this.loginFrom.get('lozinka') ;
  }

  public register(){
    this.router.navigate(['register']);
  }
  
  public submitForm (data:any) {
    let role = "";
    let token = "";
    
    data['lozinka']= CryptoJS.SHA256(data['lozinka']).toString();

    this.userService.logIn(data).subscribe((response : any) => {
      
      if(response['message']){
          window.alert(response['message']);
      }
      else if(response['poruka']){
        window.alert(response['poruka']);
      }

      else{
        role = response['role']
        token = response['token']
     
        console.log(response)
  
        localStorage.setItem('osoba',JSON.stringify(response['osoba']));
        localStorage.setItem('token',token);
  
        let hs = new HttpHeaders();
        hs = hs.append("Authorization", "Bearer " + localStorage.getItem('token'));
        hs = hs.append("token", localStorage.getItem('token')!);
       
        window.alert("User successfully login!");
  
        this.router.navigate(['navigation']);
  
        
        if(role === "Admin"){
          //this.router.navigate(['admin-view'])
        }
        else if(role === "Potrosac"){
          localStorage.setItem('potrosac',JSON.stringify(response['osoba']));
          //this.router.navigate(['potrosac-view'])
        }
        else if(role === "Dost"){
          localStorage.setItem('dostavljac',JSON.stringify(response['osoba']));
          //this.router.navigate(['dostavljac-view']);    
        }
        else{
          this.loginFrom.reset();
        }
        
      }
     
    })
    
  }
}
