import { Component, HostBinding, OnInit } from '@angular/core';
import {
  NavigationEnd,
  NavigationStart,
  Router,
  RouterOutlet,
} from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { routeAnimationState } from './route_transition_animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  // @HostBinding('@routeAnimationTrigger') routeAnimation = true;
  title = 'open';
  animationState = new BehaviorSubject<'open' | 'close'>('open');
  animationValue$ = this.animationState.asObservable();
  constructor(private router: Router) {
    this.router.events.subscribe((events) => {
      if (events instanceof NavigationEnd) {
        // window.scrollTo(0, 0);
      }
    });
  }
}
