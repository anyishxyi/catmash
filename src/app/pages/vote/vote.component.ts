import { Component, OnInit } from '@angular/core';
import { CatService } from '../../service/cat.service';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.scss']
})
export class VoteComponent implements OnInit {
  votes: number = 0;
  voters: number = 0;
  cats: any[] = [];
  data: any = {};

  constructor(private catService: CatService) { }

  ngOnInit(): void {
    this.voters = 12342;
    this.cats = this.catService.getCats();
    this.data = this.randomCats();
    this.votes = this.cats.reduce((acc, curr) => console.log(curr.vote));
    console.log(this.votes)
  }

  selectedCat(idCatSelected: number): void {
    console.log({idCatSelected})
    this.data = this.randomCats();
  }

  randomCats(): any {
    const id1 = Math.floor(Math.random() * this.cats.length);
    let id2 = id1;
    while (id1 === id2) {
      id2 = Math.floor(Math.random() * this.cats.length);
    }

    return {first: this.cats.find(cat => cat.id === id1), second: this.cats.find(cat => cat.id === id2)}
  }

}
