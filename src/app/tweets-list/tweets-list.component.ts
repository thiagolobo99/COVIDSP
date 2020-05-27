import { Component, OnInit } from "@angular/core";
import { TwitterApiService } from "src/services/twitter-api";

@Component({
  selector: "app-tweets-list",
  templateUrl: "./tweets-list.component.html",
  styleUrls: ["./tweets-list.component.scss"],
})
export class TweetsListComponent implements OnInit {
  constructor(private twitterService: TwitterApiService) { }

  listTitle: string;
  arrayListTweets = [];
  arrayApis = [
    "getCoronaVirusSp",
    "getQuarentenaSp",
    "getCoronaSantos",
    "getQuarentenaSantos",
    "getCoronaCampinas",
  ];

  ngOnInit() {
    this.returnTwitter("getCoronaVirusSp");

    this.receiveInformationFromApi(this.arrayApis);
  }

  receiveInformationFromApi(arrayApis) {
    arrayApis.map((api, position) => {
      setTimeout(() => {
        this.returnTwitter(api);
        if (!position) {
          this.receiveInformationFromApi(this.arrayApis);
        }
      }, 30000 * arrayApis.length - 30000 * position);
    });
  }

  returnTwitter(objTwitter) {
    this.twitterService.dataTwitter(objTwitter).subscribe((response: any) => {
      this.arrayListTweets = [];

      if (this.arrayListTweets.length == 0) {
      }
      this.listTitle = objTwitter;
      if (this.listTitle == "getQuarentenaSantos")
        this.listTitle = "Quarentena em Santos";
      if (this.listTitle == "getQuarentenaCampinas")
        this.listTitle = "Quarentena em Campinas";
      if (this.listTitle == "getQuarentenaSp")
        this.listTitle = "Quarentena em São Paulo";

      if (this.listTitle == "getCoronaVirusSp")
        this.listTitle = "Coronavírus em São Paulo";
      if (this.listTitle == "getCoronaCampinas")
        this.listTitle = "Coronavírus em Campinas";
      if (this.listTitle == "getCoronaSantos")
        this.listTitle = "Coronavírus em Santos";

      response.result.map((respostas) => {
        this.arrayListTweets.push({
          text: respostas.tweet,
          subject: "#" + respostas.sentiment[0].text,
          label: respostas.sentiment[0].label,
        });
      });
    });

  }
}
