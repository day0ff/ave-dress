import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Dress } from '../entity/dress';
import { DRESS } from '../../assets/mocks/dress';

@Injectable({
  providedIn: 'root'
})
export class DressService {

  constructor() { }

  getDresses(): Observable<Dress[]> {
    return of(DRESS);
  }
}
