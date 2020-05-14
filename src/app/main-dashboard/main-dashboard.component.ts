import { Component, OnInit } from '@angular/core';
import { CovidApiService } from 'src/services/covid-api.service';

@Component({
  selector: 'app-main-dashboard',
  templateUrl: './main-dashboard.component.html',
  styleUrls: ['./main-dashboard.component.scss']
})
export class MainDashboardComponent implements OnInit {

  numberCases: any
  numberDeaths: any
  showChat: boolean = false

  constructor(private covidApi: CovidApiService) { }

  ngOnInit() {
    this.covidApi.dataCovid().subscribe((response: any) => {
      this.numberCases = response.Casos
      this.numberDeaths = response.Mortes
    })
  }

  toggleChat() {
    this.showChat = !this.showChat
  }

}
