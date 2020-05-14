import { Component, OnInit, OnChanges, EventEmitter, Output, Input } from '@angular/core';
import { AssistantService } from 'src/services/assistant.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  @Input() showChat: boolean
  @Output() closeChat: EventEmitter<any> = new EventEmitter();

  constructor(private watsonAssistantService: AssistantService) { }

  sessionID: string = "";
  array = []
  context = {};
  textUser: string;
  clearAll: boolean;
  arrayChat = [];
  arrayBotoes = [];
  messageToWatson = {};
  wait4Response: boolean = false
  typingTimer;
  concatUserTexts = "";

  closeChatF() {
    this.context = {};
    this.clearAll = true;
    this.sessionID = "";
    if (this.clearAll = true) {
      this.arrayChat = [];
      this.arrayBotoes = [];
    }
    this.closeChat.emit();
  }

  ngOnInit() {
    this.ConversationFormat('');
  }
  //pega o envio do usuário
  onSubmit(userInput) {
    console.log("-----on submit -----")
    console.log(userInput)
    console.log(this.context)
    if (userInput) {
      this.arrayChat.push({
        sentBy: 'user',
        text: userInput
      })
      this.ConversationFormat(userInput)
    }
  }
  //pega o output do bot
  responseAssistant(text) {
    console.log(text, "ASDASDSADSAD")
    this.arrayChat.push({
      sentBy: 'bot',
      text: text
    })
  }
  //monta o input do usuário e o output do bot para o envio, adicionando o context :) 
  ConversationFormat(text) {
    const messageWatson = {
      //se estou recebendo messege no backend, devo colocar message
      message: text,
      context: this.context
    }
    console.log("----- conversation format -----")
    console.log(messageWatson)
    this.returnAssistant(messageWatson)
  }

  returnAssistant(objConversation) {
    this.watsonAssistantService.assistantConversation(objConversation).subscribe(response => {
      console.log("----- response -----")
      console.log(response, "asdasdasdasdasd")
      this.context = response.data.context
      response.data.output.text.map((content) => {
        //atruibuição de valor no response
        if (content) {
          this.responseAssistant(content)
        }
        else {
          content = null
        }
      })
    })
  }

}
