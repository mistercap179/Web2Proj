import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { PorudzbinaPrihvatio } from '../models/porudzbinaPrihvatio.model';
import { PorudzbineService } from '../services/porudzbine.service';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit, OnDestroy {

  @Input()
  prihvatio: PorudzbinaPrihvatio;

  private subscription: Subscription;

  public dateNow : any;
  public dDay : any ;
  milliSecondsInASecond = 1000;
  hoursInADay = 24;
  minutesInAnHour = 60;
  SecondsInAMinute  = 60;

  public timeDifference : any;
  public secondsToDday: any;
  public minutesToDday: any;
  public hoursToDday: any;
  public daysToDday: any;

  constructor(private porudzbineService : PorudzbineService){}


  public addHours(numOfHours : any, date = new Date()) {
    const dateCopy = new Date(date.getTime());
  
    dateCopy.setTime(dateCopy.getTime() + numOfHours * 60 * 60 * 1000);
  
    return dateCopy;
  }


  private getTimeDifference () {
      this.timeDifference = this.dDay.getTime() - new Date().getTime();
      this.allocateTimeUnits(this.timeDifference);
  }

  private allocateTimeUnits (timeDifference : any) {
      this.secondsToDday = Math.floor((timeDifference) / (this.milliSecondsInASecond) % this.SecondsInAMinute);
      this.minutesToDday = Math.floor((timeDifference) / (this.milliSecondsInASecond * this.minutesInAnHour) % this.SecondsInAMinute);
      this.hoursToDday = Math.floor((timeDifference) / (this.milliSecondsInASecond * this.minutesInAnHour * this.SecondsInAMinute) % this.hoursInADay);
      this.daysToDday = Math.floor((timeDifference) / (this.milliSecondsInASecond * this.minutesInAnHour * this.SecondsInAMinute * this.hoursInADay));
      if(this.secondsToDday <= 0 && this.minutesToDday <= 0 && this.hoursToDday <= 0 && this.daysToDday <= 0){
          var el = document.getElementById('timer-div');
          if(el){
            el.style.display="none";
          }

          this.porudzbineService.dostavljeno(this.prihvatio.idPorudzbine).subscribe((porudzbinee : any)=>{
            localStorage.removeItem('prihvatio');
            window.location.reload();
          });

      }
  }

  ngOnInit() {
    this.dateNow = new Date(this.prihvatio.vrijeme);
    this.dDay = this.addHours(0.01,this.dateNow);
     this.subscription = interval(1000)
         .subscribe((x : any) => { this.getTimeDifference(); });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}