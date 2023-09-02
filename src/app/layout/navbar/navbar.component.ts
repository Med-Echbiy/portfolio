import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  collapse: 'hidden' | 'showed' = 'hidden';
  whatIcon = true;
  constructor() {}
  CollapseIt() {
    this.collapse = this.collapse === 'hidden' ? 'showed' : 'hidden';
    if (this.collapse === 'hidden') {
      this.whatIcon = true;
    } else {
      this.whatIcon = false;
    }
  }
}
