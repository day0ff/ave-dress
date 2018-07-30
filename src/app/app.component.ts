import { Component, HostListener } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('scrollNavigation', [
      state('show', style({
        opacity: 1,
        transform: "translateX(0)"
      })),
      state('hide', style({
        opacity: 0,
        transform: "translateY(-100%)"
      })),
      transition('show => hide', animate('500ms ease-out')),
      transition('hide => show', animate('500ms ease-in'))
    ])
  ]
})
export class AppComponent {
  state = 'show';
  oldScrollPosition = 0;
  scrollDistance = 0;
  scrollSwitch = 'down';
  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    const scrollPosition = window.pageYOffset;
    if (scrollPosition > this.oldScrollPosition) {
      if (this.scrollSwitch == 'up') this.scrollDistance = 0;
      this.scrollSwitch = 'down';
      this.scrollDistance += scrollPosition - this.oldScrollPosition;
    } else {
      if (this.scrollSwitch == 'down') this.scrollDistance = 0;
      this.scrollSwitch = 'up';
      this.scrollDistance += this.oldScrollPosition - scrollPosition;
    }
    this.oldScrollPosition = scrollPosition;
    if (this.scrollDistance >= 150 && this.scrollSwitch == 'down') this.state = 'hide';
    if (this.scrollDistance >= 150 && this.scrollSwitch == 'up') this.state = 'show';
    if (scrollPosition <= 100) this.state = 'show';
  }

}
