import { Component, HostBinding, SimpleChanges } from '@angular/core';
import { routeAnimationState } from '../route_transition_animations';
import { NavigateAnimationService } from '../navigation/navigate-animation.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [routeAnimationState],
})
export class HomeComponent {
  @HostBinding('@routeAnimationTrigger') routeAnimation = true;
  constructor(private navigation: NavigateAnimationService) {}
}
