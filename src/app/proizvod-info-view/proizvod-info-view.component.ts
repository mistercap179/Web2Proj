import { Component, OnInit } from '@angular/core';
import { ProizvodInfo } from '../models/dataProizvodInfo.model';
import { SendDataService } from '../services/send-data.service';

@Component({
  selector: 'app-proizvod-info-view',
  templateUrl: './proizvod-info-view.component.html',
  styleUrls: ['./proizvod-info-view.component.css']
})
export class ProizvodInfoViewComponent implements OnInit {

  public proizvodInfo : ProizvodInfo;

  constructor(private dataService : SendDataService) { }

  ngOnInit(): void {
    this.dataService.currentMessage.subscribe(message => this.proizvodInfo = message);
  }

}
