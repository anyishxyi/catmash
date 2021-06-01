import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VoteComponent } from './pages/vote/vote.component';
import { RankingComponent } from './pages/ranking/ranking.component';

const routes: Routes = [
  { path: 'vote', component: VoteComponent },
  { path: 'ranking', component: RankingComponent },
  { path: '**', component: VoteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
