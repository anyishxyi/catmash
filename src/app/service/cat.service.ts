import { Injectable } from '@angular/core';

import { Cat } from './cat';
import { CATS } from './mock-cats';

import cats from '../../assets/img/cats/cats-data.json';

@Injectable({
  providedIn: 'root'
})
export class CatService {

  constructor() {}

  getCats(): any[] {
    return cats.data;
  }
}