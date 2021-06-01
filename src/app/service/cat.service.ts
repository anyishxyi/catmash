import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Cat } from './cat';
import { CATS } from './mock-cats';

@Injectable({
  providedIn: 'root'
})
export class CatService {

  constructor() {}

  getCats(): Observable<Cat[]> {
    const cats = of (CATS);
    return cats;
  }
}
