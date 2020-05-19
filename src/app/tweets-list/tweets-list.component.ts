import { Component, OnInit } from '@angular/core';
import { FezinhaService } from 'src/services/fezinha.service';

@Component({
  selector: 'app-tweets-list',
  templateUrl: './tweets-list.component.html',
  styleUrls: ['./tweets-list.component.scss']
})
export class TweetsListComponent implements OnInit {

  constructor(private twitterService: FezinhaService) { }

  listTitle: string;
  arrayListTweets = [];
  arrayApis = ["getCoronaVirusSp", "getQuarentenaSp", "getCoronaSantos", "getQuarentenaSantos", "getCoronaCampinas"];

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
      }, 300000 * arrayApis.length - 300000 * position);

    })
  }

  returnTwitter(objTwitter) {
    this.twitterService.listTwitter(objTwitter).subscribe((response: any) => {
      this.arrayListTweets = [];

      this.listTitle = objTwitter;
      if (this.listTitle == "getQuarentenaSantos")
        this.listTitle = "Quarentena em Santos"
      if (this.listTitle == "getQuarentenaCampinas")
        this.listTitle = "Quarentena em Campinas"
      if (this.listTitle == "getQuarentenaSp")
        this.listTitle = "Quarentena em São Paulo"

      if (this.listTitle == "getCoronaVirusSp")
        this.listTitle = "Coronavírus em São Paulo"
      if (this.listTitle == "getCoronaCampinas")
        this.listTitle = "Coronavírus em Campinas"
      if (this.listTitle == "getCoronaSantos")
        this.listTitle = "Coronavírus em Santos"

      response.result.map((respostas) => {


        this.arrayListTweets.push(
          {
            text: respostas.tweet,
            subject: "#" + respostas.sentiment[0].text,
            label: respostas.sentiment[0].label
          }
        );
      });
    });
    console.log(this.arrayListTweets);
  }

}
