import { Component, OnInit, Input } from '@angular/core';

import { Dress } from '../entity/dress';

@Component({
  selector: 'app-dress',
  templateUrl: './dress.component.html',
  styles: []
})
export class DressComponent implements OnInit {
  @Input() dress: Dress;

  constructor() { }

  ngOnInit() {
  }

}
