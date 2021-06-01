import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RankingComponent } from './pages/ranking/ranking.component';
import { VoteComponent } from './pages/vote/vote.component';

@NgModule({
  declarations: [
    AppComponent,
    RankingComponent,
    VoteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
