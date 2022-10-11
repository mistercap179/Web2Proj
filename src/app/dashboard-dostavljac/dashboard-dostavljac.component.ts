import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { PorudzbinaPrihvatio } from '../models/porudzbinaPrihvatio.model';
import { UserModel } from '../models/user.model';
import { DostavljacService } from '../services/dostavljac.service';
import { interval, Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-dostavljac',
  templateUrl: './dashboard-dostavljac.component.html',
  styleUrls: ['./dashboard-dostavljac.component.css']
})
export class DashboardDostavljacComponent {
  /** Based on the screen size, switch from standard to one column per row */
  public osoba : any;
  public prihvatio : PorudzbinaPrihvatio;
  public pocelo : any;
  public mess : any;

  public subscription : Subscription;

  public poruka : any;

  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Card 1', cols: 1, rows: 1 },
          { title: 'Card 2', cols: 1, rows: 1 },
          { title: 'Card 3', cols: 1, rows: 1 },
          { title: 'Card 4', cols: 1, rows: 1 }
        ];
      }

      return [
        { title: 'Card 1', cols: 2, rows: 1 },
        { title: 'Card 2', cols: 1, rows: 1 },
        { title: 'Card 3', cols: 1, rows: 2 },
        { title: 'Card 4', cols: 1, rows: 1 }
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver,private dostavljacService : DostavljacService,private router : Router) {
    
    /*this.pocelo = localStorage.getItem('pocelo');
    if(this.pocelo){
      //window.location.reload();
    }*/
    this.osoba = JSON.parse(localStorage.getItem('osoba')!);
    
    this.subscription = interval(1000)
    .subscribe((x : any) => { 
      this.dostavljacService.proveraStatusa(this.osoba.Id).subscribe((response : any)=>{
        if(response['status'] == 0){
          localStorage.removeItem("osoba");
          localStorage.removeItem("token");
          this.router.navigate(['/login'])
        }
      });
    });
   

    this.prihvatio = JSON.parse(localStorage.getItem('prihvatio')!);
    console.log(this.prihvatio)
    /*
    var object = JSON.parse(localStorage.getItem('prihvatio')!); 
    console.log(object)
    this.prihvatio.idPorudzbine = object['idPorudzbine'];
    this.prihvatio.vrijeme = object['vrijeme'];
    console.log(object)*/
  }
}
