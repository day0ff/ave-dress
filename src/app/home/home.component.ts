import { Component, OnInit } from '@angular/core';

import { Dress } from '../entity/dress';
import { DressService } from '../service/dress.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  dresses: Dress[];
  getDresses(): void {
    this.dressService.getDresses()
      .subscribe(dresses => this.dresses = dresses);
  }
  constructor(private dressService: DressService) { }

  ngOnInit() {
    this.getDresses();
  }

}
