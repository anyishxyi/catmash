import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RankingComponent } from './pages/ranking/ranking.component';
import { VoteComponent } from './pages/vote/vote.component';
import { CatUiComponent } from './components/cat-ui/cat-ui.component';

@NgModule({
  declarations: [
    AppComponent,
    RankingComponent,
    VoteComponent,
    CatUiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
