import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-iformation',
  templateUrl: './iformation.component.html',
  styles: [
    `
    .container{
      padding:0.5em;
    }
    h2{
      white-space: nowrap;
      font-size:160%;
    }
    h2 span{
      cursor:pointer;
    }
    @media screen and (max-width: 576px) {
      h2{
        font-size:95%;
      }
    }
    `
  ]
})
export class IformationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
