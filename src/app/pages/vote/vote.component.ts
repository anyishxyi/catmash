import { Component, OnInit } from '@angular/core';
import { CatService } from '../../service/cat.service';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.scss']
})
export class VoteComponent implements OnInit {
  voters: number = 0;

  constructor(private catService: CatService) { }

  ngOnInit(): void {
    this.voters = 12801;
    this.catService.getCats().subscribe(cats => console.log(cats))
  }

  onSelect(): void {

  }

}
