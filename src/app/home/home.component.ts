import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public osoba : any;

  constructor(private router : Router) { }

  ngOnInit(): void {
    if(
      localStorage.getItem("token") != null && localStorage.getItem("osoba") != null &&
      localStorage.getItem("token") != undefined && localStorage.getItem("osoba") != undefined
    ){
      this.router.navigate(['/navigation']);
    }
    else {
      this.router.navigate(['login']);
    }


  }

  public login(){
    localStorage.clear();
    this.router.navigate(['login']);
  }
  public register(){
    this.router.navigate(['register']);
  }

}
