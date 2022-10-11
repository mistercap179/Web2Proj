import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {

  public user : any;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  
  

  constructor(private breakpointObserver: BreakpointObserver,private router : Router) {

    this.user = JSON.parse(localStorage.getItem('osoba')!);
    console.log(this.user)

  }

  public logout(){
    localStorage.removeItem("osoba");
    localStorage.removeItem("token");
    this.router.navigate(['/login'])
  }

}
