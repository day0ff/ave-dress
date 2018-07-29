import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Dress } from '../entity/dress';
import { DressService } from '../service/dress.service';
import * as $ from "jquery";

@Component({
  selector: 'app-dress-detail',
  templateUrl: './dress-detail.component.html',
  styles: []
})
export class DressDetailComponent implements OnInit {
  @Input() dress: Dress;

  getDress(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.dressService.getDress(+id).subscribe(dress => this.dress = dress);
  }

  constructor(
    private route: ActivatedRoute,
    private dressService: DressService
  ) { }

  ngOnInit() {
    this.getDress();
  }
}
