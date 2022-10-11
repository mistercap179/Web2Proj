import { Component, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { PorudzbineService } from '../services/porudzbine.service';
import { SendDataService } from '../services/send-data.service';

@Component({
  selector: 'app-potrosac-view',
  templateUrl: './potrosac-view.component.html',
  styleUrls: ['./potrosac-view.component.css']
})
export class PotrosacViewComponent implements OnInit {
  public prihvatio : any;
  public porudzbinaId : any;
  public subscription : Subscription;
  
  constructor(private dataService : SendDataService,private porudzbinaService : PorudzbineService) { 
    this.dataService.currentMessage.subscribe(message => this.porudzbinaId = message);
    //console.log(this.porudzbinaId)
    /// moram inicijano staviti da ne salje proveru 

    if(this.porudzbinaId){

    }
    this.subscription = interval(1000)
         .subscribe(
          (x : any) => 
          { 
            if(this.porudzbinaId) {
              this.porudzbinaService.proveraPorudzbine(this.porudzbinaId).subscribe(
                (json) =>{
                console.log(json['status']);
                if(json['status'] == 0){
          
                }
                else if(json['status'] == 1){
                  this.prihvatio = json['status'];
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
