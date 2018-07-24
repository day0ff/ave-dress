import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styles: [`
    .navbar{
      font-size:200%;
    }
    .navbar-brand{
      font-size:100%;
    }
    `]
})
export class NavigationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
