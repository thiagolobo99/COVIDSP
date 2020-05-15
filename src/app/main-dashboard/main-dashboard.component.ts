import { Component, OnInit } from '@angular/core';
import { CovidApiService } from 'src/services/covid-api.service';
import { TwitterApiService } from 'src/services/twitter-api';


@Component({
  selector: 'app-main-dashboard',
  templateUrl: './main-dashboard.component.html',
  styleUrls: ['./main-dashboard.component.scss']
})
export class MainDashboardComponent implements OnInit {

  numberCases: any
  numberDeaths: any
  showChat: boolean = false
  feeling: any;
  tweets:any;
  



  constructor(private covidApi: CovidApiService, private twitterApi: TwitterApiService) { }

  ngOnInit() {
    this.covidApi.dataCovid().subscribe((response: any) => {
      this.numberCases = response.Casos
      this.numberDeaths = response.Mortes
    })

      this.twitterApi.dataTwitter().subscribe((response: any) => {
    })
  }

  toggleChat() {
    this.showChat = !this.showChat
  }

}
