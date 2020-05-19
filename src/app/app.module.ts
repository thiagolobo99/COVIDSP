import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainDashboardComponent } from './main-dashboard/main-dashboard.component';
import { ChatComponent } from './chat/chat.component';
import { FormsModule } from '@angular/forms';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HttpClientModule } from '@angular/common/http';
import { TweetsListComponent } from './tweets-list/tweets-list.component';

@NgModule({
  declarations: [
    AppComponent,
    MainDashboardComponent,
    ChatComponent,
    NavBarComponent,
    TweetsListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBXOy1WW_d_hmlLwv5ppJBAsOJprDllXfo' + '&libraries=visualization'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
