import {Component} from '@angular/core';

@Component({
  selector: 'app-component-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {

  showMobileNavBar = false;

  openMobileNavBar() {
    this.showMobileNavBar = true;
  }

  closeMobileNavBar() {
    this.showMobileNavBar = false;
  }

}
