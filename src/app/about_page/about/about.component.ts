import { Component, HostBinding } from '@angular/core';
import { routeAnimationState } from 'src/app/route_transition_animations';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  animations: [routeAnimationState],
})
export class AboutComponent {
  @HostBinding('@routeAnimationTrigger') routeAnimation = true;
}
