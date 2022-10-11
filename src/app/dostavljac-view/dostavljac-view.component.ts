import { Component, OnInit } from '@angular/core';
import { SendDataService } from '../services/send-data.service';

@Component({
  selector: 'app-dostavljac-view',
  templateUrl: './dostavljac-view.component.html',
  styleUrls: ['./dostavljac-view.component.css']
})
export class DostavljacViewComponent implements OnInit {
  public prihvatio : any;
  public pocelo : any;
  public mess : any;
  constructor() {

    this.pocelo = localStorage.getItem('pocelo');
    if(this.pocelo){
      window.location.reload();
    }
    this.prihvatio = JSON.parse(localStorage.getItem('prihvatio')!); 
  }

  ngOnInit(): void {
  }

}
