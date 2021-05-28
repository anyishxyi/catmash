import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VoteComponent } from './vote/vote.component';
import { RakingComponent } from './raking/raking.component';

const routes: Routes = [
  { path: 'vote', component: VoteComponent },
  { path: 'raking', component: RakingComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
