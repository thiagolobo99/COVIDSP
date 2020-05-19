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

  receiveInformationFromApi(arrayApis){
    arrayApis.map((api, position) =>{
      setTimeout(() => {
        this.returnTwitter(api);
        if(!position){
          this.receiveInformationFromApi(this.arrayApis);
        }
      }, 10000 * arrayApis.length - 10000 * position);
      
    })
  }

  returnTwitter(objTwitter) {
    this.twitterService.listTwitter(objTwitter).subscribe((response:any) => {
      this.arrayListTweets = [];

      this.listTitle = objTwitter;
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
