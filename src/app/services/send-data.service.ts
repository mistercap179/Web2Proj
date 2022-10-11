import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SendDataService {
  private mess : any ="";
  private messageSource = new BehaviorSubject<any>(this.mess);
  public currentMessage = this.messageSource.asObservable();

  constructor(){}

  changeMessage(message : any){
      this.messageSource.next(message);
      return message;
  }

  
}
