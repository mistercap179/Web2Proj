import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { SendDataService } from '../services/send-data.service';
import { interval, Subscription } from 'rxjs';
import { PorudzbineService } from '../services/porudzbine.service';
import { PorudzbinaPrihvatio } from '../models/porudzbinaPrihvatio.model';

@Component({
  selector: 'app-dashboard-potrosac',
  templateUrl: './dashboard-potrosac.component.html',
  styleUrls: ['./dashboard-potrosac.component.css']
})
export class DashboardPotrosacComponent {
  /** Based on the screen size, switch from standard to one column per row */
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

  public porucio : boolean;
  public prihvatio : any;
  public prihvatioPorudzbinu : PorudzbinaPrihvatio;
  public porudzbinaId : any;
  public subscription : Subscription;

  constructor(private breakpointObserver: BreakpointObserver,private dataService : SendDataService,private porudzbinaService : PorudzbineService) { 
    this.dataService.currentMessage.subscribe(message => this.porudzbinaId = message);
    //console.log(this.porudzbinaId)
    /// moram inicijano staviti da ne salje proveru 

    this.subscription = interval(1000)
         .subscribe(
          (x : any) => 
          { 
            if(this.porudzbinaId) {
              this.porudzbinaService.proveraPorudzbine(this.porudzbinaId).subscribe(
                (json : any) =>{
                console.log(json['status']);
                
                console.log(localStorage.getItem("prihvatioPorudzbina"));
                if(json['status'] == 0){
          
                }
                else if(json['status'] == 1 ){

                  if(localStorage.getItem("prihvatioPorudzbina") == null){

                    this.prihvatio = new Date();
                    localStorage.setItem('prihvatioPorudzbina',this.prihvatio);
  
                  }
                  var el = document.getElementById('timer');
                  var el2 = document.getElementById('timer-div');
                  console.log(el);
                  if(el){
                    el.style.display="block";
                  }
                  if(el2){
                    el2.style.display="block";
                  }

                }
                else{
          
                }
              }, 
              (error: any) => {
                console.log(error)
              }
              )
            }
             }
        );

    
    
  }

  ngOnInit(): void {
  }

}
