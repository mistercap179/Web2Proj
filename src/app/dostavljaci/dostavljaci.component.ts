import { Component, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { Dostavljac } from '../models/dostavljac.model';
import { DostavljacService } from '../services/dostavljac.service';

@Component({
  selector: 'app-dostavljaci',
  templateUrl: './dostavljaci.component.html',
  styleUrls: ['./dostavljaci.component.css']
})
export class DostavljaciComponent implements OnInit {

  public subscription : Subscription;
  public dostavljaci : Dostavljac[] = [];
  
  constructor(private dostavljacService : DostavljacService) { 
    this.subscription = interval(1000)
         .subscribe((x : any) => { 
          this.dostavljacService.getDostavljaci().subscribe(dostavljacget => {
            this.dostavljaci = dostavljacget;
          });
        });
    
    
    }

  ngOnInit(): void {
  }

  public prihvatiAcc(event : any,id : number){
    let statusSend = 0;
    console.log(id);
    this.dostavljacService.changeStatus(id,statusSend).subscribe((json :any) =>{
        console.log(json);
        window.location.reload();
    });
    
  }

  public checkValue(event: any,id : number,status : any){
    console.log(status);
    let statusSend : number;
    if(status == true){
      statusSend = 1;
    }else{
      statusSend = 0;
    }
    this.dostavljacService.changeStatus(id,statusSend).subscribe((jsonss:any)=>{
      //this.isChecked=jsonss;
      //console.log(this.isChecked);
    });
 }

}
