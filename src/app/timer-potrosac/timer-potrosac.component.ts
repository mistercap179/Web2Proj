import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { iif, interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-timer-potrosac',
  templateUrl: './timer-potrosac.component.html',
  styleUrls: ['./timer-potrosac.component.css']
})
export class TimerPotrosacComponent implements OnInit, OnDestroy {
  

  private subscription: Subscription;

  public prihvatio : any;
  public porucio : boolean;
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

  public addHours(numOfHours : any, date = new Date()) {
    const dateCopy = new Date(date.getTime());
  
    dateCopy.setTime(dateCopy.getTime() + numOfHours * 60 * 60 * 1000);
  
    return dateCopy;
  }


  private getTimeDifference () {
      if(this.dDay){
        this.timeDifference = this.dDay.getTime() - new Date().getTime();
        this.allocateTimeUnits(this.timeDifference);
      }
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
          console.log('gotovo');
          localStorage.removeItem('prihvatioPorudzbina');
          this.porucio = false;
          localStorage.setItem('porucio',(String)(this.porucio));
          console.log( localStorage.getItem('porucio'));
          
          window.location.reload();

      }
  }

  ngOnInit() {


     this.subscription = interval(1000)
         .subscribe((x : any) => { this.getTimeDifference(); 
        
          this.prihvatio = localStorage.getItem('prihvatioPorudzbina')
          
          if(this.prihvatio != null){
            this.dateNow = new Date(this.prihvatio);
          }
          this.dDay = this.addHours(0.01,this.dateNow);


        });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
