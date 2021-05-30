import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.scss']
})
export class VoteComponent implements OnInit {
  voters: number = 0;

  constructor() { }

  ngOnInit(): void {
    this.voters = 12801;
  }

}
