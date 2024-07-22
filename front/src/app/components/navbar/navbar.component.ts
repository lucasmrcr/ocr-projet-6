import {Component} from '@angular/core';

@Component({
  selector: 'app-component-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {

  showMobileNavBar: boolean = false;

  /**
   * Open the mobile navigation bar
   */
  openMobileNavBar(): void {
    this.showMobileNavBar = true;
  }

  /**
   * Close the mobile navigation bar
   */
  closeMobileNavBar(): void {
    this.showMobileNavBar = false;
  }

}
